import React from "react";
import img1 from '../images/img1.webp'
import { CiPaperplane } from "react-icons/ci";

const Card2Component =()=>{
    return(
        <div style={container}>
            <div style={contentContainer}>
                <img src={img1} alt="img1" style={{marginLeft:'40px',width:'900px', height:'350px'}}/>
                <div>
                    <h1 style={header}>
                        Deploy Cisco Umbrella to prevent threats
                    </h1>
                    <p style={para}>
                        Improve visibility, detect compromises, protect
                        users, and stop threats before they impact business
                    </p>
                    <button style={button}>Explore Zero Trust</button>
                </div>
            </div>~
            <div style={contentContainer}>
                <div>
                    <h1 style={header1}>
                        Deploy Cisco Umbrella to prevent threats
                    </h1>
                    <p style={para1}>
                        Improve visibility, detect compromises, protect
                        users, and stop threats before they impact business
                    </p>
                    <button style={button1}>Explore Zero Trust</button>
                </div>
                <img src={img1} alt="img1" style={{width:'900px', height:'350px'}}/>
            </div>
            <div style={contentContainer}>
                <img src={img1} alt="img1" style={{width:'900px', height:'350px', marginLeft:'30px'}}/>
                <div>
                    <h1 style={header}>
                        Deploy Cisco Umbrella to prevent threats
                    </h1>
                    <p style={para}>
                        Improve visibility, detect compromises, protect
                        users, and stop threats before they impact business
                    </p>
                    <button style={button}>Explore Zero Trust</button>
                </div>
            </div>
            
        </div>
    )
}

export default Card2Component

const container={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    margin:'20px',
    paddingLeft:'50px',
    paddingRight:'50px',
    marginTop:'200px'
}

const cardContainer={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyItems:'center',
    boxShadow: "2px 3px 10px #9E9E9E",
    width:'400px',
    marginBottom:'100px'

}

const contentContainer={
    marginLeft:'20px',
    marginRight:'20px',
    marginBottom:'20px',
    display:'flex',
    flexDirection:'row',
    marginBottom:'100px'
}

const header={
    fontFamily:'Roboto',
    fontWeight:200,
    fontSize:34,
    marginLeft:"150px",
    marginRight:'100px'
}
const para={
    fontFamily:'Roboto',
    fontSize:22,
    fontWeight:100,
    marginLeft:"150px",
    marginRight:'100px'
}
const button={
    fontFamily:'Roboto',
    fontSize:22,
    fontWeight:100,
    marginLeft:"150px",
    marginRight:'100px',
    borderRadius:'30px',
    backgroundColor:'blue',
    height:'60px',
    width:'200px',
    color:'white'
}

const header1={
    fontFamily:'Roboto',
    fontWeight:200,
    fontSize:34,
    // marginLeft:"150px",
    marginRight:'150px'
}
const para1={
    fontFamily:'Roboto',
    fontSize:22,
    fontWeight:150,
    // marginLeft:"150px",
    marginRight:'150px'
}
const button1={
    fontFamily:'Roboto',
    fontSize:22,
    fontWeight:100,
    // marginLeft:"150px",
    // marginRight:'100px',
    borderRadius:'30px',
    backgroundColor:'blue',
    height:'60px',
    width:'200px',
    color:'white'
}



