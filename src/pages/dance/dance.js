/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import ReactDOM from "react-dom";
import { Zoom } from "react-slideshow-image";
import "./css/styleDance.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../dance/images/logo.png";
import image1 from "./images/pfci1.png";
import image2 from "./images/pfci2.png";
import image3 from "./images/pfci3.png";
import DanceNavbar from "./Navbar/DanceNavbar";
import DanceFooter from "./Footer/DanceFooter";
import Infocard from "./Infocard/Infocard";
import DefaultPic from "./Infocard/Rectangle 103.png";

const Dance = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="dancepage">
      <div className="dancenavbar1">
        <DanceNavbar />
      </div>
      <div className="dancebody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Dance Club</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea{" "}
            </p>
            <div class="social_icons">
              <a href="" className=" fbpfc fa fa-facebook" target="blank"></a>
              <a
                href=""
                className="instapfc fa fa-instagram"
                target="blank"
              ></a>
              <a href="" className="fa fa-youtube"></a>
            </div>
          </div>
          <Zoom
            className="slideshow-container "
            {...zoomOutProperties}
            style={{}}
          >
            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Event Name3</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image1}
                />
              </div>
            ))}

            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Event Name2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image2}
                />
              </div>
            ))}

            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Event Name1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image3}
                />
              </div>
            ))}
          </Zoom>
        </div>
        <div className="danceteam">
          <div className="danceteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="danceteamcontent">
            <div className="danceformat1">
              <div className="danceformat1_1">
                <Infocard
                  image={DefaultPic}
                  name="Dishant Dhiman"
                  position="Secretary"
                />
              </div>
              <div className="danceformat1_2">
                <Infocard
                  image={DefaultPic}
                  name="Pranjalee"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Anukriti"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Bhavya Shah"
                  position="Representative"
                />
              </div>
              <div className="danceformat1_3">
                <Infocard
                  image={DefaultPic}
                  name="Shlokh Mohta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Mitanshu Kansal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vatsal Jingar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Sanjay Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Akash Sinha"
                  position="Representative"
                />
              </div>
              <div className="danceformat1_4">
                <Infocard
                  image={DefaultPic}
                  name="Franklin"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="S.Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Madhav Goel"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prasad Bhosale"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rinish Agrawal"
                  position="Representative"
                />
              </div>
            </div>
            <div className="danceformat2">
              <div className="danceformat2_1">
                <Infocard
                  image={DefaultPic}
                  name="Dishant Dhiman"
                  position="Secretary"
                />
              </div>
              <div className="danceformat2_2">
                <Infocard
                  image={DefaultPic}
                  name="Pranjalee"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Anukriti"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Bhavya Shah"
                  position="Representative"
                />
              </div>
              <div className="danceformat2_3">
                <Infocard
                  image={DefaultPic}
                  name="Shlokh Mohta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Mitanshu Kansal"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Vatsal Jingar"
                  position="Representative"
                />
              </div>
              <div className="danceformat2_4">
                <Infocard
                  image={DefaultPic}
                  name="Sanjay Kumar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Akash Sinha"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Franklin"
                  position="Representative"
                />
              </div>
              <div className="danceformat2_5">
                <Infocard
                  image={DefaultPic}
                  name="S.Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Madhav Goel"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Prasad Bhosale"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rinish Agrawal"
                  position="Representative"
                />
              </div>
            </div>
            <div className="danceformat3">
              <div className="danceformat3_1">
                <Infocard
                  image={DefaultPic}
                  name="Dishant Dhiman"
                  position="Secretary"
                />
              </div>
              <div className="danceformat3_2">
                <Infocard
                  image={DefaultPic}
                  name="Pranjalee"
                  position="Representative"
                />
              </div>
              <div className="danceformat3_3">
                <Infocard
                  image={DefaultPic}
                  name="Anukriti"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Bhavya Shah"
                  position="Representative"
                />
              </div>
              <div className="danceformat3_4">
                <Infocard
                  image={DefaultPic}
                  name="Shlokh Mohta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Mitanshu Kansal"
                  position="Representative"
                />
              </div>
              <div className="danceformat3_5">
                <Infocard
                  image={DefaultPic}
                  name="Vatsal Jingar"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Sanjay Kumar"
                  position="Representative"
                />
              </div>
              <div className="danceformat3_6">
                <Infocard
                  image={DefaultPic}
                  name="Akash Sinha"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Franklin"
                  position="Representative"
                />
              </div>
              <div className="danceformat3_7">
                <Infocard
                  image={DefaultPic}
                  name="S.Gupta"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Madhav Goel"
                  position="Representative"
                />
              </div>
              <div className="danceformat3_8">
                <Infocard
                  image={DefaultPic}
                  name="Prasad Bhosale"
                  position="Representative"
                />
                <Infocard
                  image={DefaultPic}
                  name="Rinish Agrawal"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dancefooter1">
        <DanceFooter />
      </div>
    </div>
  );
};

export default Dance;
