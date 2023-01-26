import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { makeSerializable } from "../lib/util";
import prisma from "../lib/prisma";
import Layout from "../components/Layout";

export const getServerSideProps: GetServerSideProps = async () => {
  const leads = await prisma.lead.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return {
    props: { leads: makeSerializable(leads) },
  };
};

const Leads: NextPage = ({ leads }) => {
  const router = useRouter();
  const openLeadPage = (leadId) => router.push(`/leads/${leadId}`);

  return (
    <Layout>
      <div className="mx-auto max-w-2xl">
        <div className="sm:flex sm:items-center text-left">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Leads</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the leads in your account.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Link href="/" legacyBehavior>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
              >
                Add lead
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="relative py-3 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {leads.map((lead) => (
                      <tr
                        key={lead.id}
                        onClick={() => openLeadPage(lead.id)}
                        className="cursor-pointer"
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {lead.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {lead.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {lead.phone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leads;
