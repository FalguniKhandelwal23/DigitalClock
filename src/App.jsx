import React, { useState } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
const App=()=>{
    let time=new Date().toLocaleTimeString();
    const[ctime,setCtime]=useState(time);

    const UpdateTime=()=>{
     time=new Date().toLocaleTimeString();  
     setCtime(time); 
    }
    setInterval(UpdateTime,1000);
    return(
        <>
        <h1 className="div"><AccessTimeFilledIcon/>{ctime}</h1>
        </>
    )

}
export default App;

