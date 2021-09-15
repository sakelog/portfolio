declare namespace Profile {
  
  declare namespace AboutMe  {
    declare type Item = {
      id: string;
      title: string;
      detail: string;
    }
    declare type Items = Item[];
  }
  declare namespace Career {
    declare type Item = {
      id: string;
      title: string;
      startYmd: string;
      endYmd: string | null;
      detail: string;
    }
    declare type Items = Item[];
  }

  declare namespace Skill {
    declare type Skill = {
      id: string;
      name: string;
      star: number;
    }
    declare type Collection = {
      id: string;
      category: string;
      skills: Skill[]
    }
    declare type Collections = Collection[]
  }
  declare namespace Qualification {
    declare type Badge = {
      id: string;
      title: string;
      height: number;
      width: number;
      image: {
        url: string;
      }
    } | null;
    declare type Item = {
      id: string;
      name: string;
      yymm: string | null;
      badge: Badge | null;
    }
    declare type Items = Qualification[];
  }
}