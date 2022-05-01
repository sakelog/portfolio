declare namespace Profile {
  declare namespace AboutMe {
    declare type Item = {
      id: string;
      title: string;
      detail: string;
    };
    declare type Items = Item[];
  }
  declare namespace Carreer {
    declare type Item = {
      id: string;
      title: string;
      startYmd: string;
      endYmd: string | null;
      detail: string | null;
    };
    declare type Items = Item[];
  }

  declare namespace Qualification {
    declare type Badge = {
      id: string;
      title: string;
      height: number;
      width: number;
      image: {
        url: string;
      };
    } | null;
    declare type Item = {
      id: string;
      name: string;
      yymm: string | null;
      badge: Badge | null;
    };
    declare type Items = Qualification[];
  }
}
