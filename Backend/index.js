import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import todoRoutes from "./routes/Todo.js";
import dotenv from "dotenv";

dotenv.config();
const app = express()
const port = 4000;

mongoose.connect(process.env.MONGO_URL, {
        });
        console.log("Connected to the database");


app.use(cors());
app.use(express.json());
app.use(todoRoutes);

app.get('/',(req ,res)=>{
    res.send("Hello World");
});

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})
