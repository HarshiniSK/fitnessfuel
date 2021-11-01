const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/app/home",
    createProxyMiddleware({
      target: "https://dev-api.fitnessfuel360.com/app/home",
      changeOrigin: true,
      
    })
  );
};
