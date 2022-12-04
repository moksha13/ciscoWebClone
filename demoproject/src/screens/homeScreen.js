import React from 'react';
import Header from '../components/HeaderComponent';
import IconComponent from '../components/IconsComponent';
import CardComponent from '../components/CardComponent';
import Card2Component from '../components/Card2Component';
import VideoComponent from '../components/VideoComponent';
import FooterComponent from '../components/FooterComponent';

const HomeScreen = ()=> {
  return (
    <div style={{display:"flex", flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', width:'100%'}}>
      <div style={{width:'80vw', boxShadow: "1px 3px 10px #9E9E9E",}}>
        <Header/>
        <IconComponent/>
        <h1 style={header}>Deliver seamless, secure access with Cisco Security</h1>
        <CardComponent/>
        <Card2Component/>
        <VideoComponent/>
        <FooterComponent/>
      </div>
    </div>
    
  );
}

export default HomeScreen;

const header={
  justifyContent:'center',
  alignItems:'center',
  display:'flex',
  marginTop:'40px',
  fontFamily:'Roboto',
  fontWeight:100,
  fontSize:'44px',
  
}