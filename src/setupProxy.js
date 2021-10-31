const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: "https://dev-api.fitnessfuel360.com/app/home",
      changeOrigin: true
    })
  );
};