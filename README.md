# portfolio

Source code for the portfolio site. GraphCMS, GitHub API v4, and Qiita Api v2 on Next.js.

[README 日本語版](/README_ja.md)

<div align="center">
  
![screenshot_portfolio](https://user-images.githubusercontent.com/60056078/166861224-26eec22c-de6c-4cb1-a1ad-4d8642f7e158.png)

</div>
  
<div align="center">
<img src="https://img.shields.io/github/languages/code-size/sakelog/portfolio" alt="code_size" >
<img src="https://img.shields.io/github/issues/sakelog/portfolio" alt="issue">
<img src="https://img.shields.io/github/license/sakelog/portfolio" alt="license">
</div>

<div align="center">
  
  [Feature](#feature)
  ・
  [Requirement](#requirement)
  ・
  [Usage](#usage)
  ・
  [Reference](#reference)
  ・
  [Author](#author)
  ・
  [License](#license)
  
</div>

## Feature

You can create your portfolio site with a GraphCMS endpoint, a GitHub personal access token, and a Qiita token.

## Requirement

-   Node.js v14.15.0
-   Yarn above v1.x.x

## Usage

You can clone this repository with follow command.

```shell
git clone ...
cd portfolio
yarn
```

### About debug

You can also debug with the following commands.

```shell
yarn dev
```

### If you make a production build

For production build, execute the following command.

```shell
yarn build
yarn start
```

### .env file

The following environment variables must be added to the .env file.

```sh
QIITA_ACCESS_TOKEN="your Qiita access token"
GITHUB_PERSONAL_ACCESS_TOKEN="your GitHub personal access token"
GRAPHCMS_API="your Graphcms API endpoint"
NEXT_PUBLIC_GTM_ID="your GTM ID"
NEXT_PUBLIC_FORMSPREE_ENDPOINT="your Formspree endpoint"
```

### GraphCMS Schema

With the following schema, you can create a similar portfolio site.

#### aboutMe

Simple profile items.

| field  | type             | unique | required | Title |
| :----- | :--------------- | :----: | :------: | :---: |
| title  | Single line text |        |          | ✅     |
| detail | Single line text |        |          |       |

#### badge

Register your badge of qualification.

| field  | type             | unique | required | Title |
| :----- | :--------------- | :----: | :------: | :---: |
| image  | Asset picker     |        | ✅        |       |
| title  | Single line text | ✅      | ✅        | ✅     |
| width  | Number           |        |          |       |
| height | Number           |        |          |       |

-   width : width of image
-   height : height of image

#### carreer

Register your work history.

| field    | type             | unique | required | Title |
| :------- | :--------------- | :----: | :------: | :---: |
| title    | Single line text |        | ✅        | ✅     |
| startYMD | Date             |        | ✅        |       |
| endYMD   | Date             |        |          |       |
| detail   | Markdown         |        |          |       |

-   endYMD : If it's ongoing, make it with a future date.

#### qualification

Register qualifications you have.

| field | type             | unique | required | Title |
| :---- | :--------------- | :----: | :------: | :---: |
| name  | Single line text | ✅      | ✅        | ✅     |
| YYMM  | Date             |        |          |       |
| Badge | Reference        |        |          |       |

- Badge : Link to badge schema.

#### skill

Register your skills.

| field | type             | unique | required | Title |
| :---- | :--------------- | :----: | :------: | :---: |
| name  | Single line text | ✅      | ✅        | ✅     |
| star  | Float            |        |          |       |

- star : Rate your skills on a 5-point scale. Set also "Limit input range" ... between 1-5.

#### skillList

Grouping skills.

| field    | type             | unique | required | Title |
| :------- | :--------------- | :----: | :------: | :---: |
| category | Single line text | ✅      | ✅        | ✅     |
| Skills   | Referense        |        |          |       |
| orderID  | Number           |        |          |       |

- Skills : Link to skill schema. Check also "Allow multiple Skills per SkillList".

## Reference

-   [Qiita API v2 ドキュメント - Qiita:Developer](https://qiita.com/api/v2/docs)
-   [GitHub の GraphQL API - GitHub Docs](https://docs.github.com/ja/graphql)
-   [Explorer - GitHub Docs](https://docs.github.com/ja/graphql/overview/explorer)
-   [Queries | GraphCMS](https://graphcms.com/docs/api-reference/content-api/queries)

## Author

-   sake
    -   [Twitter](https://twitter.com/sake_engineer)
    -   [GitHub](https://github.com/sakelog)
    -   [WebSite](https://sakeengineer.com/)

## License

This project is licensed under the MIT License.

See the [LICENSE](/LICENSE) file for details.
