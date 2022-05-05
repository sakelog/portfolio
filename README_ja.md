# portfolio

ポートフォリオサイトのソースコードです。GraphCMS、 GitHub API v4、 Qiita Api v2をNext.js上で動かしています。

[README in English](/README.md)

<div align="center">

</div>
  
<div align="center">
<img src="https://img.shields.io/github/languages/code-size/sakelog/portfolio" alt="code_size" >
<img src="https://img.shields.io/github/issues/sakelog/portfolio" alt="issue">
<img src="https://img.shields.io/github/license/sakelog/portfolio" alt="license">
</div>

<div align="center">
  
  [特徴](#特徴)
  ・
  [必要なもの](#必要なもの)
  ・
  [利用方法](#利用方法)
  ・
  [参考サイト](#参考サイト)
  ・
  [作成者](#作成者)
  ・
  [License](#license)
  
</div>

## 特徴

GraphCMSのエンドポイント、GitHubのpersonal access tokenと、Qiitaのtokenがあればポートフォリオサイトを作成することができます。

## 必要なもの

-   Node.js v14.15.0
-   Yarn above v1.x.x

## 利用方法

下記手順でリポジトリのクローンが可能です。

```shell
git clone ...
cd portfolio
yarn
```

### デバッグについて

下記コマンドを実行するとデバッグを行うことができます。

```shell
yarn dev
```

### production build を作成したいとき

roduction build をするには、下記コマンドを実行してください。

```shell
yarn build
yarn start
```

### .envファイル

下記の環境変数を.envファイルに追加してください。

```sh
QIITA_ACCESS_TOKEN="your Qiita access token"
GITHUB_PERSONAL_ACCESS_TOKEN="your GitHub personal access token"
GRAPHCMS_API="your Graphcms API endpoint"
NEXT_PUBLIC_GTM_ID="your GTM ID"
NEXT_PUBLIC_FORMSPREE_ENDPOINT="your Formspree endpoint"
```

### GraphCMSのスキーマ

下記のスキーマがあれば、同じようなポートフォリオサイトが作成可能です。

#### aboutMe

単純なプロフィール項目

| field  | type             | unique | required | Title |
| :----- | :--------------- | :----- | :------- | :---- |
| title  | Single line text |        |          | ✅     |
| detail | Single line text |        |          |       |

#### badge

資格のバッジを登録

| field  | type             | unique | required | Title |
| :----- | :--------------- | :----- | :------- | :---- |
| image  | Asset picker     |        | ✅        |       |
| title  | Single line text | ✅      | ✅        | ✅     |
| width  | Number           |        |          |       |
| height | Number           |        |          |       |

-   width : imageのwidth
-   height : imageのheight

#### carreer

経歴を登録

| field    | type             | unique | required | Title |
| :------- | :--------------- | :----- | :------- | :---- |
| title    | Single line text |        | ✅        | ✅     |
| startYMD | Date             |        | ✅        |       |
| endYMD   | Date             |        |          |       |
| detail   | Markdown         |        |          |       |

-   endYMD : 継続中の場合は未来日付を設定。

#### qualification

取得した資格を登録

| field | type             | unique | required | Title |
| :---- | :--------------- | :----- | :------- | :---- |
| name  | Single line text | ✅      | ✅        | ✅     |
| YYMM  | Date             |        |          |       |
| Badge | Reference        |        |          |       |

- Badge : badgeスキーマと紐づけ。

#### skill

スキルを登録

| field | type             | unique | required | Title |
| :---- | :--------------- | :----- | :------- | :---- |
| name  | Single line text | ✅      | ✅        | ✅     |
| star  | Float            |        |          |       |

- star : スキルを5段階で評価。 "Limit input range" ... between 1-5で設定してください。

#### skillList

スキルをグループ分けする

| field    | type             | unique | required | Title |
| :------- | :--------------- | :----- | :------- | :---- |
| category | Single line text | ✅      | ✅        | ✅     |
| Skills   | Referense        |        |          |       |
| orderID  | Number           |        |          |       |

- Skills : skillスキーマと紐づけ。 "Allow multiple Skills per SkillList"にもチェックを入れてください。

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

このプロジェクトは、MIT ライセンスのもとで実施されます。

詳細は [LICENSE](/LICENSE) ファイルを参照。
