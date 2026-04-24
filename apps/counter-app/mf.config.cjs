module.exports = {
  name: 'counter',
  manifest: true,
  exposes: {
    './Counter': './src/Counter.tsx',
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      eager: true,
    },
    'react-refresh': {
      singleton: true,
      eager: true,
    }
  },
};