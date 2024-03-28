const express = require('express');
const productRoutes = require('./routes/product-routes');

const app = express();

// Apply routes
productRoutes(app);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
