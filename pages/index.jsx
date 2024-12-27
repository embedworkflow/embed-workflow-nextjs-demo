import Layout from "../components/Layout";

const Home = (props) => {
  return (
    <Layout>
      <div className="relative isolate overflow-hidden">
        <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
          <dl className="mx-auto grid max-w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
            <div className="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8">
              <dt className="text-sm font-medium leading-6 text-gray-500">
                Revenue
              </dt>
              <dd className="text-xs font-medium text-gray-700">+4.75%</dd>
              <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                $405,091.00
              </dd>
            </div>
            <div className="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 sm:border-l">
              <dt className="text-sm font-medium leading-6 text-gray-500">
                Overdue invoices
              </dt>
              <dd className="text-xs font-medium text-rose-600">+54.02%</dd>
              <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                $12,787.00
              </dd>
            </div>
            <div className="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 lg:border-l">
              <dt className="text-sm font-medium leading-6 text-gray-500">
                Outstanding invoices
              </dt>
              <dd className="text-xs font-medium text-gray-700">-1.39%</dd>
              <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                $245,988.00
              </dd>
            </div>
            <div className="flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8 sm:border-l">
              <dt className="text-sm font-medium leading-6 text-gray-500">
                Expenses
              </dt>
              <dd className="text-xs font-medium text-rose-600">+10.18%</dd>
              <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                $30,156.00
              </dd>
            </div>
          </dl>
        </div>

        <div
          className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
          aria-hidden="true"
        >
          <div
            className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
            style={{
              clipPath:
                "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
            }}
          ></div>
        </div>
      </div>

      <div className="space-y-16 py-16 xl:space-y-20">
        <div>
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
              Recent activity
            </h2>
          </div>
          <div className="mt-6 overflow-hidden border-t border-gray-100">
            <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <table className="w-full text-left">
                  <thead className="sr-only">
                    <tr>
                      <th>Amount</th>
                      <th className="hidden sm:table-cell">Client</th>
                      <th>More details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm leading-6 text-gray-900">
                      <th
                        scope="colgroup"
                        colSpan="3"
                        className="relative isolate py-2 font-semibold"
                      >
                        <time dateTime="2023-03-22">Today</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                      </th>
                    </tr>
                    <tr>
                      <td className="relative py-5 pr-6">
                        <div className="flex gap-x-6">
                          <svg
                            className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                              <div className="text-sm font-medium leading-6 text-gray-900">
                                $7,600.00 USD
                              </div>
                              <div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">
                                Paid
                              </div>
                            </div>
                            <div className="mt-1 text-xs leading-5 text-gray-500">
                              $500.00 tax
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                      </td>
                      <td className="hidden py-5 pr-6 sm:table-cell">
                        <div className="text-sm leading-6 text-gray-900">
                          Reform
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          Website redesign
                        </div>
                      </td>
                      <td className="py-5 text-right">
                        <div className="flex justify-end">
                          <a
                            href="#"
                            className="text-sm font-medium leading-6 text-cyan-600 hover:text-cyan-500"
                          >
                            View
                            <span className="hidden sm:inline">
                              {" "}
                              transaction
                            </span>
                            <span className="sr-only">
                              , invoice #00012, Reform
                            </span>
                          </a>
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          Invoice <span className="text-gray-900">#00012</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="relative py-5 pr-6">
                        <div className="flex gap-x-6">
                          <svg
                            className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                              <div className="text-sm font-medium leading-6 text-gray-900">
                                $10,000.00 USD
                              </div>
                              <div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-gray-600 bg-gray-50 ring-gray-500/10">
                                Withdraw
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                      </td>
                      <td className="hidden py-5 pr-6 sm:table-cell">
                        <div className="text-sm leading-6 text-gray-900">
                          Tom Cook
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          Salary
                        </div>
                      </td>
                      <td className="py-5 text-right">
                        <div className="flex justify-end">
                          <a
                            href="#"
                            className="text-sm font-medium leading-6 text-cyan-600 hover:text-cyan-500"
                          >
                            View
                            <span className="hidden sm:inline">
                              {" "}
                              transaction
                            </span>
                            <span className="sr-only">
                              , invoice #00011, Tom Cook
                            </span>
                          </a>
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          Invoice <span className="text-gray-900">#00011</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="relative py-5 pr-6">
                        <div className="flex gap-x-6">
                          <svg
                            className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                              <div className="text-sm font-medium leading-6 text-gray-900">
                                $2,000.00 USD
                              </div>
                              <div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-red-700 bg-red-50 ring-red-600/10">
                                Overdue
                              </div>
                            </div>
                            <div className="mt-1 text-xs leading-5 text-gray-500">
                              $130.00 tax
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                      </td>
                      <td className="hidden py-5 pr-6 sm:table-cell">
                        <div className="text-sm leading-6 text-gray-900">
                          Tuple
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          Logo design
                        </div>
                      </td>
                      <td className="py-5 text-right">
                        <div className="flex justify-end">
                          <a
                            href="#"
                            className="text-sm font-medium leading-6 text-cyan-600 hover:text-cyan-500"
                          >
                            View
                            <span className="hidden sm:inline">
                              {" "}
                              transaction
                            </span>
                            <span className="sr-only">
                              , invoice #00009, Tuple
                            </span>
                          </a>
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          Invoice <span className="text-gray-900">#00009</span>
                        </div>
                      </td>
                    </tr>

                    <tr className="text-sm leading-6 text-gray-900">
                      <th
                        scope="colgroup"
                        colSpan="3"
                        className="relative isolate py-2 font-semibold"
                      >
                        <time dateTime="2023-03-21">Yesterday</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50"></div>
                      </th>
                    </tr>
                    <tr>
                      <td className="relative py-5 pr-6">
                        <div className="flex gap-x-6">
                          <svg
                            className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                              <div className="text-sm font-medium leading-6 text-gray-900">
                                $14,000.00 USD
                              </div>
                              <div className="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20">
                                Paid
                              </div>
                            </div>
                            <div className="mt-1 text-xs leading-5 text-gray-500">
                              $900.00 tax
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100"></div>
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100"></div>
                      </td>
                      <td className="hidden py-5 pr-6 sm:table-cell">
                        <div className="text-sm leading-6 text-gray-900">
                          SavvyCal
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          Website redesign
                        </div>
                      </td>
                      <td className="py-5 text-right">
                        <div className="flex justify-end">
                          <a
                            href="#"
                            className="text-sm font-medium leading-6 text-cyan-600 hover:text-cyan-500"
                          >
                            View
                            <span className="hidden sm:inline">
                              {" "}
                              transaction
                            </span>
                            <span className="sr-only">
                              , invoice #00010, SavvyCal
                            </span>
                          </a>
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          Invoice <span className="text-gray-900">#00010</span>
                        </div>
                      </td>
                    </tr>
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

export default Home;
