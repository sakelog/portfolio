import type { NextPage, GetStaticProps } from 'next';

// lib
import { setSiteMap } from 'lib/setStitemap';
import {
  aboutMe,
  carreer,
  skill,
  qualification,
} from 'lib/graphCMS/getContent';
import github from 'lib/github/getContent';
import qiita from 'lib/qiita/getContent';

// components
import Layout from 'layout';
import MyHead from 'components/MyHead';
import Profile from 'components/Profile';
import Skill from 'components/Skill';
import Works from 'components/Works';
import ContactForm from 'components/ContactForm';

type PageProps = {
  profileItem: {
    aboutMeItems?: Profile.AboutMe.Items;
    carreerItems?: Profile.Carreer.Items;
    qualifications?: Profile.Qualification.Items;
  };
  skillLists?: Skill.Collections;
  worksItem: {
    githubRepos?: Works.GitHub.Repositories;
    qiitaArticles?: Works.Qiita.Article[];
  };
};

const TopPage: NextPage<PageProps> = (props) => {
  const { profileItem, skillLists, worksItem } = props;
  const { aboutMeItems, carreerItems, qualifications } =
    profileItem;
  const { githubRepos, qiitaArticles } = worksItem;
  return (
    <Layout>
      <MyHead />
      <Profile
        aboutMeItems={aboutMeItems}
        carreerItems={carreerItems}
        qualifications={qualifications}
      />
      <Skill skillLists={skillLists} />
      <Works
        githubRepos={githubRepos}
        qiitaArticles={qiitaArticles}
      />
      <ContactForm />
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

  const githubRepos = await github.repo.getRepositories();
  const qiitaArticles = await qiita.article.getArticles();

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  process.env.NODE_ENV === 'production' &&
    setSiteMap(new Date());

  return {
    props: {
      profileItem: {
        aboutMeItems,
        carreerItems,
        qualifications,
      },
      skillLists,
      worksItem: {
        githubRepos,
        qiitaArticles,
      },
    },
  };
};
