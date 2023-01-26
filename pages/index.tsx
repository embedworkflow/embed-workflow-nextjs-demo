import { useEffect } from "react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import JWT from "jsonwebtoken";
import Link from "next/link";

export async function getServerSideProps(context) {
  // Create execution_data which contains additional data that is not including in the form.
  //   We encode this data as a JWT using your account secret to keep it secure on the client.
  const secret = process.env.EMBED_WORFKLOW_SK;
  const payload = {
    slack_url:
      "REPLACE_ME_WITH_YOUR_SLACK_WEBHOOK_URL",
    user_id: 1,
    verification_url: "http://localhost:3000/verify"
  };
  const executionData = JWT.sign(payload, secret, { algorithm: "HS256" });

  return {
    props: { executionData },
  };
};

const Home: NextPage = (props) => {
  const { executionData } = props;
  const loadWorkflows = () => EWF.load();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.ewf.to/ewf-0033.js";
    script.onload = loadWorkflows;

    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <div className="mx-auto max-w-2xl">
        <div className="sm:flex sm:items-center text-left">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Create a Lead
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              Add a lead by the Embed Workflow Form below.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Link href="/leads" legacyBehavior>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                See all leads
              </button>
            </Link>
          </div>
        </div>

        <div
          style={{ height: 500 }}
          className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"
        >
          <div className="mt-6 w-96 rounded-xl border p-6 text-left">
            <link
              rel="stylesheet"
              media="screen"
              href="https://cdn.ewf.to/ewf-0033.css"
            />

            {executionData && (
              <div
                className="EWF__form"
                data-execution-data={executionData}
                data-id="REPLACE_ME_WITH_YOUR_FORM_ID"
              ></div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
