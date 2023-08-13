import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Newss = ({ user }) => {
  return (
    <div>
      {/* <h3 className="is-family-code">{user.webTitle}</h3><br/> */}
      <div class="box mb-1">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Image"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{user.webTitle}</strong>
                <br /> <small>{user.webPublicationDate}</small> <br />
                <small>
                  <a href={user.webUrl} target="blank">
                    Link
                  </a>
                </small>
                <br />
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
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

export default Newss;
