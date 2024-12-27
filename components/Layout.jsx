import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>NextJS Embed Workflow Demo</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <div className="min-h-screen bg-gray-100">
      <Nav />

      <main>
        <div className="w-full">{children}</div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
    </div>
  </div>
);

export default Layout;
