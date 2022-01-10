const basePath = process.env.NODE_ENV === 'production' ? '/joureka-web' : '';

module.exports = {
  basePath: `${basePath}`,
  assetPrefix: `${basePath}/`
};