import React from "react";

export const AddPreference=(props)=>{
    //const[text,setText]=useState();

    // const API = `https://tijaniabdultherapyapp.azurewebsites.net/api/addtodb?preferrence=${text}`;
 
    // const AddPost = () => {
    //   fetch(API)
   
    // }
    // const OnChangeHandler=(e)=>{
    // setText(e.target.value);
    // console.log(text);
    // }

    // const OnClickHandler=()=>{
    //     AddPost();
    //    // setText('');
    //     }

    return(
        <>

        <input type={'text'} onChange={props.onchange}/>
        <button onClick={props.onclick}>
            Add Preference
        </button>
         </>
    );

}