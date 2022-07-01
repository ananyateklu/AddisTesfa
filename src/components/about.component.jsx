import React, { Component } from "react";
import Aboutpic from "../assets/abouteth.jpg";

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="About">
        <div className="Aboutpic">
          <img src={Aboutpic} alt="about" />
        </div>
        <div className="Abouttext">
          <div className="AboutContent">
            <h3 className="Title">OUR</h3>
            <h3 className="Title2"> VISION</h3>
            <h6>
              To create a strong and dynamic unity among brothers who are
              willing to bring about a positive impact on families, communities
              and nations at large.
            </h6>
            <div className="Titlediv">
              <h3 className="Title">ABOUT</h3>
              <h3 className="Title2"> ADDIS TESFA</h3>
            </div>
            <h6>
              Addis Tesfa Brothers Unity: is a non-profit organization
              incorporated under the laws of the state of Minnesota. This
              organization has been created exclusively for purposes subsequent
              to section 501(c) (3) of the internal revenue code. The name Addis
              Tesfa, meaning, New Hope, in english, signifies and symbolizes the
              optimism we have to bring about a significant change in the life
              of our families, communities and society.
            </h6>
            <h6>
              We believe that men would play their leadership roles and
              responsibilities in society if empowered with proper skills,
              training and knowledge. This idea was shared among an interested
              group of people who have the will to show their real concern and
              genuine love for others. This good will is the only driving force
              that led to the formation of Addis Tesfa Brothers Unity by
              concerned Ethiopian and Eritrean brothers residing in Minnesota.
              We have a brighter hope that such love in action will be supported
              and strengthened by many more others who have the will and courage
              to put their fingerprint as a change agent in the livelihood of
              our beloved people.
            </h6>
            <br />
            <br />
            <br />
            <br />
            <h3 className="Title">OUR MISSION</h3>{" "}
          </div>
          <ul>
            <li>
              To provide a holistic support and assistance for Addis Tesfa
              Brothers to carry out their vital duty and responsibility as
              leaders of their family and community. To accomplish our task in
              an organized and centralized manner, we hereby outlined areas of
              coverage to expand the scope and manner of our effort in the
              following areas as time and resources allow us:
            </li>
            <li>
              To Strengthen the Unity of our brothers by fostering a conducive
              platform in building a closer relationship among those who are
              willing to work together for a common goal
            </li>
            <li>
              Empowering Brothers with skills and knowledge required by
              providing the most advanced scientific methods and well researched
              findings.
            </li>
            <li>
              Encourage Mentorship to get the proper guidance and follow ups
              from elders and highly experienced individuals in transforming
              knowledge and skills for the second generation.
            </li>
            <li>
              Encourage Voluntarism in supporting and promoting free services
              inside and around families, communities and also abroad.
            </li>
            <li>
              To Create a sustainable support system through sharing and
              exchanging ideas and resources to our communities
            </li>
            <li>
              To Empower Families raise children who care and contribute for
              their families and also the wellbeing of their community .for
              their families and also the wellbeing of their community.
            </li>
            <li>
              To Bridge the gap between the diaspora communities and their
              homeland through business,health issues,leadership,humanitarian
              aid, educational and intrapreneurship endeavors.
            </li>
            <li>
              Encourage Strong Participation in events and activities that
              promote the core values and assets of our communities.
            </li>
            <li>
              To Create a Resource Center that would give a wider opportunity to
              meet the various needs and wants of our community.
            </li>
            <li>
              To Bridge Generational and Cultural Gap between families and
              children.
            </li>
            <li>
              To help resolve marriage and family crises caused by deep rooted
              cultural differences and other socio economic situations.
            </li>
            <li>
              To Promote Public Awareness in addressing a variety of issues and
              challenges by organizing educational seminars, workshops and
              conferences.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
