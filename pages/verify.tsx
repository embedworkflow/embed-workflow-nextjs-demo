import type { NextPage } from "next";
import Layout from "../components/Layout";
import Link from "next/link";

const Verify: NextPage = (props) => {
  return (
    <Layout>
      <div className="text-3xl font-medium"><span className="text-green-600">Verfied!</span> Thanks for signing up.</div>

      <div className="mt-8">
        <Link href="/" legacyBehavior>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add your first lead
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Verify;
