import React ,{useEffect,useState}from "react";
 
import { Item } from "./item";
import { AddPreference } from "./AddPrefernceBox";

export const List=()=>{
//


   

    const [data, getData] = useState([]);
    const [ok, setOk] = useState(0);

    const API = 'https://tijaniabdultherapyapp.azurewebsites.net/api/PreferenceListTrigger';
 
const fetchPost = () => {
  fetch(API)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      getData(res);
    })
}

 




/////////////
 
const[text,setText]=useState();

const AddPost = () => {
  
    fetch(`https://tijaniabdultherapyapp.azurewebsites.net/api/addtodb?preferrence=${text}`).then(()=>setOk(prevState => prevState + 1)).then(()=>console.log(ok))
 
  }

const PreferrrenceOnChangeHandler=(e)=>{
    setText(e.target.value);
    console.log(text);
    }

    const PreferrenceOnClickHandler=()=>{
        AddPost();
        console.log("working")
       // setText('');
        }



        useEffect(
            ()=>{
                fetchPost(); 
            }
            ,[ok]
            );

//////////////
if(data==null) return (<></>);
else
    return(
        <>
<h1>I need someone experienced in</h1>
    {data.map((d)=>(
        <Item key={d.userid} requirement={d.detail}/>
    ))}

    <AddPreference  onchange={PreferrrenceOnChangeHandler} onclick={PreferrenceOnClickHandler}/>

        </>
    );
}