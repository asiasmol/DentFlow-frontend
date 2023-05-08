import React, {useContext} from "react"
import {
    UpperJawLeftEight,
    Jaw,
    UpperJawLeftSeven,
    UpperJawLeftSecond,
    UpperJawLeftThird,
    UpperJawLeftFour,
    UpperJawLeftFive,
    UpperJawLeftSix,
    UpperJawLeftFirst,
    UpperJawRightFirst,
    UpperJawRightSecond,
    UpperJawRightThird,
    UpperJawRightFour,
    UpperJawRightFive,
    UpperJawRightSix,
    UpperJawRightSeven,
    UpperJawRightEight,
    DownJawLeftFirst,
    DownJawLeftSecond,
    DownJawLeftThird,
    DownJawLeftFour,
    DownJawLeftSix,
    DownJawRightFirst,
    DownJawRightSecond,
    DownJawRightThird,
    DownJawRightFour,
    DownJawRightFive,
    DownJawRightSix,
    DownJawRightSeven, DownJawRightEight, DownJawLeftEight, DownJawLeftSeven, DownJawLeftFive,
} from "./Jaw.styles";
import {
    Description,
    VisitBody, VisitOptions
} from "./Day.styles";
import UpLEight from "../../../resources/img/Jaw/8-UP-L.png";
import UpLSeven from "../../../resources/img/Jaw/7-UP-L.png";
import UpLSix from "../../../resources/img/Jaw/6-UP-L.png";
import UpLFive from "../../../resources/img/Jaw/5-UP-L.png";
import UpLFour from "../../../resources/img/Jaw/4-UP-L.png";
import UpLThird from "../../../resources/img/Jaw/3-UP-L.png";
import UpLSecond from "../../../resources/img/Jaw/2-UP-L.png";
import UpLFirst from "../../../resources/img/Jaw/1-UP-L.png";
import UpREight from "../../../resources/img/Jaw/8-UP-R.png";
import UpRSeven from "../../../resources/img/Jaw/7-UP-R.png";
import UpRSix from "../../../resources/img/Jaw/6-UP-R.png";
import UpRFive from "../../../resources/img/Jaw/5-UP-R.png";
import UpRFour from "../../../resources/img/Jaw/4-UP-R.png";
import UpRThird from "../../../resources/img/Jaw/3-UP-R.png";
import UpRSecond from "../../../resources/img/Jaw/2-UP-R.png";
import UpRFirst from "../../../resources/img/Jaw/1-UP-R.png";
import DownLEight from "../../../resources/img/Jaw/8-DOWN-L.png";
import DownLSeven from "../../../resources/img/Jaw/8-DOWN-L.png";
import DownLSix from "../../../resources/img/Jaw/7-DOWN-L.png";
import DownLFive from "../../../resources/img/Jaw/6-DOWN-L.png";
import DownLFour from "../../../resources/img/Jaw/4-DOWN-L.png";
import DownLThird from "../../../resources/img/Jaw/3-DOWN-L.png";
import DownLSecond from "../../../resources/img/Jaw/2-DOWN-L.png";
import DownLFirst from "../../../resources/img/Jaw/1-DOWN-L.png";
import DownREight from "../../../resources/img/Jaw/8-DOWN-R.png";
import DownRSeven from "../../../resources/img/Jaw/7-DOWN-R.png";
import DownRSix from "../../../resources/img/Jaw/6-DOWN-R.png";
import DownRFive from "../../../resources/img/Jaw/5-DOWN-R.png";
import DownRFour from "../../../resources/img/Jaw/4-DOWN-R.png";
import DownRThird from "../../../resources/img/Jaw/3-DOWN-R.png";
import DownRSecond from "../../../resources/img/Jaw/2-DOWN-R.png";
import DownRFirst from "../../../resources/img/Jaw/1-DOWN-R.png";
import {CalendarContext} from "../../../context/CalendarContext";






type Props = {

};

export  const Visit: React.FC<Props> = (props:Props) =>{
    const {currentVisit} = useContext(CalendarContext);
    function handleChoseTooth()  {
        console.log(currentVisit?.patient);
    };

    return(
       <VisitBody>
           {currentVisit != null ? (
               <>
                   <Jaw>
                       <UpperJawLeftFirst src={UpLFirst} alt="ząb" onClick={() => handleChoseTooth()}/>
                       <UpperJawLeftSecond src={UpLSecond} alt="ząb" onClick={()=>handleChoseTooth()}/>
                       <UpperJawLeftThird src={UpLThird} alt="ząb"/>
                       <UpperJawLeftFour src={UpLFour} alt="ząb"/>
                       <UpperJawLeftFive src={UpLFive} alt="ząb"/>
                       <UpperJawLeftSix src={UpLSix} alt="ząb"/>
                       <UpperJawLeftSeven src={UpLSeven} alt="ząb"/>
                       <UpperJawLeftEight src={UpLEight} alt="ząb"/>
                       <UpperJawRightFirst src={UpRFirst} alt="ząb"/>
                       <UpperJawRightSecond src={UpRSecond} alt="ząb"/>
                       <UpperJawRightThird src={UpRThird} alt="ząb"/>
                       <UpperJawRightFour src={UpRFour} alt="ząb"/>
                       <UpperJawRightFive src={UpRFive} alt="ząb"/>
                       <UpperJawRightSix src={UpRSix} alt="ząb"/>
                       <UpperJawRightSeven src={UpRSeven} alt="ząb"/>
                       <UpperJawRightEight src={UpREight} alt="ząb"/>
                       <DownJawLeftFirst src={DownLFirst} alt="ząb"/>
                       <DownJawLeftSecond src={DownLSecond} alt="ząb"/>
                       <DownJawLeftThird src={DownLThird} alt="ząb"/>
                       <DownJawLeftFour src={DownLFour} alt="ząb"/>
                       <DownJawLeftFive src={DownLFive} alt="ząb"/>
                       <DownJawLeftSix src={DownLSix} alt="ząb"/>
                       <DownJawLeftSeven src={DownLSeven} alt="ząb"/>
                       <DownJawLeftEight src={DownLEight} alt="ząb"/>
                       <DownJawRightFirst src={DownRFirst} alt="ząb"/>
                       <DownJawRightSecond src={DownRSecond} alt="ząb"/>
                       <DownJawRightThird src={DownRThird} alt="ząb"/>
                       <DownJawRightFour src={DownRFour} alt="ząb"/>
                       <DownJawRightFive src={DownRFive} alt="ząb"/>
                       <DownJawRightSix src={DownRSix} alt="ząb"/>
                       <DownJawRightSeven src={DownRSeven} alt="ząb"/>
                       <DownJawRightEight src={DownREight} alt="ząb"/>
                   </Jaw>
                   <VisitOptions>
                       <Description type="text"  />
                   </VisitOptions>
               </>
           ):(
               <>
               </>
           )}

       </VisitBody>
    )
}