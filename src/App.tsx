import React from "react";
import "./App.css";
import white from "./assets/white.svg";
import Vodafone from "./assets/Vodafone.svg";
import Group3 from "./assets/Group 3.png";
import plus from "./assets/plus.svg";
import whitecopy2 from "./assets/whitecopy2.svg";
import whitecopy3 from "./assets/whitecopy3.svg";
import iPhone123 from "./assets/iPhone123.png";
import iPhone121 from "./assets/iPhone121.png";
import iPhone122 from "./assets/iPhone122.png";
import iPhone124 from "./assets/iPhone124.png";
import iPhone125 from "./assets/iPhone125.png";
import woman from "./assets/woman.png";
import signup from "./assets/signup.png";
import rekuten from "./assets/rekuten.png";
import phoneSmartphone from "./assets/phoneSmartphone.svg";
import locationPin from "./assets/locationPin.svg";
import iia from "./assets/iia.png";
import hut from "./assets/hut.png";
import horizon from "./assets/horizon.png";
import googlePlay from "./assets/googlePlay.png";
import google from "./assets/google.png";
import deloitte from "./assets/deloitte.png";
import clock from "./assets/clock.svg";
import confirm from "./assets/confirm.svg";
import bezeq from "./assets/bezeq.png";
import aws from "./assets/aws.png";
import appstore from "./assets/appstore.png";
import allot from "./assets/allot.png";
import alert from "./assets/alert.svg";
import vodafone from "./assets/vodafone.png";

function App() {
  return (
    <>
      {" "}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="customCont navbar-brand">
          <div>
            <img src={white} style={{ marginRight: "16px" }} />
            <img src={Vodafone} />
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ alignItems: "center" }}
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler10">
          <button
            className="btn"
            type="submit"
            style={{
              maxWidth: "148px",
              width: "100%",
              backgroundColor: "rgb(56,201,213)",
              fontFamily: '"Barlow Semi Condensed", sans-serif',
              fontSize: "20px",
            }}
          >
            <b>Start the trial</b>
          </button>
        </div>
      </nav>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6" style={{ background: "red" }}>
              <img src={Group3} className="MainImageCustm" />
            </div>
            <div className="col-md-5 paddingMainText">
              <h3 className="fontscustom">
                <b>
                  Discover Keepers: <br />
                </b>
                Join us for Beta-Testing
              </h3>
              <p className="wearekeep">
                We are Keepers Child Safety. A specialist Israeli cyber tech
                company developing AI and Machine Learning technology to PROTECT
                kids from cyberbullying, harassment and toxic content. In
                cooperation with Drei we've created an exclusive version of the
                Keepers Child Safety App specifically for families in Austria.
                Protect your child with Keepers - Join the Beta-Testing Phase!"
              </p>
              <button
                type="button"
                className="btn btn-light"
                style={{
                  maxWidth: "268px",
                  maxHeight: "63px",
                  width: "100%",
                  textAlign: "center",
                  paddingBottom: "63px",
                  paddingTop: "0px",
                  backgroundColor: "#ffae3f",
                  borderRadius: "9px",
                }}
              >
                <span
                  style={{
                    fontFamily: '"Barlow Semi Condensed", sans-serif',
                    fontSize: "20px",
                    textAlign: "center",
                  }}
                >
                  SIGN UP NOW FOR A
                </span>
                <br />
                <b>
                  <span
                    style={{
                      fontFamily: '"Barlow Semi Condensed", sans-serif',
                      fontSize: "20px",
                      textAlign: "center",
                    }}
                  >
                    &nbsp;FREE TRIAL ACCOUNT
                  </span>
                </b>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container" style={{ marginBottom: "33px" }}>
          <div className="centerRow row">
            <div
              style={{
                fontFamily: '"Barlow Semi Condensed", sans-serif',
                marginTop: "17px",
              }}
              className="col-md-7"
            >
              <h3>
                <b>Keepers </b>Child Safety App
                <p
                  style={{
                    fontSize: "18px",
                    marginTop: "21px",
                    lineHeight: "27px",
                  }}
                >
                  The only app for German speaking countries that enables
                  parents to DETECT suspicious and dangerous messages in their
                  child's social media accounts. Notice dangerous messages in
                  real-time without invading your children's privacy by manually
                  scrolling through their chat history! This allows you to act
                  quickly &amp; prevent them from harm.
                  <br />
                  <br />
                  &nbsp;In addition Keepers offers important further child
                  protection features to help you monitor &amp; control your
                  children's experience in the digital world.&nbsp;
                </p>
              </h3>
            </div>
          </div>
          <div className="centerRow row" style={{ marginTop: "64px" }}>
            <div className="col-md-6 col-sm-7 col-xl-5">
              <h3 className="fontCustom">
                <b>EXCLUSIVELY DEVELOPED</b> FOR OUR GLOBAL PARTNERSHIP WITH
                DREI &amp; HUTCHISON
              </h3>
            </div>
            <div className="col-8 col-lg-3 col-md-4 col-sm-5 col-xl-3">
              <img src={Vodafone} />
              <img src={plus} />
              <img src={whitecopy2} style={{ marginLeft: "12px" }} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div
            className="centerRow row spaceImage"
            style={{ background: "red" }}
          >
            <div className="col-auto col-lg-2 col-md-3 col-sm-4 spaceImage">
              <img src={iPhone123} />
            </div>
            <div className="col-auto col-lg-2 col-md-3 col-sm-4 spaceImage">
              <img src={iPhone121} />
            </div>
            <div className="col-auto col-lg-2 col-md-3 col-sm-4 spaceImage">
              <img src={iPhone125} />
            </div>
            <div className="col-auto col-lg-2 col-md-3 col-sm-4 spaceImage">
              <img src={iPhone122} />
            </div>
            <div className="col-auto col-lg-2 col-md-3 col-sm-4">
              <img src={iPhone124} />
            </div>
          </div>
          <div className="CustomT arrow marginCusomLG marginForTheLast row">
            <div className="col-lg-4 col-md-6">
              <div className="bottom-arrow">
                <p>
                  "For the last year the Keepers team and my team here at Drei
                  worked closely together, fueled by a strong sense of purpose,
                  to create an app that truly enables parents to support their
                  children when they learn how to take their first steps in the
                  digital world.”
                </p>
              </div>
              <div className="CustomBoxLen row">
                <img src={Vodafone} style={{ width: "40px", height: "40px" }} />
                <p className="CustomLength customeLength">
                  <b>Barbara Haiden</b>,<br />
                  &nbsp;Innovation Manager &amp; Product Owner, Drei
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bottom-arrow">
                <p>
                  "For the last year the Keepers team and my team here at Drei
                  worked closely together, fueled by a strong sense of purpose,
                  to create an app that truly enables parents to support their
                  children when they learn how to take their first steps in the
                  digital world.”
                </p>
              </div>
              <div className="CustomBoxLen row">
                <img src={Vodafone} style={{ width: "40px", height: "40px" }} />
                <p style={{ lineHeight: "17px" }}>
                  <b>
                    Christian Haspl,
                    <br />
                  </b>
                  New Revenue Development, Drei
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bottom-arrow">
                <p>
                  We would like to thank everyone at Drei, and in particular
                  Barbara Haiden and Christian Haspl for this hugely important
                  and exciting partnership launch in Austria. We know that with
                  your support, together we can help protect kids as they find
                  their independence in the digital world.
                </p>
              </div>
              <div className="CustomBoxLen row xo">
                <img
                  src={whitecopy3}
                  style={{ width: "40px", height: "40px" }}
                />
                <p style={{ lineHeight: "17px" }}>
                  <b>Aviad Meshel</b>,<br />
                  &nbsp;CEO, Keepers Child Safety
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container" style={{ marginTop: "77px" }}>
          <div className="centerRow row">
            <div style={{ maxWidth: "654px" }} className="col-md-9">
              <h3 className="mainCOnfig">
                WE ARE ASKING ALL DREI EMPLOYEES TO <br />
                <b>DOWNLOAD OUR NEW APP TODAY AND JOIN OUR BETA TEST</b>
              </h3>
              <p
                style={{
                  marginTop: "23px",
                  fontSize: "17px",
                  fontFamily: '"Barlow Semi Condensed", sans-serif',
                }}
              >
                Calling all Drei employees with children aged 6-14.
                <br />
                Please download the new, Austria version of the app here:
                <br />
                <img
                  src={appstore}
                  style={{
                    marginRight: "28px",
                    marginTop: "28px",
                    marginLeft: "34px",
                  }}
                />
                <img
                  src={googlePlay}
                  style={{ marginTop: "28px", marginLeft: "37px" }}
                />
                <br />
                <br />
                Once the app is downloaded on your phone, please sign up and
                follow the instructions. You will be asked to then share the app
                with your children’s devices which will seamlessly link the
                accounts, And make sure you fill in your details in the box
                below for free access to your premium account.
              </p>
              <small>
                Note: You will see a payment screen for testing reasons,
                however, you will not be charged.
              </small>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fluid"
          style={{
            backgroundImage: `url(${signup})`,
            marginTop: "93px",
          }}
        >
          <div className="centerRow row">
            <div
              className="col-auto col-lg-4 col-md-4 col-md-5 col-sm-6 col-xl-3"
              style={{ marginTop: "79px", marginBottom: "79px" }}
            >
              <h3 style={{ color: "#a9a9a9" }}>
                SIGN UP NOW FOR A <br />
                FREE TRIAL CCOUNT:
              </h3>
              <input
                type="text"
                className="form-control transparentButton"
                placeholder="Placeholder text"
                style={{ marginTop: "25px", maxWidth: "268px" }}
              />
              <input
                type="text"
                className="form-control transparentButton"
                placeholder="Placeholder text"
                style={{ marginTop: "25px", maxWidth: "268px" }}
              />
              <input
                type="text"
                className="form-control transparentButton"
                placeholder="Placeholder text"
                style={{ marginTop: "25px", maxWidth: "268px" }}
              />
              <button
                type="button"
                className="btn"
                style={{
                  marginTop: "18px",
                  maxWidth: "268px",
                  width: "100%",
                  background: "#26b7c0",
                  borderRadius: "7px",
                  border: "3px solid #26b7c0",
                }}
              >
                <span>
                  <b>SIGN UP NOW</b>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container" style={{ marginTop: "64px" }}>
          <div className="centerRow row">
            <div className="col-12 col-md-5 col-sm-8 col-xl-4 flexWoman">
              <a href="#">
                {" "}
                <img
                  className="w-100"
                  src={woman}
                  alt=""
                  style={{ maxHeight: "218px", maxWidth: "300px" }}
                />{" "}
              </a>
            </div>
            <div className="col-md-7">
              <h3 style={{ maxHeight: "127px" }}>
                <b>
                  <br />
                </b>
              </h3>
              <h3 style={{ maxHeight: "127px" }}>
                <p>
                  <b>FEEDBACK </b>LOOP
                </p>
                <br />
              </h3>
              <p style={{ fontSize: "16px" }}>
                We are inviting you to join us for focus group on a Teams
                meeting on <b>Thursday at 17:00</b> CET to hear all your
                feedback, thoughts and ideas on the Keepers app.
                <br />
                <br />
                &nbsp;Please click here to let us know if you are willing to
                join us for this session.
                <br />
                <br />
                For any other questions feel free to contact us at:
                kids@drei.com
              </p>
            </div>
          </div>
          <div className="row" style={{ marginTop: "66px" }}>
            <div className="col-xl-8 container">
              <h3>
                <b>Keepers Child Safety</b> Unique features
              </h3>
            </div>
          </div>
          <div className="centerRow row" style={{ marginTop: "28px" }}>
            <div className="col-md-1">
              <img src={alert} />
            </div>
            <div className="col-md-7">
              <p>
                Suspicious text detection auto monitoring and reporting of any
                suspicious texts detect risky content from incoming / outgoing
                texts on social media app detect WhatsApp, Telegram, Viber,
                Instagram, Snapchat, Line, Kik, TikTok, Discord, Vkontakte.
              </p>
            </div>
          </div>
          <div className="centerRow row" style={{ marginTop: "28px" }}>
            <div className="col-md-1">
              <img src={horizon} />
            </div>
            <div className="col-md-7">
              <p>
                Website filter to shield kids from porn, gamble or other
                threatening site track chilren’s browsing history. enter the
                categories such as gambling and pornography are blocked
                automatically.
              </p>
            </div>
          </div>
          <div className="centerRow row" style={{ marginTop: "28px" }}>
            <div className="col-md-1">
              <img src={clock} />
            </div>
            <div className="col-md-7">
              <p>
                Screen time schedule It’s up to decide the right amount of
                screen time for your child. Help your child make healthy
                decisions about how they can utilize their time on the mobile
                phone. You can see daily , weekly or monthly reports.
              </p>
            </div>
          </div>
          <div className="centerRow row" style={{ marginTop: "28px" }}>
            <div className="col-md-1">
              <img src={locationPin} />
            </div>
            <div className="col-md-7">
              <p>
                See where they are It’s helpful to be able to find your child
                when they’re on the go. Create a safe zone for tracking kids and
                get alerts when they break the planned zone.
              </p>
            </div>
          </div>
          <div className="centerRow row" style={{ marginTop: "28px" }}>
            <div className="col-md-1">
              <img src={phoneSmartphone} />
            </div>
            <div className="col-md-7">
              <p>
                Manage their device Whether it’s time to go play outside, have
                dinner, or just spend time together, you can set maximum usage
                time for the given day or to prevent access to certain
                categories during school or bed time.
              </p>
            </div>
          </div>
          <div className="centerRow row" style={{ marginTop: "28px" }}>
            <div className="col-md-1">
              <img src={confirm} />
            </div>
            <div className="col-md-7">
              <p>
                Balance privacy Keepers is the only parental control app that
                prioritizes your kid’s privacy by only displaying specific
                messages that have been identified as potentially dangerous.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fluid"
          style={{
            backgroundImage: `url(${signup})`,
            marginTop: "67px",
          }}
        >
          <div className="centerRow row">
            <div
              className="col-auto col-lg-4 col-md-4 col-md-5 col-sm-6 col-xl-3"
              style={{ marginTop: "79px", marginBottom: "79px" }}
            >
              <h3 style={{ color: "#a9a9a9" }}>
                SIGN UP NOW FOR A <br />
                FREE TRIAL CCOUNT:
              </h3>
              <input
                type="text"
                className="form-control transparentButton"
                placeholder="Placeholder text"
                style={{ marginTop: "25px", maxWidth: "268px" }}
              />
              <input
                type="text"
                className="form-control transparentButton"
                placeholder="Placeholder text"
                style={{ marginTop: "25px", maxWidth: "268px" }}
              />
              <input
                type="text"
                className="form-control transparentButton"
                placeholder="Placeholder text"
                style={{ marginTop: "25px", maxWidth: "268px" }}
              />
              <button
                type="button"
                className="btn"
                style={{
                  marginTop: "18px",
                  maxWidth: "268px",
                  width: "100%",
                  background: "#26b7c0",
                  borderRadius: "7px",
                  border: "3px solid #26b7c0",
                }}
              >
                <span>
                  <b>SIGN UP NOW</b>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Bootstrap core JavaScript
    ================================================== */}
      {/* Placed at the end of the document so the pages load faster */}
      <footer>
        <div className="container" style={{ marginTop: "56px" }}>
          <div className="row" style={{ paddingLeft: 0 }}>
            <div className="col-md-4 col-md-5">
              <h3 style={{ fontFamily: '"Barlow Semi Condensed", sans-serif' }}>
                <b>Global Partnership</b>
              </h3>
            </div>
          </div>
          <div className="centerRow row">
            <div className="col-auto col-md-3">
              <a href="#">
                {" "}
                <img src={horizon} alt="" style={{ width: "100%" }} />{" "}
              </a>
            </div>
            <div className="col-auto col-md-3 col-sm-3 col-xl-2">
              <a href="#">
                {" "}
                <img
                  className="w-100"
                  src={iia}
                  alt=""
                  style={{ height: "80px", width: "268px" }}
                />{" "}
              </a>
            </div>
            <div className="col-auto col-md-2 col-sm-3">
              <a href="#">
                {" "}
                <img
                  className="w-100"
                  src={google}
                  alt=""
                  style={{ width: "126px", height: "80px" }}
                />{" "}
              </a>
            </div>
            <div className="col-auto col-md-2 col-sm-3">
              <a href="#">
                {" "}
                <img
                  className="w-100"
                  src={bezeq}
                  alt=""
                  style={{ height: "80px" }}
                />{" "}
              </a>
            </div>
            <div className="col-auto col-md-2 col-sm-3">
              <a href="#">
                {" "}
                <img
                  className="w-100"
                  src={vodafone}
                  alt=""
                  style={{ height: "80px" }}
                />{" "}
              </a>
            </div>
            <div className="col-auto col-md-2 col-sm-3">
              <a href="#">
                {" "}
                <img
                  className="w-100"
                  src={rekuten}
                  alt=""
                  style={{ height: "80px" }}
                />{" "}
              </a>
            </div>
            <div className="col-auto col-md-2 col-sm-3">
              <a href="#">
                {" "}
                <img
                  className="w-100"
                  src={allot}
                  alt=""
                  style={{ height: "80px" }}
                />{" "}
              </a>
            </div>
            <div className="col-auto col-md-2 col-sm-3">
              <a href="#">
                {" "}
                <img
                  className="w-100"
                  src={deloitte}
                  alt=""
                  style={{ height: "80px" }}
                />{" "}
              </a>
            </div>
            <div className="col-auto col-md-2 col-sm-3">
              <a href="#">
                {" "}
                <img
                  className="w-100"
                  src={hut}
                  alt=""
                  style={{ height: "80px" }}
                />{" "}
              </a>
            </div>
            <div className="col-auto col-md-2 col-sm-3">
              <a href="#">
                {" "}
                <img
                  className="w-100"
                  src={aws}
                  alt=""
                  style={{ height: "80px" }}
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
