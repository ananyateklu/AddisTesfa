import React, { Component } from "react";
import logo from "../assets/addistesfalogo.png";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./components.css";

export default class Header extends Component {
  state = {
    mobile: true,
  };

  expandNav() {
    this.setState({ mobile: !this.state.mobile });
  }

  render() {
    const tab_class = this.state.mobile ? "none" : "block";

    return (
      <div className="Header">
        <header>
          <img className="Logo" src={logo} alt="logo" />
          <div className="Burger">
            <GiHamburgerMenu onClick={() => this.expandNav()} className="Bur" />
          </div>
          <div className="Burgerstuff" style={{ display: tab_class }}>
            <Link className="link" to="/">
              HOME
            </Link>
            <Link className="link" to="/aboutus">
              ABOUT US
            </Link>
            <Link className="link" to="/contactus">
              CONTACT US
            </Link>
            <Link className="link" to="/members">
              MEMBERS
            </Link>
            <Link className="link" to="/updates">
              UPDATES
            </Link>
            <br />
            <div className="DonateButtonM">
              <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
              >
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="8EUBT5TXF968L"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </div>
          <div className="Links">
            <NavLink
              activeStyle={{
                color: "#66260b",
                backgroundColor: "transparent",
                padding: "2px",
                marginRight: "15px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid #66260b",
              }}
              exact
              to="/"
              className="linkoff"
            >
              HOME
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#66260b",
                backgroundColor: "transparent",
                padding: "2px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid #66260b",
              }}
              to="/aboutus"
              className="linkoff"
            >
              ABOUT US
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#66260b",
                backgroundColor: "transparent",
                padding: "2px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid #66260b",
              }}
              to="/contactus"
              className="linkoff"
            >
              CONTACT US
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#66260b",
                backgroundColor: "transparent",
                padding: "2px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid #66260b",
              }}
              to="/members"
              className="linkoff"
            >
              MEMBERS
            </NavLink>
            <NavLink
              activeStyle={{
                color: "#66260b",
                backgroundColor: "transparent",
                padding: "2px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid #66260b",
              }}
              to="/updates"
              className="linkoff"
            >
              UPDATES
            </NavLink>
          </div>
          <div className="DonateButtonD">
          <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
              >
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="8EUBT5TXF968L"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
          </div>
        </header>
      </div>
    );
  }
}
