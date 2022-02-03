const basePath = process.env.NODE_ENV === 'production' ? '/' : '';

module.exports = {
  basePath: `${basePath}`,
  assetPrefix: `${basePath}/`
};