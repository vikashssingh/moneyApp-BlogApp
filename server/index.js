import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import blogRoutes from './routes/blogs.js';
import reviewRoutes from './routes/reviews.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/blogs", blogRoutes);   
app.use("/reviews", reviewRoutes);   

const CONNECTION_URL = "mongodb+srv://Vikash:djpzAnvG!*rz_4W@cluster0.9oy783x.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3333;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)))
    .catch((error) => console.log(error));
 
