import React, { ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex w-full flex-1 flex-col items-center px-20 text-center">
      <h1 className="text-6xl font-bold py-20">
        Demo for{" "}
        <a className="text-blue-600" href="https://embedworkflow.com">
          Embed Workflow
        </a>
      </h1>

      <div className="w-full">{props.children}</div>
    </main>

    <footer className="flex h-24 w-full items-center justify-center border-t"></footer>
  </div>
);

export default Layout;
