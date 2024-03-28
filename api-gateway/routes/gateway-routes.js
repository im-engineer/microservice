// API Gateway Routes
const gatewayRoutes = (app, proxy) => {
  const { userServiceURL, productServiceURL } = require('../config/gateway-config');

  app.get('/users', (req, res) => {
    proxy.web(req, res, { target: userServiceURL });
  });

  app.get('/products', (req, res) => {
    proxy.web(req, res, { target: productServiceURL });
  });
};

module.exports = gatewayRoutes;
