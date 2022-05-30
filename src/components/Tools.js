import React from "react";
import {Card,CardBody,NavLink,Container, CardText,CardTitle} from "reactstrap";
import {Link} from "react-router-dom"
const Tools=({text,imgURL,link,desc})=>{
    return (
        <Container fluid className>
          
              <NavLink tag={Link} to={link}>
        <Card  className="text-center  mb-2"   >
             <img
                src={imgURL}
                className='w-100 hover-shadow' 
                      alt=''
                   
                     />
             <CardBody>
                 <CardTitle className="text-primary"><u><b>{text}</b></u></CardTitle>
                 <CardText className="text-info">{desc}</CardText>
             </CardBody>
        </Card>
        </NavLink>
        
        </Container>
     
    );
}
export default Tools;