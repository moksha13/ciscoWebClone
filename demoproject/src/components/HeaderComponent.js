import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';
import bglogo from '../../src/images/bgImage.jpg';


function Header() {


  return (
    <div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
        <Nav activeKey="/home" style={navContainer}>
            <div style={container}>
                <Nav.Item>
                    <Nav.Link href="/home" style={navLinkItems}>
                        <img src={logo} alt="moksha" style={{width:'130px', height:'50px'}}/>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home" style={navLinkItems}>Products and Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" style={navLinkItems}>Solutions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" style={navLinkItems}>Support</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" style={navLinkItems}>Learn</Nav.Link>
                </Nav.Item>
            </div>
            <div style={{display:"flex",flexDirection:"row", justifyContent:"center", alignItems:'center'}}>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" style={navLinkItems}>Explore Cisco</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" style={navLinkItems}>Search</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" style={navLinkItems}>Learn</Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    </div>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'10px'}}>
        <div style={contentContainer}>
            <h1 style={headerText}>If it's connected it's protected</h1>
            <p style={paraText}>End-to-end security with threat visibility across your entire network</p>
            <button style={buttonText}>
                Secure it all
            </button>
        </div>
    </div>
    </div>
  );
}

export default Header;

const navContainer={
        display : "flex",
        justifyContent: "space-between",
        width:'80vw',
        // boxShadow: "1px 3px 10px #9E9E9E",
        padding:'20px'
}
const container={
    display : "flex",
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center'
}
const navLinkItems={
    color:"black", 
    textDecoration: 'none', 
    marginRight:20,
    fontSize:'22px',
    fontWeight:400,
    fontFamily:"Roboto",
    
}


const contentContainer={
    backgroundImage:`url(${bglogo})`,
    width:'82vw',
    boxShadow: "1px 3px 10px #9E9E9E",
    height:'60vh',
    backgroundSize:'cover',
    alignItems:'center',
    flexDirection:'column',
    display:'flex',
    paddingTop:'100px'
}

const headerText={
    color:'white',
    fontWeight:'bold',
    fontSize:70
}
const paraText={
    color:'white',
    fontFamily:'Roboto',
    fontSize:26
}
const buttonText={
    color:'black',
    fontWeight:'bold',
    fontFamily:'Roboto',
    height:'60px',
    width:'140px',
    borderRadius:'40px',
    padding:20,
    fontSize:18


}