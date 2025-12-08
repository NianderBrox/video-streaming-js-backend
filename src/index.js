import dotenv from 'dotenv'
import connectDB from "./db/db.js";
import { app } from './app.js';

dotenv.config({ path : ".env"})

connectDB()
.then(()=>{
    //Application Listening
    const port = process.env.PORT || 8000
    app.listen(port, ()=>{
        console.log(`Server is running at port: ${port}`);
    })

    //Error Listen
    app.on("error",(error)=>{
        console.log("Error: ", error);
        throw error;
    })
})
.catch((err)=>{
    console.log("Mongo DB connection Failed !!! ", err);
})