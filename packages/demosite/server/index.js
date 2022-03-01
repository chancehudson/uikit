require('babel-polyfill')
require('@babel/register')({
  presets: [
    ['@babel/env', { loose: true }],
  ],
  plugins: [
    ['css-modules-transform', {
      camelCase: true,
      extensions: ['.css'],
    }],
    'dynamic-import-node'
  ]
})
require('./server')
