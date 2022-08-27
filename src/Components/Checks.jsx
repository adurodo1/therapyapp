import React from "react";

export const Checks=(props)=>{

    return(
        <>
            <input type="checkbox" name="UserPrefernce" value={props.UserPrefernce}/>{props.UserPrefernce}<br/>
        </>
    );

}