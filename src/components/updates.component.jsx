import React, { Component } from "react";
import Updatespic from "../assets/NewUpdate.jpg";
import Board5 from "../assets/board5.png";
import Board11 from "../assets/board11.png";
import Quote from "../assets/quote.png";
import QuoteB from "../assets/quote3.jpg";

export default class Updates extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="Updates">
        <div className="Updatespic">
          <img src={Updatespic} alt="Updates" />
        </div>
        <div className="title">
          <h3>Updates</h3>
        </div>
        <div className="UpdatesContainer">
          <div className="UpdatesTop">
            <h6>ስላም ወገኖች</h6>
            <h6>
              ከብዙ ድካምና ጥርት በሗላ <u>የእዲስ ተስፋ ወንድሞች ህብረት</u> መመስረት እውን መሆንን እያበሰርን
              ይህን ግብረሰናይ ማህበር ለማቋቋም አነሳስቶ ለፍፃሜም እንዲበቃ የረዳንን የመልካም ነገር ሁሉ ምንጭ
              የሆነውን አምላክችንን እያመሰገንን ይህንንም ዓላማ ክግብ ለማድረስ በቅን መንፈስ በመነሳሳት ከፍተኛ
              ትብብር በማድረግ ዋጋ ለከፈሉት የህብረቱ መስራች አባላትም እጅግ የከበረ ምስጋና ይድረሳቸው:እንላለን::
              የአዲስ ተስፋ ወንድሞች ህብረት ዓላማና ግብ በመረዳት የራዕዩና የተልዕኮው ደጋፊና ተባባሪ ለመሆን
              ለምትፈልጉ ወገኖች ሁሉ የህብረቱን ድረገፅ በመጎብኘት አስፈላጊውን ዝርዝር መረጃ ማግኘት የምትችሉ መሆኑን
              በደስታ እንገልፃለን:: የዚህ ህብረት ዋና ዓላማ ክዘር; ከሃይማኖትና ከፖለቲካ ትፅዕኖ ነፃ በሆነ መንገድ
              በሰብእዊነት ብቻ ላይ በመመስረት ቤተሰብን; ማህበረሰብንና ሃገርን ለማገልገል በሚያስችል መልኩ ወንድሞችን
              በማስተባበር መልካም ተፅእኖ የሚፈጥሩበትን ዕድል ማመቻቸት ነው :: የዚህ ህብረት መፈጠር ለብዙ ቅን
              ዜጎች ሃገርና ወገንን ለመርዳት ያላቸውን ህልም እውን ለማድረግ እድሉን ማስገኘቱ ብቻ ሳይሆን ላለፉት ብዙ
              አመታት በልዩነታችን ላይ በማተኮር ማህበረሰባችን እርስ በእርስ እንዳንረዳዳና እንዳንተጋገዝ የተጫነብንን
              መርገም ገፎ ሁላችንም ለሁላችን የምንቆምብትን የእንድነት መንፈስ የሚያበስር ታልቅ ድል ነው:: ታላቁ
              የኢትዮጵያ መሪ አፄ ምኒሊክ ለአድዋ ዘመቻ ጥሪ ሲያደርጉ አመልህን በጉያ ስንቅህን በእህያ ጭነህ ተከተለኝ
              እንዳሉት እኛም ያሉንን ልዩነቶች ለየራሳችን በመያዝ ለጋራ ዕድገትና ትብብር በህብረት በመነሳት እውነተኛ
              የሃገር ፍቅርና የወገን ክብር ያለን ወንድሞች ሁሉ ይህንኑ በተግባር ለማስመስከር ያለንን የእውቀት;
              የጉልበትና የገንዘብ ስንቃችንን በመያዝ ይህን ህብረት በመቀላቀልና በማገዝ ስለ ሃገራችን ልማትና
              ስለህዝባችን ዕድገት ያለንን ብሩህ ተስፋ ዕውን እንድናደርግ ለሁሉም ወንድሞች ጥሪእችንን እናቀርባለን ::
            </h6>
          </div>
          <div className="UpdatesContent">
            <div className="UpdatesText">
              <img className="QuoteUpdate" src={Quote} alt="Board Member" />
              <img className="UpdateBoard" src={Board5} alt="Board Member" />
            </div>
            <div className="UpdatesText">
              <h5>ከወንድም ግሩም ለማ (ዶክተር)</h5>
            </div>
            <h6>
              ሰዎች በጠቅላላው ማህበራዊ ፍጥረት ነን:: ደስ ሲለን ከሰው ጋር ሆነን የደስታ ጊዜያችንን ማሳለፍ
              እንፈልጋለን:: ስናዝንም ሰዎች ኣብረውን ሲሆኑ መፅናናት ይሆንልናል:: ስንታመም የሰዎች ኣብሮ መሆን
              ያበረታናል:: በዘመናት መካከል የኣብሮነትን ጠቃሚነት በተለያዩ ምሳሌዎች ተገልጿል:: ድር ቢያብር ኣንበሳ
              ያስር:: ሃምሳ ሎሚ ለኣንድ ሰው ሸክም ለ ሃምሳ ስው ጌጥ:: በሶስት የተገመደ ገመድ ፈጥኖ አይበጠስም
              እና ሌሎችም:: ባለፈው አንድ አመት በወር አንድ ጊዜ የተለያየ ይህይወት ልምድ ካላቸው ወንድሞች ጋር
              በመነጋገር ያገኘሁት ትምህርትና ልምድ በጣም ብዙ ነው:: ይህ ሕብረት ደግሞ የበለጠ አድጎ ሪስን በማሳደግ
              ሌሎችም እንዲያድጉ በመርዳት ለቤተሰባቸው ለኣካባቢያቸው እንዲሁም ለአገራቸው የሚጠቅሙ ዜጎች ያደርጋል
              የሚል ጠንካራ እምነት አለኝ::
            </h6>
          </div>
          <div className="UpdatesContent">
            <div className="UpdatesText">
              <img className="QuoteUpdate" src={Quote} alt="Board Member" />
              <img className="UpdateBoard" src={Board11} alt="Board Member" />
            </div>
            <div className="UpdatesText">
              {" "}
              <h5>ከወንድም ሙሉጌታ አርአያ</h5>
            </div>
            <h6>
              በመጽሐፈ ምሳሌ ምዕራፍ 23 ቁጥር 19 ላይ "ልጄ ሆይ ስማ ጠቢብም ሁን ልብህንም በቀናው መንገድ ምራ"
              ተብሎ እንደተጻፈው ቅዱስ ቃል ልባችንን ይበልጥ በቀናው መንገድ ለመምራትና ከቅጥራችን ወጣ ብለን
              ክርስቲያናዊ ግዴታችንን ለመወጣት በማሰብ እነሆ ይህን ኅብረት መሰረትን። ከመራራቅ መቀራረብ ተስፋን
              ያጎላል እንዲሉ ብሩህ ተስፋም እይታን ያሰፋል፣ እምነትንና ጥንካሬ እንዲኖረን ያግዛል ብለን እናምናለን።
              ይህ ኅብረት በአካባቢያችን የሚታዩ የጎላ ችግሮችን ለመታደግ መንገድ ከፋች ይሆናል ብለንም እናስባለን።
              እግዚአብሔር በረዳን መጠንና አቅሙና ጉልበቱ እንደፈቀደ በምድራችን ላይ የኅብረታችንን አሻራ ለመጣል
              እንደምንችል ተስፋ አለን። በሜኔሶታ የምትገኙ ወገኖች ኅብረታችን ለማንኛውም ኢትዮጵያውያንና ኤርትራውያን
              ክፍት መሆኑን እያሳሰብን የሃይማኖት ልዩነት ሳይገድበን ለወገኖቻችን መልካም ነገር በማድረግ ተስፋቸውን
              ብሩህ ለማድረግ ከኅብረታችን እንድትቀላቀሉ ጥሪያችንን እናስተላልፋለን።
            </h6>
          </div>
          
          <div className="UpdatesBottom">
          <div className="UpdatesQuote">
          <img src={QuoteB} alt="Not Heavy" />
          </div>
            <div className="BottomText">
            <h6>
            "#He_is_not_heavy_he_is_my_brother." <br />

            In Japan, during the war, this boy was carrying his dead brother on his back to bury him. 
            A soldier noticed him and asked him to throw this dead child so that he would not get tired.<br />
            The boy replied: "#He_is_not_heavy_he_is_my_brother." <br/><br/>

            The soldier understand and broke down in to tears. Since then this picture has become a 
            symbol of unity and strength in Japan. <br/><br/>

            Let this be our motto:<br/>
            "He is not heavy, he's my brother; <br/>she is not heavy, she's my sister."<br/>

            If he falls, raise him.<br/>
            If she get tired, support her<br/>
            If he is wrong, correct him<br/>
            If she makes mistake, forgive her<br/>
            He is not heavy, ... he is my brother!
            </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
