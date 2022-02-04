import React, { Component } from "react";
import Pic2 from "../assets/fasil.jpg";
import Slider from "./Slider";
import addistesfa from "../assets/addistesfa.png";
import Board1 from "../assets/board1.png";
import Board2 from "../assets/board2.png";
import Board3 from "../assets/board3.png";
import Board4 from "../assets/board4.png";
import Board5 from "../assets/board5.png";
import DivSlider from "./DivSlider";
import { DivSliderData } from "./DivSliderData";
import Licence1 from "../assets/Licence1.png";
import { NavLink, Link } from "react-router-dom";

export default class home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="Home">
        <Slider />
        <div className="Ourmission">
          <h3>About Addis Tesfa</h3>
          <h6>
            Addis Tesfa Brothers Unity: is a non-profit organization
            incorporated under the laws of the state of Minnesota. This
            organization has been created exclusively for purposes subsequent to
            section 501(c) (3) of the internal revenue code. The name Addis
            Tesfa, meaning, New Hope, in english, signifies and symbolizes the
            optimism we have to bring about a significant change in the life of
            our families, communities and society.
          </h6>
          <Link className="ApplyButton" to="/aboutus">
            Learn More
          </Link>
        </div>
        <div className="Homeservices">
          <img className="Homeskillpic" src={Pic2} alt="pic2" />
          <div className="Homeskilltext">
            <div className="flex-containerhome">
              <div className="flex1">
                <div className="flex1in">
                  <h3>ስለ አዲስ ተስፋ የወንድሞች ህብረት</h3>
                  <h6>
                    አዲስ ተስፋ የወንድሞች ህብረት በሚኒሶታ የትርፍ እልባ ድርጅት ማቋቋሚያ ህገ ደንብ መሰረት
                    ህጋዊ ፍቃድ በማግኘት የተቋቋመ ምግባረ ሠናይ ድርጅት ነው። የህብረቱም ዓላማና ተግባር በሀገር
                    ዉስጥ ገቢ መስሪያቤት ድንብ ቁጥር 501 ( ሲ ) ( 3 ) በሚፍቅደው መሰረት ለሚከናወን
                    ተግባር ብቻ የሚውል ይሆናል። ይህ ህብረት ከማንኛውም የዕምነት፤ የዘር፤ የቀለምና የፖለትካ
                    ልዩነት ገለልተኛ በመሆን የድርጅቱን ዓላማና ግብ ከሚደገፉ ግለሰቦችም ሆነ ድጋፍ ከሚስጡ ተቋማት
                    በሚገኝ ገቢ የሚንቀሳቀስ ግብረሰናይ ድርጅት እንጅ ለትርፍ የሚሰራ ተቋም እይደለም ። ይህ
                    የወንድሞች ህብረት ለተቋቋመበት ዓላማና የስራ ክንዋኔ የሚያገለግል የመተዳደሪያ ደንብና ግልፅ
                    የሆነ የራሱ ራዕይና ተልዕኮ ያለው ማህበራዊ ተቋም ነው። ይህንንም ተቋም ለመምራት ብቃት ያላቸው
                    አምስት አባላት ያሉት የዳይሬክተሮች ቦርድ ያለው ሲሆን ይህም ለማንኛውም የህብረቱ የስራ
                    እንቅስቃሴ ስኬትና ውድቀት ሙሉ ተጠያቂነትና ሃላፊነትን የሚውሰድ እካል ያለው መሆኑን
                    ያረጋግጣል። አዲስ ተስፋ የወንድሞች ህብረት ስሙ እንደሚገልፀው ወንድሞች በህብረት ሆነው ሲሰሩ
                    በቤተሰብም ሆነ በማህበረሰብ ግልጋሎት ወስጥ ሊያበርክቱት የሚችሉት እስተዋፅዖ እጅግ ከፍተኛ
                    መሆኑን ነው :: ይህንን የወንድሞች ሃይል በተቀናጀና በተደራጀ መልክ በተቋማዊ እመራር ስር
                    በማስተባበር ተገቢውን እውቀትና ስልጠና በመስጠት ከማጀት እስከ አደባባይ ባለው መስክ
                    ሃላፊነታቸውን በሚገባ ሊወጡ የሚችሉ ወንድሞችን ማፍራት ይቻላል። ከዚህም በተጨማሪ በውጭም ሆነ
                    በሃገር ቤት ለሚክናወኑ ማህበራዊና ሃገራዊ ጉዳዮች ከፍተኛ እገዛን ሊያበረክቱ የሚችሉ የላቀ
                    ብቃት ያላቸውን ወንድሞች የማሰባሰቢያ ማዕከል እንደሚሆን ተስፋ አለን:: ያገሩን ሰርዶ ባገሩ
                    በሬ እንደሚባለው የራሳችንን ችግር በራሳችን ለመፍታትና ለወገንም ደራሽ ወገን መሆኑን በመገንዘብ
                    ለተተኪው ትውልድ እሻራ ጥሎ ለማልፍ ፍላጎት ባሳደሩና በቅን መንፈ በተነሳሱ በሚኒሶታ በሚገኙ
                    ኢትዮጵያውያንና ኤርትራውያን ወንድሞች እማካይነት የአዲስ ተስፋ ህብረት እንደ አውሮጳውያኑ
                    አቆጣጠር በ 2019 ጥር ወር ተመስርቷል :: በእኛ እምነት የዚህ ህብረት ምስረታ ዕውነተኛ
                    የወገንና የሃገር ፍቅር ስሜት በተግባር የሚለካበትን መልካም ዕድል የሚፈጥርና ብዙ በጎ
                    እድራጊዎችም ለዘመናት ያጡትን ተአማኒነት፤ግልፀኝነትና ህጋዊ ተጠያቂነት ያለው በአገር ልጆች
                    የሚመራ ተቋም የማግኘት የዘመናት ምኞትን የሚያሳካ መሆኑን እያበሰርን ይህም በብዙ ወገኖች
                    የሚደገፍና የሚጠናከር ስለመሆኑ ገና ከጅምሩ የተገኝው የወንድሞች ምስጋናና ቅቡልነት በቂ ምስክር
                    ነው ። ወገንንም ለመርዳት ሆነ ሃገርንም ለማልማት በተቋማዊ ብቃትና በንቁ ተሳትፎ በህብረት
                    ካልተንቀሳቀስን ውጤታማ ዜጎች እንደማንሆን በመገንዘብ ይህን ህብረት በመቀላቀልና በማገዝ ለወገን
                    ደራሽነታችንንና ለሀገር እልኝታነታችንን በተግባር በማስመስከር መጪው ዘመን ስለ ሃገራችን
                    እድገትና ብልፅግና የሰነቀውን ብሩህና አዲስ ተስፋ እውን ለማድረግ በህብረትና በቅንነት እንነሳ
                    ።
                  </h6>
                </div>
              </div>
              <div className="flex2">
                <div className="flex2in">
                  <img src={addistesfa} alt="Homepic" />
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="Boardof">
        <h3 className="BoardTitle">Board of Directors</h3>
          <div className="Boardpics">
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
          
          <Link className="ApplyButton" to="/members">
            Learn More
          </Link>
        </div>
      </div>
    );
  }
}
