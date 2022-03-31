const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  images: {
    domains: ['media.graphassets.com'],
  },
  swcMinify: true,
});
