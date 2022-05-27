import React from "react"
import {Container} from "react-bootstrap"


const Footer =() =>{
    return(
        <Container
        fluid
        tag="footer"
        className="text-center bg-info text-white text-uppercase fixed-bottom p-3">
        LCO Github Search app with firebase
        </Container>
    );
}

export default Footer;