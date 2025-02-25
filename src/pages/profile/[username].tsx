import { Header } from "@/components/organisms/Header/Header";
import { UserProfile } from "@/components/templates/UserProfile/UserProfile";
import { repositoriesService } from "@/services/repositories";
import { usersService } from "@/services/users";
import { GetServerSideProps } from "next";
import { isAxiosError } from "axios";
import Head from "next/head";
import { IProfile } from "@/models/Users";
import { Repository } from "@/models/Repository";
import { FC } from "react";
import { BackButton } from "@/components/atoms/BackButton/BackButton";

interface Props {
  profile: IProfile;
  repositories: Repository[];
}

const Profile: FC<Props> = ({ profile, repositories }) => {
  return (
    <>
      <Head>
        <title>Github users</title>
        <meta name="description" content="Github users challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Github users">
        <BackButton />
      </Header>
      <UserProfile profile={profile} repositories={repositories} />
    </>
  );
};

export default Profile;

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
    const [profile, repositories] = await Promise.all([
      usersService.getByUsername(username),
      repositoriesService.listByUsername(username),
    ]);
    if (!profile || !repositories) {
      return jsonRedirect;
    }

    return { props: { profile, repositories } };
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response);
    }
    return jsonRedirect;
  }
};
