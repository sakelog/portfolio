declare namespace Works {
  declare namespace GitHub {
    declare type Repository = {
      id: string;
      name: string;
      description: string;
      url: string;
      createdAt: string;
      updatedAt: string | null;
      primaryLanguage: {
        name: string;
        color: string;
      };
    };
    declare type Repositories = {
      nodes: Repository[];
    };
    declare type User = {
      repositories: Repositories;
    };
  }
}
