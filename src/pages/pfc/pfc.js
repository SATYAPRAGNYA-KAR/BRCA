/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import { Zoom } from "react-slideshow-image";
import "./css/stylePFC.css";
import "../css/animate.css";
import "react-slideshow-image/dist/styles.css";
import imagee from "../pfc/images/pfclogo.png";
import image1 from "./images/Flatlay.JPG";
import image2 from "./images/Silhouette 1.jpeg";
import image3 from "./images/SIlhouette.jpg";
import image4 from "./images/Wildlife.jpg";
import PFCNavbar from "./Navbar/PFCNavbar";
import PFCFooter from "./Footer/PFCFooter";
import Infocard from "./Infocard/Infocard";
import Adarsh from "./1.png";
import Aayush from "./2.png";
import Aditya from "./3.png";
import Akshat from "./4.png";
import Aryan from "./5.png";
import Asmita from "./6.png";
import AyushKanaujia from "./7.png";
// import AyushPandey from "./8.png";
import Gauransh from "./9.png";
// import Navaneeth from "./10.png";
import Pranjal from "./11.png";
// import Praveen from "./12.png";
import Rohan from "./13.png";
import Saurav from "./14.png";
// import Tanay from "./15.png";
import Snigdha from "./16.png";
import Tanish from "./17.png";
import Tushar from "./18.png";
import Udit from "./19.png";
import Vaikruti from "./20.png";
import Gunjit from "./Gunjit.jpg"
import Nishant from "./Nishant.jpg";
// import Varun from "./21.png";

const PFC = () => {
  const images = [{ image1 }];

  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };
  return (
    <div className="pfcpage">
      <div className="pfcnavbar1">
        <PFCNavbar />
      </div>
      <div className="pfcbody">
        <div className="containerpfc animate__animated animate__fadeIn">
          <div className="section1">
            <img src={imagee} alt="logo" />
            <h3>Photography and Films Club</h3>
            <p>
            PFC or the Photography and Films Club is one of the most popular and an innate club of the BRCA. We do a range of activities from Photography, Photo Editing, Photo Manipulation, Videography, Video Editing and much more. The Film part of the club will include events such as Movie Making, Trailer Making, and Ad-Making, making it a haven for the creative. The club will also be conducting various workshops and learning sessions on image-editing and video-editing softwares. The club would also take you to various places across Delhi on Photowalks to click pictures and explore. The club also promotes trying different styles of photography and videography and conducts events like Freshers League and PIXELS to encourage students to try new things. {" "}
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
                  <h3>PhotoStory</h3>
                  <p>
                  You must have heard this before “A picture is worth a thousand words” , have you ever tried to portray a story by merely using a few pictures, we got you to look at some fabulous entries from past competitions.
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
                  <h3>Trailer Making Competition </h3>
                  <p>
                  You must have heard this before “A picture is worth a thousand words” , have you ever tried to portray a story by merely using a few pictures, we got you to look at some fabulous entries from past competitions.
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
                  <h3>Ad-Making Competition</h3>
                  <p>
                  Want to try your hand at Ad-making? Be it script writing, directing, shooting or editing, we got you covered! Here is a chance for you to flaunt your scriptwriting, directing and cinematography skills and make an Advertisement Video  just how you want.
                  </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image3}
                />
              </div>
            ))}
            {images.map((each, index) => (
              <div key={index} className="carousel">
                <div className="eventname">
                  <h3>Illusion Photo Manipulation Competition </h3>
                  <p>
                  Ever wondered how your imaginative world would look like or how you could combine multiple elements to create a dreamy picture? Illusion brings you the opportunity to play free with your creativity and show us the best you got! With our resources and workshops, you’ve got everything you need! </p>
                </div>
                <img
                  className="imgs"
                  style={{ objectFit: "cover" }}
                  src={image4}
                />
              </div>
            ))}
            
          </Zoom>
        </div>
        <div className="pfcteam">
          <div className="pfcteamtitle">
            <h1>TEAM</h1>
          </div>
          <div className="pfcteamcontent">
            <div className="pfcformat1">
              <div className="pfcformat1_1">
                <Infocard
                  image={Gauransh}
                  name="Gauransh Soni"
                  position="Secretary"
                />
              </div>
              <div className="pfcformat1_2">
                <Infocard
                  image={Gunjit}
                  name="Gunjit Jindal"
                  position="Director"
                />
                <Infocard
                  image={Rohan}
                  name="Rohan Gupta"
                  position="Director"
                />
                <Infocard
                  image={Nishant}
                  name="Nishant Bansal"
                  position="Director"
                />
                <Infocard
                  image={AyushKanaujia}
                  name="Ayush Kanaujia"
                  position="Director"
                />
              </div>
              <div className="pfcformat1_3">
                <Infocard
                  image={Akshat}
                  name="Akshat Shukla"
                  position="Representative"
                />
                <Infocard
                  image={Tanish}
                  name="Tanish Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={Aayush}
                  name="Aayush Gupta"
                  position="Representative"
                />
                <Infocard
                  image={Udit}
                  name="Udit Batish"
                  position="Representative"
                />
                <Infocard
                  image={Aditya}
                  name="Aditya Singh"
                  position="Representative"
                />
                <Infocard
                  image={Snigdha}
                  name="S.Malhotra"
                  position="Representative"
                />
              </div>
              <div className="pfcformat1_4">
                <Infocard
                  image={Tushar}
                  name="Tushar Kant Sao"
                  position="Representative"
                />
                <Infocard
                  image={Saurav}
                  name="Saurav K. Singh"
                  position="Representative"
                />
                <Infocard
                  image={Asmita}
                  name="Asmita Mehta"
                  position="Representative"
                />
                <Infocard
                  image={Pranjal}
                  name="Pranjal Sachan"
                  position="Representative"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Vaikruti}
                  name="Varikuti V. Reddy"
                  position="Representative"
                />
                <Infocard
                  image={Adarsh}
                  name="Adarsh Roy"
                  position="Representative"
                />
              </div>
            </div>
            <div className="pfcformat2">
              <div className="pfcformat2_1">
                <Infocard
                  image={Gauransh}
                  name="Gauransh Soni"
                  position="Secretary"
                />
              </div>
              <div className="pfcformat2_2">
                <Infocard
                  image={Gunjit}
                  name="Gunjit Jindal"
                  position="Director"
                />
                <Infocard
                  image={Rohan}
                  name="Rohan Gupta"
                  position="Director"
                />
              </div>
              <div className="pfcformat2_3">
                <Infocard
                  image={Nishant}
                  name="Nishant Bansal"
                  position="Director"
                />
                <Infocard
                  image={AyushKanaujia}
                  name="Ayush Kanaujia"
                  position="Director"
                />
              </div>
              <div className="pfcformat2_4">
                <Infocard
                  image={Akshat}
                  name="Akshat Shukla"
                  position="Representative"
                />
                <Infocard
                  image={Tanish}
                  name="Tanish Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={Aayush}
                  name="Aayush Gupta"
                  position="Representative"
                />
              </div>
              <div className="pfcformat2_5">
                <Infocard
                  image={Udit}
                  name="Udit Batish"
                  position="Representative"
                />
                <Infocard
                  image={Aditya}
                  name="Aditya Singh"
                  position="Representative"
                />
                <Infocard
                  image={Snigdha}
                  name="S.Malhotra"
                  position="Representative"
                />
              </div>
              <div className="pfcformat2_6">
                <Infocard
                  image={Tushar}
                  name="Tushar Kant Sao"
                  position="Representative"
                />
                <Infocard
                  image={Saurav}
                  name="Saurav K. Singh"
                  position="Representative"
                />
                <Infocard
                  image={Asmita}
                  name="Asmita Mehta"
                  position="Representative"
                />
              </div>
              <div className="pfcformat2_7">
                <Infocard
                  image={Pranjal}
                  name="Pranjal Sachan"
                  position="Representative"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Kumar"
                  position="Representative"
                />
                <Infocard
                  image={Vaikruti}
                  name="Varikuti V. Reddy"
                  position="Representative"
                />
                <Infocard
                  image={Adarsh}
                  name="Adarsh Roy"
                  position="Representative"
                />
              </div>
            </div>
            <div className="pfcformat3">
              <div className="pfcformat3_1">
                <Infocard
                  image={Gauransh}
                  name="Gauransh Soni"
                  position="Secretary"
                />
              </div>
              <div className="pfcformat3_2">
                <Infocard
                  image={Gunjit}
                  name="Gunjit Jindal"
                  position="Director"
                />
              </div>
              <div className="pfcformat3_3">
                <Infocard
                  image={Rohan}
                  name="Rohan Gupta"
                  position="Director"
                />
              </div>
              <div className="pfcformat3_4">
                <Infocard
                  image={Nishant}
                  name="Nishant Bansal"
                  position="Director"
                />
              </div>
              <div className="pfcformat3_5">
                <Infocard
                  image={AyushKanaujia}
                  name="Ayush Kanaujia"
                  position="Director"
                />
              </div>
              <div className="pfcformat3_6">
                <Infocard
                  image={Akshat}
                  name="Akshat Shukla"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_7">
                <Infocard
                  image={Tanish}
                  name="Tanish Agarwal"
                  position="Representative"
                />
                <Infocard
                  image={Aayush}
                  name="Aayush Gupta"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_8">
                <Infocard
                  image={Udit}
                  name="Udit Batish"
                  position="Representative"
                />
                <Infocard
                  image={Aditya}
                  name="Aditya Singh"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_9">
                <Infocard
                  image={Snigdha}
                  name="S.Malhotra"
                  position="Representative"
                />
                <Infocard
                  image={Tushar}
                  name="Tushar Kant Sao"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_10">
                <Infocard
                  image={Saurav}
                  name="Saurav K. Singh"
                  position="Representative"
                />
                <Infocard
                  image={Asmita}
                  name="Asmita Mehta"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_11">
                <Infocard
                  image={Pranjal}
                  name="Pranjal Sachan"
                  position="Representative"
                />
                <Infocard
                  image={Aryan}
                  name="Aryan Kumar"
                  position="Representative"
                />
              </div>
              <div className="pfcformat3_12">
                <Infocard
                  image={Vaikruti}
                  name="Varikuti V. Reddy"
                  position="Representative"
                />
                <Infocard
                  image={Adarsh}
                  name="Adarsh Roy"
                  position="Representative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pfcfooter1">
        <PFCFooter />
      </div>
    </div>
  );
};

export default PFC;
