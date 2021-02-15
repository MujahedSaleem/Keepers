import React, { Component } from "react";
import "./App.css";
import white from "./assets/white.svg";
import Vodafone from "./assets/Vodafone.svg";
import Group3 from "./assets/Group3.png";
import plus from "./assets/plus.svg";
import whitecopy2 from "./assets/whitecopy2.svg";
import whitecopy3 from "./assets/whitecopy3.svg";
import iPhone123 from "./assets/iPhone123.png";
import iPhone121 from "./assets/iPhone121.png";
import iPhone122 from "./assets/iPhone122.png";
import iPhone124 from "./assets/iPhone124.png";
import iPhone125 from "./assets/iPhone125.png";
import woman from "./assets/woman.png";
import rekuten from "./assets/rekuten@2x.png";
import phoneSmartphone from "./assets/phoneSmartphone.svg";
import locationPin from "./assets/locationPin.svg";
import iia from "./assets/iia@2x.png";
import hut from "./assets/hut@2x.png";
import horizon from "./assets/horizon@2x.png";
import horizontalDials from "./assets/horizontalDials.svg";
import googlePlay from "./assets/googlePlay.png";
import google from "./assets/google@2x.png";
import deloitte from "./assets/deloitte@2x.png";
import clock from "./assets/clock.svg";
import confirm from "./assets/confirm.svg";
import bezeq from "./assets/bezeq@2x.png";
import aws from "./assets/aws@2x.png";
import appstore from "./assets/appstore.png";
import allot from "./assets/allot@2x.png";
import alert from "./assets/alert.svg";
import { Carousel } from "react-bootstrap";
import Group3Mobile from "./assets/Group3MobileS.png";
import vodafone from "./assets/vodafone@2x.png";

class App extends Component {
  queries = {
    xs: "(max-width: 320px)", //query for xs devices
    sm: "(max-width: 720px)",
    md: "(max-width: 1024px)",
  };
  activemobile: boolean = false;
  activeCarousel: boolean = false;
  mobile = matchMedia("(max-width:570px)");
  md = matchMedia(this.queries.sm);

  render() {
    this.activeCarousel = this.md.matches;
    this.md.onchange = (e) => {
      if (e.matches) {
        this.activeCarousel = this.md.matches;
      } else {
        this.activeCarousel = this.md.matches;
      }
      console.log(e.media);
      this.setState({});
    };
    this.activemobile = this.mobile.matches;
    this.mobile.onchange = (e) => {
      if (e.matches) {
        this.activemobile = true;
      } else {
        this.activemobile = false;
      }
      this.setState({});
    };
    return (
      <>
        {this.activemobile && (
          <nav
            className="navbar  navbar-light bg-light"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="customCont navbar-brand">
              <div>
                <img
                  className="navImage"
                  src={white}
                  style={{ marginRight: "16px" }}
                />
                <img className="navImage" src={Vodafone} />
              </div>
            </div>
            <a className="btn custombuttonT" type="submit" href="#signUp">
              <b>Start the trial</b>
            </a>
          </nav>
        )}{" "}
        <div className="container">
          {!this.activemobile && (
            <nav
              className="navbar  navbar-light "
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="customCont navbar-brand">
                <div>
                  <img
                    className="navImage"
                    src={white}
                    style={{ marginRight: "16px" }}
                  />
                  <img className="navImage" src={Vodafone} />
                </div>
              </div>
              <a
                className="btn"
                type="submit"
                style={{
                  width: "9rem",
                  backgroundColor: "rgb(56,201,213)",
                  fontFamily: '"Barlow Semi Condensed", sans-serif',
                  fontSize: "20px",
                }}
                href="#signUp"
              >
                <b>Start the trial</b>
              </a>
            </nav>
          )}{" "}
          <section>
            <div className="row">
              <div className="col-md-6 p-0">
                <img
                  src={this.activemobile ? Group3Mobile : Group3}
                  className="MainImageCustm"
                />
              </div>
              <div className="col-md-5 paddingMainText">
                <h3 className="fontscustom">
                  <b>
                    DISCOVER KEEPERS: <br />
                  </b>
                  <h4 style={{ marginTop: "10px" }}>
                    {" "}
                    JOIN US FOR BETA-TESTING
                  </h4>
                  <br></br>
                </h3>
                <p className="wearekeep">
                  We are Keepers Child Safety. A specialist Israeli cyber tech
                  company developing AI and Machine Learning technology to
                  PROTECT kids from cyberbullying, harassment and toxic content.
                  <br />
                  <br />
                  In cooperation with Drei we've created an exclusive version of
                  the Keepers Child Safety App specifically for families in
                  Austria. Protect your child with Keepers - Join the
                  Beta-Testing Phase!"
                </p>
                <div>
                  <a
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
                      marginTop: "20px",
                    }}
                    href="#signUp"
                  >
                    <span
                      style={{
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
                          fontFamily: "Barlow SemiBold",
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        &nbsp;FREE TRIAL ACCOUNT
                      </span>
                    </b>
                  </a>
                </div>{" "}
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="centerRow row">
                <div
                  style={{
                    marginTop: !this.activemobile ? "10px" : "100px",
                  }}
                  className="col-md-7"
                >
                  <h3>
                    <b>Keepers </b> {this.activemobile ? <br></br> : ""}Child
                    Safety App
                  </h3>
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
                    real-time without invading your children's privacy by
                    manually scrolling through their chat history! This allows
                    you to act quickly &amp; prevent them from harm.
                    <br />
                    <br />
                    &nbsp;In addition Keepers offers important further child
                    protection features to help you monitor{" "}
                    <span style={{ color: "rgb(0,129,140)" }}>
                      {" "}
                      &amp; control your children's experience in the digital
                      world.
                    </span>
                    The Keepers Child Safety App is GDPR-compliant with
                    end-to-end encryption. We are limiting the collection and
                    usage of any personal data to no other purpose than
                    protecting children in the digital world.
                  </p>
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
                  <img src={plus} className="sizePlus" />
                  <img src={whitecopy2} style={{ marginLeft: "12px" }} />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container" style={{marginTop:this.activemobile ?"10px":"0px"}}>
              <div className="centerRow row spaceImage">
                {!this.activeCarousel && (
                  <>
                    {" "}
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
                  </>
                )}
                {this.activeCarousel && (
                  <Carousel slide={false} fade={false}>
                    <Carousel.Item>
                      <img src={iPhone123} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={iPhone121} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={iPhone125} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={iPhone122} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={iPhone124} />
                    </Carousel.Item>
                  </Carousel>
                )}
              </div>
              <div className="CustomT arrow marginCusomLG marginForTheLast row">
                <div className="col-lg-4 col-md-6">
                  <div className="bottom-arrow text-xl-nowrap text-md-nowrap text-lg-nowrap text-sm-nowrap">
                    <p>
                      "For the last year the Keepers team and my team here at
                      Drei worked closely together, fueled by a strong sense of
                      purpose, to create an app that truly enables parents to
                      support their children when they learn how to take their
                      first steps in the digital world.”
                      {!this.activemobile ? (
                        <>
                          <br></br>
                        </>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <div className="CustomBoxLen row">
                    <img
                      src={Vodafone}
                      style={{
                        width: this.activemobile ? "28px" : "40px",
                        height: "40px",
                      }}
                    />
                    <p className="CustomLength customeLength">
                      <b>Barbara Haiden</b>,<br />
                      &nbsp;Innovation Manager &amp; Product Owner, Drei
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="bottom-arrow">
                    <p>
                      "For the last year the Keepers team and my team here at
                      Drei worked closely together, fueled by a strong sense of
                      purpose, to create an app that truly enables parents to
                      support their children when they learn how to take their
                      first steps in the digital world.”
                      {!this.activemobile ? (
                        <>
                          <br></br>
                        </>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <div className="CustomBoxLen row">
                    <img
                      src={Vodafone}
                      style={{
                        width: this.activemobile ? "28px" : "40px",
                        height: "40px",
                      }}
                    />
                    <p style={{ lineHeight: "15px" }}>
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
                      Barbara Haiden and Christian Haspl for this hugely
                      important and exciting partnership launch in Austria. We
                      know that with your support, together we can help protect
                      kids as they find their independence in the digital world.
                    </p>
                  </div>
                  <div className="CustomBoxLen row xo">
                    <img
                      src={whitecopy3}
                      style={{
                        width: this.activemobile ? "21px" : "28px",
                        height: "40px",
                      }}
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
            <div
              className="container"
              style={{ marginTop: this.activemobile ? "40px" : "77px" }}
            >
              <div className="centerRow row">
                <div style={{ maxWidth: "680px" }} className="col-md-9">
                  {this.activemobile ? (
                    <h5>
                      <b>
                        WE ARE ASKING ALL DREI EMPLOYEES TO
                        <br /> DOWNLOAD OUR NEW APP TODAY AND JOIN<br></br> OUR
                        BETA TEST
                      </b>
                    </h5>
                  ) : (
                    <h3 className="mainCOnfig">
                      WE ARE ASKING ALL DREI EMPLOYEES TO <br />
                      <b>DOWNLOAD OUR NEW APP TODAY AND JOIN OUR BETA TEST</b>
                    </h3>
                  )}

                  <p
                    style={{
                      marginTop: "23px",
                      fontSize: "17px",
                      fontFamily: '"Barlow Semi Condensed", sans-serif',
                    }}
                  >
                    Calling all Drei employees with children aged 6-14.
                    <br />
                    To participate in the Beta-Test, please follow this
                    instruction:
                    <br /> 1) Register for a free Trial Account
                    <br /> 2) Download the Keepers Child Safety App on your
                    device and follow the install-process.
                    <br /> 3) Once you have created a parent account, you will
                    be asked to share a link with your child's device. Please
                    open the link on your child's device and finish the
                    install-process.
                    <br></br>
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
                    Once the app is downloaded on your device, please follow the
                    sign up instructions. After creating an account on your
                    device you will be asked to share the app with you child's
                    device which will seamlessly link the accounts. Make sure to
                    fill in your details in the box below for free access to
                    your premium account!.
                  </p>
                  <small>
                    Note: You will see a payment screen for testing reasons,
                    however, you will not be charged.
                  </small>
                </div>
              </div>
            </div>
          </section>
          <section id="signUp">
            <div className="container-fluid signUpImage">
              <div className="centerRow row">
                <div
                  className="col-auto col-lg-4 col-md-4 col-md-5 col-sm-6 col-xl-3"
                  style={{ marginTop: "70px", marginBottom: "79px" }}
                >
                  <h3 style={{ color: "#a9a9a9", fontSize: "1.5rem" }}>
                    SIGN UP NOW FOR A <br />
                    FREE TRIAL ACCOUNT:
                  </h3>
                  <input
                    type="text"
                    className="form-control transparentButton"
                    placeholder="Your Name"
                    style={{ marginTop: "25px", maxWidth: "268px" }}
                  />
                  <input
                    type="text"
                    className="form-control transparentButton"
                    placeholder="Email"
                    style={{ marginTop: "25px", maxWidth: "268px" }}
                  />
                  <input
                    type="text"
                    className="form-control transparentButton"
                    placeholder="Phone Number"
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
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      style={{ color: "white", fontSize: "0.58rem" }}
                    >
                      I agree to Keepers{" "}
                      <a href="#">Privacy Terms & Conditions</a> and allow
                      Keepers to contact me for marketing-related purposes.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container" style={{ marginTop: "64px" }}>
              <div className="centerRow row" style={{ alignItems: "end" }}>
                <div
                  className="col-12 col-md-5 col-sm-8 col-xl-4 flexWoman"
                  style={{ padding: "0px" }}
                >
                  <img
                    className="w-100"
                    src={woman}
                    alt=""
                    style={{ height: "241px", maxWidth: "300px" }}
                  />{" "}
                </div>
                <div
                  className="col-md-7 customHeight"
                  style={{
                    background: "rgb(244,244,244)",
                    maxWidth: this.activemobile ? "300px" : "100%",
                  }}
                >
                  <h3 style={{ maxHeight: "127px" }}>
                    <b></b>
                  </h3>
                  <h3 style={{ maxHeight: "127px" }}>
                    <p>
                      <b>FEEDBACK </b>LOOP
                    </p>
                  </h3>
                  <p style={{ fontSize: "16px" }}>
                    We are inviting you to participate in our <b>focus group</b>{" "}
                    meeting via Teams <br></br>(max. 5 persons/group) to hear
                    your feedback, thoughts and ideas on the Keepers App. Please
                    click here to choose a time slot. <br />
                    <br />
                    <span style={{ fontSize: "0.94rem" }}>
                      {" "}
                      For any enquiries, feedback or bug reports please contact
                      Barbara Haiden at{" "}
                      <a href="mailto: family@drei.com" target="_blank">
                        family@drei.com.{" "}
                      </a>
                      For any technical questions feel free to contact us at
                      &nbsp;
                      <a
                        href="mailto: support@keeperschildsafety.net"
                        target="_blank"
                      >
                        support@keeperschildsafety.net
                      </a>
                    </span>
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
                <div className="col-md-1 col-2">
                  <img src={alert} className="imageSecSize" />
                </div>
                <div className="col-md-7 col-10">
                  <p>
                    Suspicious text detection, auto-monitoring and reporting of
                    any suspicious texts. Detect risky content from incoming /
                    outgoing texts on social media (WhatsApp, Telegram, Viber,
                    Instagram, Snapchat, Line, Kik, TikTok, Discord, Vkontakte).{" "}
                  </p>
                </div>
              </div>
              <div className="centerRow row" style={{ marginTop: "28px" }}>
                <div className="col-md-1 col-2">
                  <img src={horizontalDials} className="imageSecSize" />
                </div>
                <div className="col-md-7 col-10">
                  <p>
                    Website filter to shield kids from porn, gamble or other
                    threatening site track chilren’s browsing history. enter the
                    categories such as gambling and pornography are blocked
                    automatically.
                  </p>
                </div>
              </div>
              <div className="centerRow row" style={{ marginTop: "28px" }}>
                <div className="col-md-1 col-2">
                  <img src={clock} className="imageSecSize" />
                </div>
                <div className="col-md-7 col-10">
                  <p>
                    Screen time schedule It’s up to decide the right amount of
                    screen time for your child. Help your child make healthy
                    decisions about how they can utilize their time on the
                    mobile phone. You can see daily , weekly or monthly reports.
                  </p>
                </div>
              </div>
              <div className="centerRow row" style={{ marginTop: "28px" }}>
                <div className="col-md-1 col-2">
                  <img src={locationPin} className="imageSecSize" />
                </div>
                <div className="col-md-7 col-10">
                  <p>
                    See where they are It’s helpful to be able to find your
                    child when they’re on the go. Create a safe zone for
                    tracking kids and get alerts when they break the planned
                    zone.
                  </p>
                </div>
              </div>
              <div className="centerRow row" style={{ marginTop: "28px" }}>
                <div className="col-md-1 col-2">
                  <img src={phoneSmartphone} className="imageSecSize" />
                </div>
                <div className="col-md-7 col-10">
                  <p>
                    Manage their device Whether it’s time to go play outside,
                    have dinner, or just spend time together, you can set
                    maximum usage time for the given day or to prevent access to
                    certain categories during school or bed time.
                  </p>
                </div>
              </div>
              <div className="centerRow row" style={{ marginTop: "28px" }}>
                <div className="col-md-1 col-2">
                  <img src={confirm} className="imageSecSize" />
                </div>
                <div className="col-md-7 col-10">
                  <p>
                    Balance privacy Keepers is the only parental control app
                    that prioritizes your kid’s privacy by only displaying
                    specific messages that have been identified as potentially
                    dangerous.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container-fluid signUpImage">
              <div className="centerRow row">
                <div
                  className="col-auto col-lg-4 col-md-4 col-md-5 col-sm-6 col-xl-3"
                  style={{ marginTop: "70px", marginBottom: "79px" }}
                >
                  <h3 style={{ color: "#a9a9a9", fontSize: "1.5rem" }}>
                    SIGN UP NOW FOR A <br />
                    FREE TRIAL ACCOUNT:
                  </h3>
                  <input
                    type="text"
                    className="form-control transparentButton"
                    placeholder="Your Name"
                    style={{ marginTop: "25px", maxWidth: "268px" }}
                  />
                  <input
                    type="text"
                    className="form-control transparentButton"
                    placeholder="Email"
                    style={{ marginTop: "25px", maxWidth: "268px" }}
                  />
                  <input
                    type="text"
                    className="form-control transparentButton"
                    placeholder="Phone Number"
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

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      style={{ color: "white", fontSize: "0.58rem" }}
                    >
                      I agree to Keepers{" "}
                      <a href="#">Privacy Terms & Conditions</a> and allow
                      Keepers to contact me for marketing-related purposes.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Bootstrap core JavaScript
    ================================================== */}
          {/* Placed at the end of the document so the pages load faster */}
          <footer>
            <div className="container">
              <div
                className="row"
                style={{ paddingTop: "56px", paddingLeft: "3vw" }}
              >
                <div className="col-auto">
                  <h3
                    style={{
                      fontFamily: '"Barlow Semi Condensed", sans-serif',
                    }}
                  >
                    <b>Global Partnerships</b>
                  </h3>
                </div>
              </div>
              <div className="row" style={{ paddingLeft: "3vw" }}>
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
                      src={iia}
                      alt=""
                      style={{ height: "80px", maxWidth: "268px" }}
                    />{" "}
                  </a>
                </div>
                <div className="col-auto col-md-2 col-sm-3">
                  <a href="#">
                    {" "}
                    <img
                      src={google}
                      alt=""
                      style={{ maxWidth: "126px", height: "80px" }}
                    />{" "}
                  </a>
                </div>
                <div className="col-auto col-md-2 col-sm-3">
                  <a href="#">
                    {" "}
                    <img src={bezeq} alt="" style={{ height: "80px" }} />{" "}
                  </a>
                </div>
                <div className="col-auto col-md-2 col-sm-3">
                  <a href="#">
                    {" "}
                    <img
                      src={vodafone}
                      alt=""
                      style={{ height: "80px" }}
                    />{" "}
                  </a>
                </div>
              </div>
              <div className="centerRow row">
                <div className="col-auto col-md-2 col-sm-3">
                  <a href="#">
                    {" "}
                    <img src={rekuten} alt="" style={{ height: "80px" }} />{" "}
                  </a>
                </div>
                <div className="col-auto col-md-2 col-sm-3">
                  <a href="#">
                    {" "}
                    <img src={allot} alt="" style={{ height: "80px" }} />{" "}
                  </a>
                </div>
                <div className="col-auto col-md-2 col-sm-3">
                  <a href="#">
                    {" "}
                    <img
                      src={deloitte}
                      alt=""
                      style={{ height: "80px" }}
                    />{" "}
                  </a>
                </div>
                <div className="col-auto col-md-2 col-sm-3">
                  <a href="#">
                    {" "}
                    <img src={hut} alt="" style={{ height: "80px" }} />{" "}
                  </a>
                </div>
                <div className="col-auto col-md-2 col-sm-3">
                  <a href="#">
                    {" "}
                    <img src={aws} alt="" style={{ height: "80px" }} />{" "}
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default App;
