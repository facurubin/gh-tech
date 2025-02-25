import { Header } from "@/components/organisms/Header/Header";
import { UserProfile } from "@/components/templates/UserProfile/UserProfile";
import { repositoriesService } from "@/services/repositories";
import { usersService } from "@/services/users";
import { GetServerSideProps } from "next";
import { isAxiosError } from "axios";
import Head from "next/head";

export default function Profile({ profile }) {
  return (
    <>
      <Head>
        <title>Github users</title>
        <meta name="description" content="Github users challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Github users" />
      <UserProfile profile={profile} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const jsonRedirect = {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
  const { username = "" } = params as { username: string };
  if (!username) {
    return jsonRedirect;
  }
  try {
    const [user, repositories] = await Promise.all([
      usersService.getByUsername(username),
      repositoriesService.listByUsername(username),
    ]);
    if (!user || !repositories) {
      return jsonRedirect;
    }

    const profile = { user, repositories };
    return { props: { profile } };
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response);
    }
    return jsonRedirect;
  }
};
