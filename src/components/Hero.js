import React from "react";
import mouse from "../assets/icons/mouse-click.svg";
import amazon from "../assets/icons/amazon-prime.svg";
import microsoft from "../assets/icons/microsoft-azure.svg";
import apple from "../assets/icons/apple-music.svg";
import spotify from "../assets/icons/spotify.svg";
import hero_img from "../assets/images/team-work.svg";
import "./Hero.css";
import Form from "./Form";

export default function Hero() {
  return (
    <div className='hero-outer-wrapper'>
      <div className='hero-inner-wrapper'>
        <div className='hero-left-wrapper'>
          <h1>
            Operate the team <br /> by organizing <br /> the task
            <span>
              {" "}
              <img className='mouse' src={mouse} alt='clicking mouse' />
            </span>
          </h1>

          <p>
            Cranbery is built for every member of your project team to plan,
            manage and release great results.
          </p>
          {/* Import form component */}
          <Form />
          <h4>Our top clients</h4>
          <div className='logo-wrapper'>
            <img className='logo' src={amazon} alt='amazon logo' />
            <img className='logo' src={microsoft} alt='microsoft logo' />
            <img className='logo' src={apple} alt='apple logo' />
            <img className='logo' src={spotify} alt='spotify logo' />
          </div>
        </div>
        <div className='hero-right-wrapper'>
          <img className='hero-image' src={hero_img} alt='decorative' />
        </div>
      </div>
    </div>
  );
}
