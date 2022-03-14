import React, { Component } from "react";
import Logo from "../assets/addistesfalogo.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/facebook.png";

export default class footer extends Component {
  render() {
    return (
      <div className="Footer">
        <img className="FooterLogo" src={Logo} alt="Logo-white" />
        <div className="Flex-containerfooter">
          <div className="Flexfooter1">
            <h3 className="footerh3">Cell: (612) 597 3277</h3>
            <h3 className="footerh3">Email: contact@addistesfabu.org</h3>
            <h3 className="footerh3"><a href="https://www.facebook.com/addistesfabrothers" alt="facebook"><img className="facebook" src={Facebook} alt="Logo-white" /></a> </h3>
          </div>
          <div className="Flexfooter2">
            <Link className="footerlinks" to="/">
              HOME
            </Link>
            <Link className="footerlinks" to="/aboutus">
              ABOUT US
            </Link>
            <Link className="footerlinks" to="/contactus">
              CONTACT US
            </Link>
            <Link className="footerlinks" to="/location">
              MEMBERS
            </Link>
            <br />
          </div>
        </div>
        <div className="Copyright">
          <h6>
            © 2022, Addis Tesfa Brothers Unity. All Rights Reserved. 
          </h6>
        </div>
      </div>
    );
  }
}
