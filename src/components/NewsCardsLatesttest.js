import React, {useState,useEffect} from 'react';
import {ListGroup,ListGroupItem} from "reactstrap";


const Newstest =({user}) =>{
  
  return(
      <div>
       {/* <h3 className="is-family-code">{user.webTitle}</h3><br/> */}
       <div class="box mb-1">
  <article class="media">
    <div class="media-left">
      <figure class="image image is-128x128">
        <img src={user.image_url}alt="Image not available "/>
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
       
          <strong>{user.title}</strong><br/> <small>{user.description}</small> <br/><small class="text-muted">Last updated  {user.pubDate} <a href={user.url} target="blank">_ Live</a></small>
          <br/>
      </div>
      <nav class="level is-mobile">
        <div class="level-right">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>

      </div>
  );
};

export default Newstest;