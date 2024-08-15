// console.log("ok");

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userroute.js";
import companyRoute from "./routes/companyroute.js";
import jobRoute from "./routes/jobroute.js";
import applicationRoute from "./routes/applicationroute.js";


const app=express();

dotenv.config();

connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);


const PORT=process.env.PORT || 8000;

// console.log(process.env.MONGO_URL);

app.listen(PORT,()=>{
    console.log(`server running at PORT ${PORT}`);  
});