import React from "react";
import video from "../images/video.mp4";

const VideoComponent = () =>{
    return (
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", marginBottom:"100px"}}>
            <h1 style={{fontSize:"40px", fontWeight:100}}>Your business is safe in the could</h1>
            <p style={{fontSize:"20px"}}>Cisco protects the integrity of your existing ecosystem with a cloud-neutral approach</p>
            <video src={video} width="60%" height="50%" />
        </div>
    )
}

export default VideoComponent