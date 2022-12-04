import React from "react";
import { CiCircleMore } from "react-icons/ci";

const IconComponent = () =>{
    return(
        <div style={container}>
            <div style={iconContainer}>
                <CiCircleMore size={34}/>
                <p>Downloads</p>
            </div> 
            <div style={iconContainer}>
                <CiCircleMore size={34}/>
                <p>Downloads</p>
            </div>                            
            <div style={iconContainer}>
                <CiCircleMore size={34}/>
                <p>Downloads</p>
            </div> 
            <div style={iconContainer}>
                <CiCircleMore size={34}/>
                <p>Downloads</p>
            </div> 
            <div style={iconContainer}>
                <CiCircleMore size={34}/>
                <p>Downloads</p>
            </div> 
            <div style={iconContainer}>
                <CiCircleMore size={34}/>
                <p>Downloads</p>
            </div> 
        </div>
    )
}

export default IconComponent

const container={
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:'20px',
}
const iconContainer={
    display:"flex",
    color: "black", 
    className: "global-class-name",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    marginRight:'20px'
}