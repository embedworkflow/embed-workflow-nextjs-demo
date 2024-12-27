import { useEffect } from "react";
import { useRouter } from "next/router";

import JWT from "jsonwebtoken";
import UserNavigator from "/components/UserNavigator";
import Layout from "/components/Layout";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const secret = process.env.EMBED_WORKFLOW_SK;
  const currentTime = Math.floor(Date.now() / 1000);
  const payload = {
    sub: id, // <--- your user's unique identifier
    iat: currentTime,
    exp: currentTime + 60 * 60,
    discover: true, // <--- this tells EW to auto discover users (creating users on the fly).
  };
  const token = JWT.sign(payload, secret, { algorithm: "HS256" });

  const options = {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.EMBED_WORKFLOW_SK}` },
  };

  const userPayload = JSON.stringify({
    config: {
      user_data: {
        team_wave_api_key: "testingABC",
        stages: [
          { value: 173080, label: "Lead Discovered" },
          { value: 173081, label: "Contact Initiated" },
          { value: 173082, label: "Needs Identified" },
          { value: 173083, label: "Proposal Submitted" },
          { value: 173084, label: "In Negotiation" },
        ],
      },
    },
  });

  // Optional: One way to update a user's data is by the users upsert API endpoint.
  //   Docs: https://docs.embedworkflow.com/reference#upsert-a-user
  const requestOptions = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${process.env.EMBED_WORKFLOW_SK}`,
      "Content-Type": "application/json",
    },
    body: userPayload,
  };

  fetch(`https://embedworkflow.com/api/v1/users/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return {
    props: {
      token,
      embedWorkflowPk: process.env.EMBED_WORKFLOW_PK,
      ewfVersion: process.env.EMBED_WORKFLOW_UI_VERSION,
    },
  };
}

const Workflows = (props) => {
  const { token, ewfVersion, embedWorkflowPk } = props;
  const router = useRouter();
  const { id } = router.query;
  const loadWorkflows = () => EWF.load(embedWorkflowPk, { jwt: token });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://cdn.ewf.to/ewf-${ewfVersion}.js`;
    script.onload = loadWorkflows;

    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <UserNavigator userId={id} />

      <div className="mx-auto">
        <link
          rel="stylesheet"
          media="screen"
          href={`https://cdn.ewf.to/ewf-${ewfVersion}.css`}
        />
        <div
          className="EWF__app"
          data-base-path={`users/${id}/workflows`}
        ></div>
      </div>
    </Layout>
  );
};

export default Workflows;
