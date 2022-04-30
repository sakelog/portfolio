declare namespace Skill {
  declare type Skill = {
    id: string;
    name: string;
    star: number;
  };
  declare type Collection = {
    id: string;
    category: string;
    skills: Skill[];
  };
  declare type Collections = Collection[];
}
