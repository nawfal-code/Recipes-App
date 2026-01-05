import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/dbConfig.js";
import recipeRouter from "./routes/recipeRoutes.js";

dotenv.config();


const port=process.env.PORT || 3000;

const app=express();

app.use(express.json());

app.use("/api/recipes",recipeRouter);

connectDB();

app.get("/",(req,res)=>{
    res.status(200).send("WELCOME TO THE TASK HOME PAGE");
});

app.listen(port,()=>{
    console.log(`server starts at ${port}`)
});

