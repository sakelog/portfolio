import { GraphQLClient } from 'graphql-request';

export const graphCMSClient = new GraphQLClient(
  process.env.GRAPHCMS_API ? process.env.GRAPHCMS_API : ''
);

export default graphCMSClient;
