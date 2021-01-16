const CracoLessPlugin = require('craco-less');


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1890ff',
              '@warning-color': '#3f6600',
              '@disabled-color': '#3f6600',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};