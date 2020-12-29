namespace profile {
  declare type md = {
    slug: string;
    data?: JSON;
    content? :string;
  }
  declare type json = {
    slug: string;
    content? :JSON;
  }

  namespace container {
    declare type props = {
      md: md;
      json: json;
    }
    declare type func = (props:props) => JSX.Element
  }

  namespace component {
    declare type props = {
      md?: md;
      json?: json;
    }
    declare type func = (props:props) => JSX.Element
  }

  declare interface qualification_jsonContent extends JSON {
    qualifications?: [
      {
        qualification: string;
      }
    ],
    badges?: [
      {
        src: string;
        alt: string;
        width: number;
        height: number;
      }
    ]
  }

  declare interface career_jsonContent extends JSON {
    career_list?: [
      {
        ymd: string;
        title: string;
        detail: string;
      }
    ]
  }
  declare interface skill_jsonContent extends JSON {
    skill_lists?: [
      {
        category: string;
        skills: [
          {
            skill: string;
            star: number;
          }
        ]
      }
    ]
  }
}