declare namespace Works {
  declare namespace Release {
    declare type Item = {
      id: string;
      title: string;
      url: string;
      screenshot: {
        url: string;
      } | null;
      description: string;
    }
    declare type Items = Item[];
  }

  declare namespace GitHub {
    declare type Repository = {
      id: string;
      name: string;
      description: string;
      url: string;
      createdAt: string;
      updatedAt: string | null;
      primaryLanguage : {
        name: string;
        color: string;
      }
    }
    declare type Repositories = {
      nodes : Repository[]
    }
    declare type User = {
      repositories: Repositories
    }
  }
}