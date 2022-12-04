import React from "react";
import img1 from '../images/img1.webp'
import { CiPaperplane } from "react-icons/ci";

const CardComponent =()=>{
    return(
        <div style={container}>
            <div style={cardContainer}>
                <img src={img1} style={{height:'250px', width:'100%'}} alt="img1"/>
                <div style={contentContainer}>
                    <h1 style={header}>
                        Deploy Cisco Umbrella to prevent threats
                    </h1>
                    <p style={para}>
                        Improve visibility, detect compromises, protect
                        users, and stop threats before they impact business
                    </p>
                    <div style={link}>
                        <p style={{marginRight:'10px', color:"blue", fontWeight:'bold', fontSize:'18px'}}>Explore Umbrella</p>
                        <CiPaperplane size={24} color="blue"/>
                    </div>
                </div>
            </div>
            <div style={cardContainer}>
                <img src={img1} style={{height:'250px', width:'100%'}} alt="img1"/>
                <div style={contentContainer}>
                    <h1 style={header}>
                        Deploy Cisco Umbrella to prevent threats
                    </h1>
                    <p style={para}>
                        Improve visibility, detect compromises, protect
                        users, and stop threats before they impact business
                    </p>
                    <div style={link}>
                        <p style={{marginRight:'10px', color:"blue", fontWeight:'bold', fontSize:'18px'}}>Explore Umbrella</p>
                        <CiPaperplane size={24} color="blue"/>
                    </div>
                </div>
            </div>
            <div style={cardContainer}>
                <img src={img1} style={{height:'250px', width:'100%'}} alt="img1"/>
                <div style={contentContainer}>
                    <h1 style={header}>
                        Deploy Cisco Umbrella to prevent threats
                    </h1>
                    <p style={para}>
                        Improve visibility, detect compromises, protect
                        users, and stop threats before they impact business
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

export default CardComponent

const container={
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    margin:'20px',
    paddingLeft:'50px',
    paddingRight:'50px',
    marginTop:'80px'
}

const cardContainer={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyItems:'center',
    boxShadow: "2px 3px 10px #9E9E9E",
    width:'400px'

}

const contentContainer={
    marginLeft:'20px',
    marginRight:'20px',
    marginBottom:'20px'
}

const header={
    fontFamily:'Roboto',
    fontWeight:100,
    fontSize:24
}
const para={
    fontFamily:'Roboto',
    fontSize:18,
    fontWeight:100
}

const link={
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyItems:'center',

}