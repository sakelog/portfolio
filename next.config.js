const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  images: {
    loader: 'custom',
    domains: ['media.graphassets.com'],
  },
  swcMinify: true,
});
