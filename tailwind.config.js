const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        transitionProperty: {
          'height': 'height'
        },
        colors: {
          primary: {
            black: '#141414',
            sable: '#181818',
            ebony: '#232323',
            silver: '#8c8c8c',
          }
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
