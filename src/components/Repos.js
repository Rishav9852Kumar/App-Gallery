import React, {useState,useEffect} from 'react';
import Axios from "axios"
import {ListGroup,ListGroupItem} from "reactstrap";


const Repos =({repos_url}) =>{
  const[repos,setRepos] =useState([])

  const fetchRepos =async () =>{
      const {data} = await Axios.get(repos_url);
      setRepos(data);
  }

  useEffect(() => {
    fetchRepos();
  },[repos_url])

  return(
      <ListGroup className="mb-5 ml-1">
          {repos.map(repo =>(
              <ListGroupItem key ={repo.id}>
                  <div className="text-secondary"><b>{repo.name}</b></div>
                  <div className="text-warning">{repo.language}</div>
                  <div className="text-info">{repo.description}</div>
                  <a className="text-primary" href={repo.html_url} target="_blank" rel="noopener noreferrer"><b> see </b></a>
                  
              </ListGroupItem>
          ))}
      </ListGroup>
  );
};

export default Repos;