import React from "react";
import { CiPaperplane } from "react-icons/ci";

const FooterComponent = () =>{
    return(
        <div style={{paddingLeft:'80px', paddingRight:'80px', marginBottom:"80px"}}>
            <div style={container}>
                <h1>Latest news and events</h1>
                <div style={link}>
                    <p style={{marginRight:'10px',color:"blue", fontWeight:'bold', fontSize:'18px'}}>More news</p>
                    <CiPaperplane size={24} color="blue" style={{marginRight:"20px"}}/>
                    <p style={{marginRight:'10px',color:"blue", fontWeight:'bold', fontSize:'18px'}}>More events</p>
                    <CiPaperplane size={24} color="blue"/>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <div style={contentContainer}>
                    <h1 style={header}>news</h1>
                    <p style={headerContent}>Microsoft Teams is coming to cisco meeting room devices</p>
                    <p style={paraContent}>Cisco and Microsoft will soon offer the ability to
                        run Microsoft Teams natively on Cisco Room and Desk devices
                        Certified for Microsoft Teams
                    </p>
                    <div style={link}>
                        <p style={{marginRight:'10px', color:"blue", fontWeight:'bold', fontSize:'18px'}}>Explore Umbrella</p>
                        <CiPaperplane size={24} color="blue"/>
                    </div>
                </div>
                <div style={contentContainer}>
                    <h1 style={header}>news</h1>
                    <p style={headerContent}>Microsoft Teams is coming to cisco meeting room devices</p>
                    <p style={paraContent}>Cisco and Microsoft will soon offer the ability to
                        run Microsoft Teams natively on Cisco Room and Desk devices
                        Certified for Microsoft Teams
                    </p>
                    <div style={link}>
                        <p style={{marginRight:'10px', color:"blue", fontWeight:'bold', fontSize:'18px'}}>Explore Umbrella</p>
                        <CiPaperplane size={24} color="blue"/>
                    </div>
                </div>
                <div style={contentContainer}>
                    <h1 style={header}>news</h1>
                    <p style={headerContent}>Microsoft Teams is coming to cisco meeting room devices</p>
                    <p style={paraContent}>Cisco and Microsoft will soon offer the ability to
                        run Microsoft Teams natively on Cisco Room and Desk devices
                        Certified for Microsoft Teams
                    </p>
                    <div style={link}>
                        <p style={{marginRight:'10px', color:"blue", fontWeight:'bold', fontSize:'18px'}}>Explore Umbrella</p>
                        <CiPaperplane size={24} color="blue"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FooterComponent

const link={
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyItems:'center',

}

const container={
        display : "flex",
        justifyContent: "space-between",
        width:'70vw',
        // boxShadow: "1px 3px 10px #9E9E9E",
        //padding:'20px'
}

const contentContainer={
    display:"flex",
    flexDirection:"column",
    width:'30%'
}

const header={
    fontSize:"25px"
}

const headerContent={
    fontSize:"22px",
    fontWeight:500
}

const paraContent={
    fontSize:"18px",
}