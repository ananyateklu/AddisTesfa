import React, { Component } from "react";
import Board1 from "../assets/board1.png";
import Board2 from "../assets/board2.png";
import Board3 from "../assets/board3.png";
import Board4 from "../assets/board4.png";
import Board5 from "../assets/board5.png";
import Board6 from "../assets/board6.png";
import Board7 from "../assets/board7.png";
import Board8 from "../assets/board8.png";
import Board9 from "../assets/board9.png";
import Board10 from "../assets/board10.png";
import Board11 from "../assets/board11.png";
import Board12 from "../assets/board12.png";
import Board13 from "../assets/board13.png";
import Board14 from "../assets/board14.png";
import Board15 from "../assets/board15.png";
import Board16 from "../assets/board16.png";
import Board17 from "../assets/board17.png";
import Locationpic from "../assets/memberstop.jpg";
export default class members extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Location">
        <div className="Locationall">
          <div className="Locationpic">
            <img src={Locationpic} alt="location" />
          </div>

          <h3>Board of Directors</h3>

          <div className="Locationpics">
            <div className="location1">
              <div className="Locationpic1">
                <img alt="location-pic" src={Board1} />
                <h4>Ashenafi Gebe</h4>
                <h5>Chairman</h5>
              </div>
              <div className="Locationpic2">
                <img alt="location-pic" src={Board2} />
                <h4>Assefa Adugna Jale</h4>
                <h5>Chief Financial Officer (CFO)</h5>
              </div>{" "}
              <div className="Locationpic3">
                <img alt="location-pic" src={Board3} />
                <h4>Seyoum workneh</h4>
                <h5>Secretary</h5>
              </div>{" "}
              <div className="Locationpic4">
                <img alt="location-pic" src={Board4} />
                <h4>Elias Tessema Eyasu</h4>
                <h5> Chief Risk Managment Offier (CRMO)</h5>
              </div>{" "}
              <div className="Locationpic5">
                <img alt="location-pic" src={Board5} />
                <h4>Dr. Girum Lema</h4>
                <h5> Chief Research & Developmnt Offier (CRMO)</h5>
              </div>
            </div>
          </div>

          <h3 className="BoardTitle">Founding Members</h3>
          <div className="Locationpics">
            <div className="location1">
              <div className="Locationpic1">
                <img alt="location-pic" src={Board1} />
                <h4>Ashenafi Gebe</h4>
              </div>
              <div className="Locationpic2">
                <img alt="location-pic" src={Board6} />
                <h4>Teshome Belayneh</h4>
              </div>{" "}
              <div className="Locationpic3">
                <img alt="location-pic" src={Board3} />
                <h4>Seyoum workneh</h4>
              </div>{" "}
              <div className="Locationpic4">
                <img alt="location-pic" src={Board4} />
                <h4>Elias Tessema Eyasu</h4>
              </div>{" "}
              <div className="Locationpic5">
                <img alt="location-pic" src={Board5} />
                <h4>Dr. Girum Lema</h4>
              </div>
            </div>
            <div className="location1">
              <div className="Locationpic1">
                <img alt="location-pic" src={Board7} />
                <h4>Admasu Shiawel</h4>
              </div>
              <div className="Locationpic2">
                <img alt="location-pic" src={Board8} />
                <h4>Endale Beyene</h4>
              </div>{" "}
              <div className="Locationpic3">
                <img alt="location-pic" src={Board9} />
                <h4>Getachew Teklu</h4>
              </div>{" "}
              <div className="Locationpic4">
                <img alt="location-pic" src={Board10} />
                <h4>Marekegn Tamenut</h4>
              </div>{" "}
              <div className="Locationpic5">
                <img alt="location-pic" src={Board11} />
                <h4>Mulugeta Araya</h4>
              </div>
            </div>
            <div className="location1">
              <div className="Locationpic1">
                <img alt="location-pic" src={Board12} />
                <h4>Mulugeta Kelecha</h4>
              </div>
              <div className="Locationpic2">
                <img alt="location-pic" src={Board13} />
                <h4>Nigussie Fekadu</h4>
              </div>{" "}
              <div className="Locationpic3">
                <img alt="location-pic" src={Board14} />
                <h4>Shefa Mohammed Seid</h4>
              </div>{" "}
              <div className="Locationpic4">
                <img alt="location-pic" src={Board15} />
                <h4>Solomo Mola</h4>
              </div>{" "}
              <div className="Locationpic5">
                <img alt="location-pic" src={Board16} />
                <h4>Tseganew Yimer Yosef</h4>
              </div>
            </div>
            <div className="location1">
              <div className="Locationpic1">
                <img alt="location-pic" src={Board17} />
                <h4>Zeneb Assefa</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
