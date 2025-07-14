// src/plugins/globalConfig.js
export default {
  install(app) {
    app.config.globalProperties.$base = import.meta.env.BASE_URL;
  }
};