declare namespace Works {
  declare namespace Qiita {
    declare type Article = {
      title: string;
      id: string;
      updated_at: string;
      url: string;
      tags: { name: string; id: string }[];
    };
  }

  declare namespace GitHub {
    declare type Repository = {
      id: string;
      name: string;
      description: string;
      url: string;
      createdAt: string;
      updatedAt: string | null;
      languages: {
        edges: {
          node: {
            name: string;
            id: string;
            color: string;
          };
        }[];
      };
      latestRelease: {
        tagName: string;
        url: string;
      } | null;
    };
    declare type Repositories = {
      nodes: Repository[];
    };
    declare type User = {
      repositories: Repositories;
    };
  }
}
