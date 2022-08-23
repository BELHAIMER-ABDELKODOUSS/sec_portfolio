import React from "react";
import "../Styles/services.scss";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";

const ServicesSection = () => {
  return (
    <div>
      <main className="main-services">
        <div className="service-photo">
          <img src={home2} alt="home2" />
        </div>
        <div className="service-description">
          <h1 className="service-title">
            High <span>quality</span> <br /> service.
          </h1>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={clock} alt="clock" />
                <h3>Efficient</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={money} alt="money" />
                <h3>Affordable</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={diaphragm} alt="diaphragm" />
                <h3>Pro Grade Gear</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={teamwork} alt="teamwork" />
                <h3>Teamwork</h3>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesSection;
