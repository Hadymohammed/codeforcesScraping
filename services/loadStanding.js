import axios from "axios";
import cheerio  from "cheerio";
import reformStanding from "./reconstructStanding.js";

const loadStanding=async(contestId,page=1)=>{
    let standing={};
    try{
        const {data}= await axios.get(`https://codeforces.com/group/QI9pPpkbDH/contest/${contestId}/standings/page/${page}`);
        const html=data;
        const $=cheerio.load(html);
        standing=$('table > tbody > tr');
        return reformStanding(standing);
    }catch(err){
        console.log(err);
    }
    return standing;
}
export default loadStanding;