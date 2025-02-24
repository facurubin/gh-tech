import Header from "@/components/templates/Header/Header";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Github users</title>
        <meta name="description" content="Github users challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
