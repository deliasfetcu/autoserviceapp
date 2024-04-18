const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoutes');
const carRoutes = require('./routes/carRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const serviceHistoryRoutes = require('./routes/serviceHistoryRoutes');
const bodyParser = require('body-parser');  


const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/auto_service_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove useCreateIndex option
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Routes
app.use('/api', clientRoutes);
app.use('/api', carRoutes);
app.use('/api', appointmentRoutes);
app.use('/api', serviceHistoryRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
