import React, { Component } from "react";
import backPic from "../assets/Renaissance dam.jpeg";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    this.counterFunction();
    this.reloadhome();
  }
  reloadhome() {
    if (!window.location.hash) {
      window.location = window.location + "#home";
      window.location.reload();
    }
  }

  counterFunction() {
    var counter = 1;
    setInterval(function () {
      if (document.getElementById("radio" + counter) != null) {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if (counter > 4) {
          counter = 1;
        }
      }
    }, 7000);
  }

  render() {
    return (
      <div className="imgbody">
        <img className="BackPic" src={backPic} alt="backPic" />
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            <div className="slide first">
              <div className="picicon">
                <h3>አላማችን</h3>
                <h6>
                  በቤተሰብ ፤ በማህበረብ በሀገር ላይ መልካሞ ተፅዕኖ የሚፈጥሩ ወንድሞችን በማፍራት የወገን
                  አለኝታነትን በተግባር ማረጋገጥ
                </h6>
              </div>
              <img className="slideimg" src={backPic} alt="pic1" />
            </div>
            <div className="slide">
              <div className="picicon">
                <h3>OUR VISION</h3>
                <h6>
                  To create a Strong and Dynamic unity among Brothers who are
                  willing to bring about a Positive Impact on Families,
                  Communities and Nations at Large.
                </h6>
              </div>
              <img className="slideimg" src={backPic} alt="pic2" />
            </div>
            <div className="slide">
              <div className="picicon">
                <h3>አላማችን</h3>
                <h6>
                  በቤተሰብ ፤ በማህበረብ በሀገር ላይ መልካሞ ተፅዕኖ የሚፈጥሩ ወንድሞችን በማፍራት የወገን
                  አለኝታነትን በተግባር ማረጋገጥ
                </h6>
              </div>
              <img className="slideimg" src={backPic} alt="pic3" />
            </div>
            <div className="slide">
              <div className="picicon">
                <h3>OUR VISION</h3>
                <h6>
                  To create a Strong and Dynamic unity among Brothers who are
                  willing to bring about a Positive Impact on Families,
                  Communities and Nations at Large.
                </h6>
              </div>
              <img className="slideimg" src={backPic} alt="pic4" />
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>

            <div className="navigation-manual">
              <label for="radio1" className="manual-btn"></label>
              <label for="radio2" className="manual-btn"></label>
              <label for="radio3" className="manual-btn"></label>
              <label for="radio4" className="manual-btn"></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
