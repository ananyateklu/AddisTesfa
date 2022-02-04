import React, { Component } from "react";
import Logo from "../assets/addistesfalogo.png";
import { Link } from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <div className="Footer">
        <img src={Logo} alt="Logo-white" />
        <div className="Flex-containerfooter">
          <div className="Flexfooter1">
            <h3 className="footerh3">Cell: (612) 597 3277</h3>
            <h3 className="footerh3">Email: contact@addistesfabu.org</h3>
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
            <a
              className="Footerbutton"
              href="https://drive.google.com/file/d/1GIHt1QLGl8RKLgSOyeDIg1rlJMD_f5hA/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              DONATE
            </a>
          </div>
        </div>
        <div className="Copyright">
          <h6>
            © 2022, Addis Tesfa Brothers Unity. All Rights Reserved. Powered by{" "}
            <a
              className="icons8"
              href="https://icons8.com"
              rel="noreferrer"
              target="_blank"
            >
              icons8
            </a>
          </h6>
        </div>
      </div>
    );
  }
}
