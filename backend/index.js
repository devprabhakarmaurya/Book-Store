import express, { request } from "express";
import { PORT, mongoDBURI } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack");
});
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

app.use('/books', bookRoutes);

mongoose
    .connect(mongoDBURI)
    .then(() => {
        console.log("App is connected to database succesfully");
    })
    .catch((error) => {
        console.log(error);
    });