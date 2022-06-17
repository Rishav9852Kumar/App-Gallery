import React from "react"
import {Container} from "react-bootstrap"
import music from "../Gallery/music.mp3"

const Footer =() =>{
    return(
        <Container
        fluid
        tag="footer"
        className="text-center bg-primary text-white text-uppercase fixed-bottom pb-2 ">
       
        My project collection 
        {/* <audio src={music} controls  autostart="autostart" className="float-end"/> */}
        </Container>
    );
}

export default Footer;