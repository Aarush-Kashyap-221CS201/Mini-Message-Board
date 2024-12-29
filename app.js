require("dotenv").config();

const express=require('express');
const app=express();

app.use(express.urlencoded({ extended: true }));

const path = require('path');
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const indexRouter=require('./routes/indexRouter');
app.use("/",indexRouter);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server started! Address: localhost:${PORT}`);
})