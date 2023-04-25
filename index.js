
import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import CSSselect from "css-select";
import getHandles from "./services/getHandles.js";
import loadStanding from "./services/loadStanding.js";
import reformStanding from "./services/reconstructStanding.js";
const app=express();
app.listen(8081,()=>{console.log("App is listening")});
let handles=[];
const contests=[{
    id:438351,
    problems:[50,20,30,40,50,30,50,60,70,20,20,30,45,70],
    pages:1,//!need to be auto calculated
    standing:[]
}]
let standing=[];

const router=express.Router();

router.get('/standing',async (req,res)=>{
    for(let contest of contests){
        for(let i=1;i<=contest.pages;i++)
             contest.standing.push(await loadStanding(contest.id,i));
    }
    res.send(contests);
})

router.get('/setHandles', async (req,res)=>{
  handles=await getHandles();
  res.send('<h1>Handles have been setted<\h1>');
})
router.get('/handles',(req,res)=>{
    res.send(handles);
})
app.use(router);
