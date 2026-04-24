module.exports = {
  name: 'host',
  manifest: true,
  exposes: {},
  shared: {
    react: {
      singleton: true,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      eager: true,
    },
    'react-refresh/runtime': {
      singleton: true,
      eager: true,
    },
  },
};