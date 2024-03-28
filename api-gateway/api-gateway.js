const express = require('express');
const httpProxy = require('http-proxy');
const gatewayConfig = require('./config/gateway-config');
const gatewayRoutes = require('./routes/gateway-routes');

const app = express();
const proxy = httpProxy.createProxyServer();

// Apply routes
gatewayRoutes(app, proxy);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
