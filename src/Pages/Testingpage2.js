import React from "react"
import music from "../Gallery/music.mp3"
const Testingpage=()=>{
    return(
        <div>
            <h1>Page under construction </h1>
            <p>Meanwhile enjoy </p>
            <audio src={music} controls  autostart="autostart" className="float-end"/>
            <img src= "https://www.lawrenceprospera.org/images/quintana/Page_Under_Construction.jpg"></img>
        </div>
    );
}
export default Testingpage;