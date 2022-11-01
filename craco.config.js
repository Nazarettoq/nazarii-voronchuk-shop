const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@img': path.resolve(__dirname, 'src/img/'),
      '@styles': path.resolve(__dirname, 'src/scss/'),
      '@apollo-folder': path.resolve(__dirname, 'src/apollo/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
    },
  },
}
