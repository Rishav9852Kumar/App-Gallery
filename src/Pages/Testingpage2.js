import React, { useState, useContext ,useEffect} from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

import {Button,Container, Row, Col} from "reactstrap"
import QuotesCard from "../components/QuotesCard";

const Testingpage2= () => {
    const context =useContext(UserContext)
    const [query,setQuery] =useState("");
    const [quote,setquote]=useState({});
    const getquote =async() =>{
        try{
          
          const {data} = await Axios.get(`https://api.quotable.io/random`);
        
         
          
          setquote(data);
          console.log({ data });
        }catch(error)
        {
           toast("Not able to find the topic ",{type:"error"});  
        }
    }
    useEffect(() => {
        getquote(); 
     },[]);
    if(!context.user?.uid)
    {
      return <Navigate to="/signin"/>;
    }
    return (
        <div style={{minHeight: "100vh",
        backgroundColor: "rgb(145, 199, 181)",
        backgroundImage: `url("https://picsum.photos/200/300?grayscale")`
      }}>
        <h1 style={{textAlign: "center"}}>Random Quote Generator</h1>
        
        <Container fluid className="p-2  App" style={{minHeight: "85vh",
        backgroundColor: "rgb(40, 96, 180)"}}>
        <Row>
        <Col md={4} className="offset-md-4 ">
        <QuotesCard quote={quote}/>
        </Col>
        </Row>
        <Row>
          <Col md={4} className="offset-md-5 ">
          <Button className ="mt-3 mr-2"outline color="warning" onClick={getquote}>Random Quotes</Button>
         
          </Col>
        </Row>
        </Container>
        </div>

    );
}
export default Testingpage2;