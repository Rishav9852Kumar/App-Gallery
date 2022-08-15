import React from "react"
import music from "../Gallery/music.mp3"
const Testingpage=()=>{
    return(
        <div>
        
          <div id="carouselExampleInterval" class="carousel slide h-25" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-80" alt="..."/>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="https://images.pexels.com/photos/1464210/pexels-photo-1464210.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-80" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-80" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
          
            <h1>Page under construction </h1>
            <p>Meanwhile enjoy </p>
            <audio src={music} controls  autostart="autostart" className="float-end"/>
            <img src= "https://www.lawrenceprospera.org/images/quintana/Page_Under_Construction.jpg"></img>
        </div>
    );
}
export default Testingpage;