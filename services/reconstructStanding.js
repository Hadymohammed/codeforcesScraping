import cheerio from "cheerio";

const reformStanding=(standing)=>{
    //*don't get virtuals or upsolving 
    let i=0
    let standingInrows=[];
    for(let row of standing){
        if(++i==1)continue;
        let $=cheerio.load(row);
        try{
        let handle=$(row).find('a[class^="rated-user"]')[0].children[0].data;
        let problems=$(row).find('span[class!="cell-time"]');
        let problemsStatus=[];
        for(let problem of problems){
            if(problem.attribs['class'] =='cell-accepted')problemsStatus.push(1);
            else problemsStatus.push(0);
        }
        standingInrows.push({
            handle:handle,
            problems:problemsStatus
        })
        }catch(err){
            continue;
        }
    }
    return standingInrows;
}
export default reformStanding;