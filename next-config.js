import { join } from 'path';
const withOffline = require('next-offline');

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
};

module.exports = withOffline(nextConfig);
