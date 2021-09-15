import { GraphQLClient } from 'graphql-request';

export const GraphCMSClient = new GraphQLClient(
  process.env.GRAPHCMS_API ? process.env.GRAPHCMS_API : ''
);
