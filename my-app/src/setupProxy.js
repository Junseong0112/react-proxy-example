const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
    })
  );

  app.use(
    "/api2",
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL2,
      changeOrigin: true,
    })
  );
};