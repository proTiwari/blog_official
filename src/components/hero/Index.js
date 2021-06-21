import React from "react";
import "./Style.scss";
import "../nav/Style.scss";
import sss from "../nav/astorf.jpeg";

function Hero(props) {
  return (
    <header>
      <h2>Recent Blog</h2>
      <div className={props.name ? "bx container Overlay" : "bx container"}>
        <div class="box">
          this is itthis is itthis is it this is it this is it thi
        </div>

        <div class="box1">
          <img class="posi" src={sss}></img>
        </div>
      </div>

      <div className={props.name ? "bx container Overlay" : "bx container"}>
        <div class="box">this is itt</div>

        <div class="box1">
          <img class="posi" src={sss}></img>
        </div>
      </div>
      <div style={{paddingBottom: "73px"}}></div>
    </header>
  );
}

export default Hero;
