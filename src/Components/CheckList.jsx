import React ,{useState,useEffect} from "react";
import { Checks } from "./Checks";
 

export const CheckList=()=>{
//


   

const [data, getData] = useState([]);

const API = 'https://tijaniabdultherapyapp.azurewebsites.net/api/PreferenceListTrigger';

const fetchPost = () => {
fetch(API)
.then((res) => res.json())
.then((res) => {
  console.log(res);
  getData(res);
})
}


useEffect(
()=>{
fetchPost(); 
}
,[]
);
if(data==null) return (<></>);
else
return(
    <>

{data.map((d)=>(
    <Checks key={d.userid} UserPrefernce={d.detail}/>
))}

    </>
);
}