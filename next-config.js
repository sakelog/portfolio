module.exports = {
  async rewrites() {
    return [
      {
        source: 'tools/:slug/src/pages',
        destination: 'tools/:slug',
      },
    ];
  },
};
