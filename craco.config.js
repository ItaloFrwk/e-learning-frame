// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#007071',
              '@text-color-secondary': '#005691',
              '@breadcrumb-link-color-hover': '#005691',
              '@btn-default-color': '#FFFFFF',
              '@modal-close-color': '#213F66',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
