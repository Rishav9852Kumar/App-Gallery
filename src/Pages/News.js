import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,

} from "reactstrap";


import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import Newss from "../components/NewsCards";
const News=()=>{
    const context =useContext(UserContext)
    const [query,setQuery] =useState("")
    const [user,setUser] =useState(null)
    const [page, setPage] = useState(1);
    const fetchDefault =async() =>{
        try{
          
          const {data} = await Axios.get(`https://content.guardianapis.com/search?page=${page}&api-key=a200c175-5024-4bcb-8e9c-101e5399d1fb`);
        
         
          setUser(data);
          console.log({ data });
        }catch(error)
        {
           toast("Not able to find the topic ",{type:"error"});  
        }
    };
    const fetchDetails =async() =>{
       
        try{
          
          const {data} = await Axios.get(`https://content.guardianapis.com/search?page=${page}&q=${query}&api-key=a200c175-5024-4bcb-8e9c-101e5399d1fb`);
        
        
          setUser(data);
          console.log({ data });
        }catch(error)
        {
           toast("Not able to find the topic ",{type:"error"});  
        }
    };
    const getnextpage =async()=>{
        setPage(page+1);
       if(query=="")
       {
           fetchDefault();
       }else
       {
            fetchDetails();
       }
    } 
    const alldefault =async()=>{
        
       setPage(1);
       
      fetchDefault();
      setQuery("");
       
       
    }
    //put any page behind login//
    if(!context.user?.uid)
    {
      return <Navigate to="/signin"/>;
    }
    return (
        
        <Container className="mb-5">
           
              <h1>News Notice Board</h1> 
              
              
              <Button color="success" onClick={alldefault}>Refresh</Button>
             
              
          <Row className=" mt-4">
            <Col md="5">
              <InputGroup>
                <Input
                  type="text"
                  value={query}
                 
                  onChange={e => setQuery(e.target.value)}
                  
                  placeholder="Please provide the topic"
                />
                
               <Button onClick={fetchDetails}color="primary">Fetch Articles</Button>
            
              </InputGroup>
              <Button outline color="info" onClick={getnextpage}>Page.no :  {user?.response.currentPage}  </Button>
              <div>
                  {fetchDefault}
                  <h1>OrderBy: {user?.response?.orderBy}</h1>
                    {user?.response?.results.map(result => (
                        <Newss key={result.id} user={result} />
                        
                    ))}

                </div>
            </Col>
         
          </Row>
        </Container>
      );
};
export default News;