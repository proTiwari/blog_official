import React, { Component, useState } from "react";
import "./Style.scss";
import "./_Open.scss";
import large from "./large.png";
import Hero from "../hero/Index";


function Index() {
  const [op, setop] = useState(false);

  return (
    <div>
      
      <header className="header">
        <nav class="  fex fex-jc-sb fex-ai-c ">
          <a href="/" className="header__logo">
            <img height="20px" width="90px" src={large} />
          </a>

          <button
            id="btnHamburger"
            onClick={() => setop(!op)}
            className={
              op
                ? " Open header__menu hide-for-desktop"
                : "header__menu hide-for-desktop "
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div class="header__links hide-for-mobile">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Log In</a>
          </div>

          <a class="header__button hide-for-mobile">Request link</a>
        </nav>

            <div class={op ? "hide-for-desktop header__linkin Overlay" : " nnsn"} >
              <a>Home</a>
              <a>About</a>
              <a>Contact</a>
              <a>Log in</a>

            </div>
      </header> 
      
      <Hero name={op}/>
    </div>
  );
}

export default Index;
