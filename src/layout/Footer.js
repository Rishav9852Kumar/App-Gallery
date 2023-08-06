import React from "react"
import {Container} from "react-bootstrap"
import music from "../Gallery/music.mp3"

const Footer =() =>{
    return(
        <Container
        fluid
        tag="footer"
    className="text-center bg-primary text-white text-uppercase  pb-2 ">
    {/*className="text-center bg-primary text-white text-uppercase fixed-bottom pb-2 "> */}
        
        {/* <audio src={music} controls  autostart="autostart" className="float-end"/> */}
        <footer>
        <b><p className="pr-2">Build With </p></b>
        </footer>
        
        
        <footer>
        
      <div><img src="https://git-scm.com/images/logos/downloads/Git-Logo-1788C.png" alt="/" id="footerlogo"/> </div> 
      <div><img src="https://bulma.io/images/bulma-logo.png" id="footerlogo" alt="/"/></div>
      <div><img src="https://www.alioze.com/wp-content/uploads/2016/11/react-js.png" alt="/" id="footerlogo"/></div>
      <div><img src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-knockout.png" alt="/"id="footerlogo"/></div>
      </footer>
        </Container>
    );
}

export default Footer;