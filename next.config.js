const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  images: {
    domains: ['media.graphcms.com'],
  },
  swcMinify: true,
});
