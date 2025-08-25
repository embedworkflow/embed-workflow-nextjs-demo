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
        industries: [
          { value: "healthcare", label: "Healthcare" },
          { value: "technology", label: "Technology" },
          { value: "financial_services", label: "Financial Services" },
          { value: "manufacturing", label: "Manufacturing" },
          { value: "retail", label: "Retail" },
          { value: "education", label: "Education" },
          { value: "real_estate", label: "Real Estate" },
          { value: "professional_services", label: "Professional Services" },
        ],
        agents: [
          { label: "Maya Patel", value: 12345 },
          { label: "Ethan Rodriguez", value: 23456 },
          { label: "Sarah Chen", value: 34567 },
          { label: "Marcus Thompson", value: 45678 },
          { label: "Zara Mitchell", value: 56789 },
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
    },
  };
}

const Workflows = (props) => {
  const { token, embedWorkflowPk } = props;
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `!function(){var e=window.EWF=window.EWF||{};if(!e.invoked){e.invoked=!0,e.queue=[],e.load=function(){e.queue.push(arguments)}}}();`;
    document.head.appendChild(inlineScript);

    window.EWF.load(embedWorkflowPk, { jwt: token });

    const script = document.createElement("script");
    script.src = "https://cdn.ewf.to/ewf-loader.js";
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <UserNavigator userId={id} />

      <div className="mx-auto" style={{ height: "calc(100vh - 200px)" }}>
        <div
          className="EWF__app"
          data-base-path={`users/${id}/workflows`}
        ></div>
      </div>
    </Layout>
  );
};

export default Workflows;
