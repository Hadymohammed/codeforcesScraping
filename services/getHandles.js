import axios from "axios";

const apiKey='AIzaSyCVuRkg67PKH8_6TBtPWUOjHaDYftRuFXY';
const sheetId='1-x_csulzSnH3oegKh8WnEdtpsPbHkkVXJ8uuDL1to3Q';
const range='E2:E58';
    
const getHandles=async()=>{
    let handles=[];
    try{
        const {data}=await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`)
        for(let x of data.values)
                handles.push(x[0]);
        return handles; 
    }catch(err){
        console.log(err);
    }
    return handles;
}
export default getHandles; 