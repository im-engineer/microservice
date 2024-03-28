// User Service Routes
const userRoutes = (app) => {
  app.get('/users', (req, res) => {
    res.json({ message: 'List of users' });
  });

  // Add more routes as needed for the User Service
};

module.exports = userRoutes;
