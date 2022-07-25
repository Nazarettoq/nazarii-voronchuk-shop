const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@img': path.resolve(__dirname, 'src/img/'),
      '@styles': path.resolve(__dirname, 'src/scss/'),
    },
  },
}
