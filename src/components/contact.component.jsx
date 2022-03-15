import React, { Component } from "react";
import Contactback from "../assets/contactback.jpg";
import Gmap from "./googlemaps.component";
import Gmap2 from "./googlemaps2.component";
import emailjs from "emailjs-com";

class contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  //sendEmail creates a call to email js to use it for send information straight to email
  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          window.location.reload();
        }
      );
  }

  render() {
    return (
      <div className="Contact">
        <div className="Contactpic">
          <img src={Contactback} alt="Contact" />
        </div>
        <div className="Contacttitle">
          <h3>CONTACT US</h3>
          {/* <hr /> */}
          <div className="Contactinfo">
            <img
              alt="contactpic1"
              src="https://img.icons8.com/dusk/100/000000/phone.png"
            />
            <h4>Phone</h4>
            <h6>(612) 597 3277</h6>
          </div>
          <div className="Contactinfo">
            <img
              alt="contactpic2"
              src="https://img.icons8.com/dusk/100/000000/email.png"
            />
            <h4>Email</h4>
            <h6>contact@addistesfabu.org</h6>
          </div>
        </div>
        <div className="Contacttext">
          <div className="Contactinput">
            <form onSubmit={this.sendEmail}>
              <div className="Nameinput">
                <h4>Name</h4>
                <input
                  className="inputs"
                  type="text"
                  name="Name"
                  required
                ></input>
              </div>
              <div className="Phoneinput">
                <h4>Phone</h4>
                <input
                  className="inputs"
                  type="number"
                  name="Phone"
                  required
                ></input>
              </div>
              <div className="Emailinput">
                <h4>Email</h4>
                <input
                  className="inputs"
                  type="email"
                  name="Email"
                  required
                ></input>
              </div>
              <div className="Lastinput">
                <h4>Comments/Questions</h4>
                <textarea name="Comments" required></textarea>
                <div className="Submitbuttondiv">
                  <input
                    type="submit"
                    className="SubmitBtn"
                    value="Send"
                  ></input>
                </div>
              </div>
            </form>
          </div>
          <div className="Divmap">
            {/* Google maps */}
            <Gmap />
          </div>
          <div className="Divmapmobile">
            {/* Google maps */}
            <Gmap2 />
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
