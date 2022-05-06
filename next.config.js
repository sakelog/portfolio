/**
 * @type { import('next').NextConfig}
 */

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  images: {
    loader: 'custom',
  },
  swcMinify: true,
});
