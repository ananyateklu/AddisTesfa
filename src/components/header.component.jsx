import React, { Component } from "react";
import logo from "../assets/addistesfalogo.png";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./components.css";
import Licence1 from "../assets/Licence1.png";
export default class header extends Component {
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
            <br />
            <div className="DonateButtonM">
              <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
              >
                <input
                  type="hidden"
                  name="business"
                  value="donations@kcparkfriends.org"
                />
                <input type="hidden" name="no_recurring" value="0" />
                <input
                  type="hidden"
                  name="item_name"
                  value="Friends of the Park"
                />
                <input
                  type="hidden"
                  name="item_number"
                  value="Fall Cleanup Campaign"
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="image"
                  name="submit"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  alt="Donate"
                />
                <img
                  alt=""
                  width="1"
                  height="1"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                />
              </form>
            </div>
          </div>
          <div className="Links">
            <NavLink
              activeStyle={{
                color: "brown",
                backgroundColor: "transparent",
                padding: "2px",
                marginRight: "15px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid brown",
              }}
              exact
              to="/"
              className="linkoff"
            >
              HOME
            </NavLink>
            <NavLink
              activeStyle={{
                color: "brown",
                backgroundColor: "transparent",
                padding: "2px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid brown",
              }}
              to="/aboutus"
              className="linkoff"
            >
              ABOUT US
            </NavLink>
            <NavLink
              activeStyle={{
                color: "brown",
                backgroundColor: "transparent",
                padding: "2px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid brown",
              }}
              to="/contactus"
              className="linkoff"
            >
              CONTACT US
            </NavLink>
            <NavLink
              activeStyle={{
                color: "brown",
                backgroundColor: "transparent",
                padding: "2px",
                paddingBottom: "8px",
                borderBottom: "2.5px solid brown",
              }}
              to="/members"
              className="linkoff"
            >
              MEMBERS
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
                  name="business"
                  value="donations@kcparkfriends.org"
                />
                <input type="hidden" name="no_recurring" value="0" />
                <input
                  type="hidden"
                  name="item_name"
                  value="Friends of the Park"
                />
                <input
                  type="hidden"
                  name="item_number"
                  value="Fall Cleanup Campaign"
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="image"
                  name="submit"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  alt="Donate"
                />
                <img
                  alt=""
                  width="1"
                  height="1"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                />
              </form>
            </div>
        </header>
      </div>
    );
  }
}
