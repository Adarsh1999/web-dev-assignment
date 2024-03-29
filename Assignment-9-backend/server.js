import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import apiRoutes from './api/app.js';
import cors from 'cors';

const app = express();

// enable CORS
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// mount the API routes at the /api path
app.use('/api', apiRoutes);

// Connect to MongoDB
mongoose.connect("mongodb+srv://agm11id:pass%40word@cluster0.z1pxy0g.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,

  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to database!");
}).catch((err) => { console.log(err) });

try {
    // Start server
    app.listen(3001, () => console.log('Server started'));
} catch (err) {
    // Handle errors
    console.log(err);
    res.status(500).send({ message: 'Internal server error' });
}
