import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import { setSiteMap } from '../lib/setStitemap';

import {
  aboutMe,
  carreer,
  skill,
  qualification,
  release,
} from '@lib/graphCMS/getContent';
import { repo } from '@lib/github/getContent';

import siteMeta from '@components/config';

import Layout from '@components/layout';
import AboutMeComponent from '@components/profile/_aboutme';
import CarrerComponent from '@components/profile/_career';
import SkillComponent from '@components/profile/_skill';
import QualificationComponent from '@components/profile/_qualification';
import ReleaseComponent from '@components/works/_release';
import GithubRepoComponent from '@components/works/_githubRepos';
import ContactForm from '@components/contactForm';

type PageProps = {
  profileItem: {
    aboutMeItems: Profile.AboutMe.Items;
    carreerItems: Profile.Career.Items;
    skillLists: Profile.Skill.Collections;
    qualifications: Profile.Qualification.Items;
  };
  worksItem: {
    githubRepos: Works.GitHub.Repositories;
    releases: Works.Release.Items;
  };
};

const TopPage: NextPage<PageProps> = (props) => {
  const { profileItem, worksItem } = props;
  return (
    <Layout>
      <Head>
        <title>{siteMeta.title}</title>
        <meta
          name="description"
          content={siteMeta.description}
        />
      </Head>
      <h2 className="u__header--mainTitle" id="profile">
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
      <ReleaseComponent releases={worksItem.releases} />
      <GithubRepoComponent
        githubRepos={worksItem.githubRepos}
      />
      <h2 className="u__header--mainTitle" id="contact">
        お問い合わせ
      </h2>
      <ContactForm />
    </Layout>
  );
};

export default TopPage;

export const getStaticProps: GetStaticProps<PageProps> =
  async () => {
    const aboutMeItems = await aboutMe.getAboutMeItems();
    const carreerItems = await carreer.getCarreers();
    const skillLists = await skill.getSkillLists();
    const qualifications =
      await qualification.getQualifications();

    const githubRepos = await repo.getRepositorys();
    const releases = await release.getReleases();

    const fetchDate = new Date();

    setSiteMap(fetchDate);

    return {
      props: {
        profileItem: {
          aboutMeItems,
          carreerItems,
          skillLists,
          qualifications,
        },
        worksItem: {
          githubRepos,
          releases,
        },
      },
    };
  };
