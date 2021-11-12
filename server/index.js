import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://pixelshot:pixelshot123@cluster0.wvnww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false); // This makes sure we don't get any warnings in the console 15:25
