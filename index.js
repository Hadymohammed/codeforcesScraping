
import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import CSSselect from "css-select";
import getHandles from "./services/getHandles.js";
const app=express();
app.listen(8081,()=>{console.log("App is listening")});
let handles=[];
const contests=[{
    id:381706,
    problems:[50,20,30,40,50,30,50,60,70,20,20,30,45,70],
    pages:1,
}]


const router=express.Router();
router.get('/setHandles', async (req,res)=>{
  handles=await getHandles();
  res.send('<h1>Handles have been setted<\h1>');
})
router.get('/handles',(req,res)=>{
    res.send(handles);
})
app.use(router);