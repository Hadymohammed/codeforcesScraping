
const Express=require("express");
const axios=require("axios");
const cheerio=require("cheerio");

const app=Express();
app.listen(8080,()=>{console.log("App is listening")});

const handles=['Abdelhady__'];//,'Zeyad_Abdelnaby'];
const data=[];
app.use(Express.json);
for (const handle of handles) {
    axios(`https://codeforces.com/profile/${handle}`)
        .then(response =>{
            const html=response.data;
            const $=cheerio.load(html);
            const total=$('._UserActivityFrame_counterValue')[0].children[0].data;
            const maxInRow=$('._UserActivityFrame_counterValue')[3].children[0].data;
            let cnt=0;
            const from='07/03/2022',to='08/07/2022';
            const days=$('rect[class=day]')._root[0].children;
            console.log(days);
            /*for (const day of days) {
                if(day[0].children[0].att)
            }*/
           
            
            data.push({
                name:handle,
                totalSolved:total,
                maxInRow:maxInRow
            })
        })
        .catch(err=>{console.log(err)});
}
const router=Express.Router();

router.get('/data',(req,res)=>{
    for (const user of data) {
        console.log(user);
    }
})
app.use(router);