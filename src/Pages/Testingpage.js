import React, { useState, useContext ,useEffect} from "react";
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
import Newssl from "../components/NewsCardsLatest";
const News=()=>{
   
    const context =useContext(UserContext)
    const [query,setQuery] =useState("")
    const [user,setUser] =useState(null);
    const [headlines,setHeadlines] =useState(null);
    const [page, setPage] = useState(1);
    const fetchDefaultHeadlines =async() =>{
        {console.log(page);}
        try{
          
          const {headlines} = await Axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=c9f9bc479cc1448d9987963e747c2f26`);
        
         
          setHeadlines(headlines);
          console.log( headlines.title );
        }catch(error)
        {
           toast("Not able to find the topic ",{type:"error"});  
        }
    };
    const fetchDefault =async() =>{
      {console.log(page);}
      try{
        
        const {data} = await Axios.get(`https://content.guardianapis.com/world?page=${page}&api-key=a200c175-5024-4bcb-8e9c-101e5399d1fb`);
      
       
        setUser(data);
        console.log({ data });
      }catch(error)
      {
         toast("Not able to find the topic ",{type:"error"});  
      }
  };
    const fetchDetails =async() =>{
       {console.log(page);}
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
    const getprevpage =async()=>{
       if(page>1) {
        setPage(page-1);
       if(query=="")
       {
           fetchDefault();
       }else
       {
            fetchDetails();
       }
    }
    } 
    const alldefault =async()=>{
        
       setPage(1);
       
      fetchDefault();
      setQuery("");
       
    }
    useEffect(() => {
      alldefault();
      fetchDefaultHeadlines();
   },[]);
    //put any page behind login//
    if(!context.user?.uid)
    {
      return <Navigate to="/signin"/>;
    }
    return (
        
        <Container className="mb-2">
           <p className="title is-family-code"> News shorts</p>
              
          <Row className=" mt-4">
            <Col md="6">
              <InputGroup>
                <Input className="input is-rounded input is-small  is-loading input is-primary "
                  type="text"
                  value={query}
                 
                  onChange={e => setQuery(e.target.value)}
                  
                  placeholder="Please provide the topic"
                />
                <Button onClick={fetchDetails}color="primary" className="button is-small button is-rounded">search</Button>
                </InputGroup>
               
<div class="buttons mt-1">
  <button class="button is-info is-light">Info</button>
  <button class="button is-success is-light">Success</button>
  <button class="button is-warning is-light">Warning</button>
  <button class="button is-primary is-light">Primary</button>
  <button class="button is-link is-light">Link</button>
  <button onClick={alldefault} className="button is-danger is-light">Refresh</button>
</div>
       

              
              
              <Button outline color="info" onClick={getnextpage}>Page.no :  {user?.response.currentPage}  </Button>
              <div>
                 
                </div>
                <h5 className="is-uppercase has-text-weight-semibold ">Top Headlines</h5>
                {headlines?.response?.articles.map(result => (
                  <Newssl  user={result} />
                  
              ))}
            </Col>
            <Col md="" > <h1 className="is-uppercase has-text-weight-semibold">Ordered By: {user?.response?.orderBy}</h1>
            {/* the page no links  */}
 <nav class="pagination is-rounded is-small" role="navigation" aria-label="pagination">
  <button onClick={getprevpage} className="pagination-previous " title="This is the first page">prev</button>
  <button onClick={fetchDetails} className="pagination-previous "  title="This is the first page"> Current :{user?.response.currentPage}</button>
  <button onClick={getnextpage} className="pagination-next">next</button>
  
</nav>   
                    {user?.response?.results.map(result => (
                        <Newss key={result.id} user={result} />
                        
                    ))}</Col>
          </Row>
        </Container>
      );
};
export default News;