// Product Service Routes
const productRoutes = (app) => {
  app.get('/products', (req, res) => {
    res.json({ message: 'List of products' });
  });

  // Add more routes as needed for the Product Service
};

module.exports = productRoutes;
