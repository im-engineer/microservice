// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3001;

// app.get('/users', (req, res) => {
//   res.json({ message: 'List of users' });
// });

// app.listen(PORT, () => {
//   console.log(`User service running on port ${PORT}`);
// });

const express = require('express');
const userRoutes = require('./routes/user-routes');

const app = express();

// Apply routes
userRoutes(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
