import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

// lib
import { setSiteMap } from 'lib/setStitemap';
import {
  aboutMe,
  carreer,
  skill,
  qualification,
} from 'lib/graphCMS/getContent';
import { repo } from 'lib/github/getContent';

// components
import siteMeta from 'components/config';

import Layout from 'layout';
import Profile from 'components/Profile';
import Skill from 'components/Skill';
import Works from 'components/Works';
// import AboutMeComponent from 'components/profile/_aboutme';
// import CarrerComponent from 'components/profile/_carreer';
// import SkillComponent from 'components/profile/_skill';
// import QualificationComponent from 'components/profile/_qualification';
// import GithubRepoComponent from 'components/works/_githubRepos';
// import ContactForm from 'components/contactForm';

type PageProps = {
  profileItem: {
    aboutMeItems: Profile.AboutMe.Items;
    carreerItems: Profile.Carreer.Items;
    qualifications: Profile.Qualification.Items;
  };
  skillItem: {
    skillLists: Skill.Collections;
  };
  worksItem: {
    githubRepos: Works.GitHub.Repositories;
  };
};

const MyHead = () => (
  <Head>
    <title>{siteMeta.title}</title>
    <meta
      name="description"
      content={siteMeta.description}
    />
    <meta property="og:title" content={siteMeta.title} />
    <meta
      property="og:description"
      content={siteMeta.description}
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content={`${siteMeta.url}/img/ogimage.png`}
    />
    <meta
      name="twitter:card"
      content="summary_large_image"
    />
    <meta
      name="twitter:description"
      content={siteMeta.description}
    />
    <meta name="theme-color" content="#3675a9" />
    <meta
      name="msapplication-square70x70logo"
      content="/img/icon/site-tile-70x70.png"
    />
    <meta
      name="msapplication-square150x150logo"
      content="/img/icon/site-tile-150x150.png"
    />
    <meta
      name="msapplication-wide310x150logo"
      content="/img/icon/site-tile-310x150.png"
    />
    <meta
      name="msapplication-square310x310logo"
      content="/site-tile-310x310.png"
    />
    <meta
      name="msapplication-TileColor"
      content="#0078d7"
    />
    <link
      rel="shortcut icon"
      type="image/vnd.microsoft.icon"
      href="/favicon.ico"
    />
    <link
      rel="icon"
      type="image/vnd.microsoft.icon"
      href="/favicon.ico"
    />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/img/icon/apple-touch-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/img/icon/apple-touch-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/img/icon/apple-touch-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="/img/icon/apple-touch-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/img/icon/apple-touch-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/img/icon/apple-touch-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/img/icon/apple-touch-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/img/icon/apple-touch-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/img/icon/apple-touch-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="36x36"
      href="/img/icon/android-chrome-36x36.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="48x48"
      href="/img/icon/android-chrome-48x48.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="72x72"
      href="/img/icon/android-chrome-72x72.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/img/icon/android-chrome-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="128x128"
      href="/img/icon/android-chrome-128x128.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="144x144"
      href="/img/icon/android-chrome-144x144.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="152x152"
      href="/img/icon/android-chrome-152x152.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/img/icon/android-chrome-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="256x256"
      href="/img/icon/android-chrome-256x256.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="384x384"
      href="/img/icon/android-chrome-384x384.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/img/icon/android-chrome-512x512.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="36x36"
      href="/img/icon/icon-36x36.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="48x48"
      href="/img/icon/icon-48x48.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="72x72"
      href="/img/icon/icon-72x72.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/img/icon/icon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="128x128"
      href="/img/icon/icon-128x128.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="144x144"
      href="/img/icon/icon-144x144.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="152x152"
      href="/img/icon/icon-152x152.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="160x160"
      href="/img/icon/icon-160x160.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/img/icon/icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="196x196"
      href="/img/icon/icon-196x196.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="256x256"
      href="/img/icon/icon-256x256.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="384x384"
      href="/img/icon/icon-384x384.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="512x512"
      href="/img/icon/icon-512x512.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/img/icon/icon-16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="24x24"
      href="/img/icon/icon-24x24.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/img/icon/icon-32x32.png"
    />
    <link rel="manifest" href="/manifest.json" />
  </Head>
);

const TopPage: NextPage<PageProps> = ({
  profileItem,
  skillItem,
  worksItem,
}: PageProps) => {
  const { aboutMeItems, carreerItems, qualifications } =
    profileItem;
  const { skillLists } = skillItem;
  const { githubRepos } = worksItem;
  return (
    <Layout>
      <MyHead />
      <Profile
        aboutMeItems={aboutMeItems}
        carreerItems={carreerItems}
        qualifications={qualifications}
      />
      <Skill skillLists={skillLists} />
      <Works githubRepos={githubRepos} />
      {/* <h2 className="u__header--mainTitle" id="profile">
        自己紹介
      </h2>
      <AboutMeComponent
        aboutMeItems={profileItem.aboutMeItems}
      />
      <CarrerComponent
        carreerItems={profileItem.carreerItems}
      />
      <SkillComponent skillLists={profileItem.skillLists} />
      <QualificationComponent
        qualifications={profileItem.qualifications}
      />
      <h2 className="u__header--mainTitle" id="works">
        作成したもの
      </h2>
      <GithubRepoComponent
        githubRepos={worksItem.githubRepos}
      />
      <h2 className="u__header--mainTitle" id="contact">
        お問い合わせ
      </h2>
      <ContactForm /> */}
    </Layout>
  );
};

export default TopPage;

export const getStaticProps: GetStaticProps<
  PageProps
> = async () => {
  const aboutMeItems = await aboutMe.getAboutMeItems();
  const carreerItems = await carreer.getCarreers();
  const skillLists = await skill.getSkillLists();
  const qualifications =
    await qualification.getQualifications();

  const githubRepos = await repo.getRepositories();

  const fetchDate = new Date();

  setSiteMap(fetchDate);

  return {
    props: {
      profileItem: {
        aboutMeItems,
        carreerItems,
        qualifications,
      },
      skillItem: {
        skillLists,
      },
      worksItem: {
        githubRepos,
      },
    },
  };
};
