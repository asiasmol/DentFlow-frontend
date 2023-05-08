import React, {useContext, useEffect, useState} from "react"
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
    VisitBody, VisitOptions, TeethOptions, ToothDescription, ToothStatus,StatusLabel,StatusCheckbox, ToothDescriptionTextField,ToothDescriptionHistory, ToothDescriptionHistoryElement
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
import {Tooth} from "../../../models/Tooth";






type Props = {

};

export  const Visit: React.FC<Props> = (props:Props) =>{
    const {currentVisit} = useContext(CalendarContext);
    const [teeth,setTeeth] = useState<Tooth[]>([]);
    const [tooth,setTooth] = useState <Tooth|null>(null);
    const [caries, setCaries] = useState <boolean>(false);
    const [cavity, setCavity] = useState <boolean>(false);
    const [noTooth, setNoTooth] = useState <boolean>(false);
    const [filling, setFilling] = useState <boolean>(false);
    const [rootCanal, setRootCanal] = useState <boolean>(false);
    const [toothName,setToothName] = useState("");

    function handleChoseTooth(event:React.MouseEvent<HTMLImageElement>,tooth:Tooth)  {
        setToothName(event.currentTarget.alt)
        setTooth(tooth);
        setCaries(tooth.caries);
        setCavity(tooth.cavity);
        setNoTooth(tooth.noTooth);
        setFilling(tooth.filling);
        setRootCanal(tooth.rootCanal);
    };
    function changeCariesStatus(){
        if(tooth)
            tooth.caries = !tooth.caries;
        setCaries(!caries);
    }
    function changeCavityStatus(){
        if(tooth)
            tooth.cavity = !tooth.cavity;
        setCavity(!cavity);
    }
    function changeNoToothStatus(){
        if(tooth)
            tooth.noTooth = !tooth.noTooth;
        setNoTooth(!noTooth);
    }
    function changeFillingStatus(){
        if(tooth)
            tooth.filling = !tooth.filling;
        setFilling(!filling);
    }
    function changeRootCanalsStatus(){
        if(tooth)
            tooth.rootCanal = !tooth.rootCanal;
        setRootCanal(!rootCanal);
    }
    useEffect(() => {
        if(currentVisit)
        setTeeth(currentVisit.patient.teeth.sort((a,b) => a.number-b.number))
    },[currentVisit])
    return(
       <VisitBody>
           {currentVisit != null ? (
               <>
                   <Jaw>
                       <UpperJawLeftFirst src={UpLFirst} alt="11" onClick={(event) => handleChoseTooth(event,teeth[0])}/>
                       <UpperJawLeftSecond src={UpLSecond} alt="12" onClick={(event)=>handleChoseTooth(event,teeth[1])}/>
                       <UpperJawLeftThird src={UpLThird} alt="13" onClick={(event) => handleChoseTooth(event,teeth[2])}/>
                       <UpperJawLeftFour src={UpLFour} alt="14" onClick={(event) => handleChoseTooth(event,teeth[3])}/>
                       <UpperJawLeftFive src={UpLFive} alt="15" onClick={(event) => handleChoseTooth(event,teeth[4])}/>
                       <UpperJawLeftSix src={UpLSix} alt="16" onClick={(event) => handleChoseTooth(event,teeth[5])}/>
                       <UpperJawLeftSeven src={UpLSeven} alt="17" onClick={(event) => handleChoseTooth(event,teeth[6])}/>
                       <UpperJawLeftEight src={UpLEight} alt="18" onClick={(event) => handleChoseTooth(event,teeth[7])}/>
                       <UpperJawRightFirst src={UpRFirst} alt="21" onClick={(event) => handleChoseTooth(event,teeth[8])}/>
                       <UpperJawRightSecond src={UpRSecond} alt="22" onClick={(event) => handleChoseTooth(event,teeth[9])}/>
                       <UpperJawRightThird src={UpRThird} alt="23" onClick={(event) => handleChoseTooth(event,teeth[10])}/>
                       <UpperJawRightFour src={UpRFour} alt="24" onClick={(event) => handleChoseTooth(event,teeth[11])}/>
                       <UpperJawRightFive src={UpRFive} alt="25" onClick={(event) => handleChoseTooth(event,teeth[12])}/>
                       <UpperJawRightSix src={UpRSix} alt="26" onClick={(event) => handleChoseTooth(event,teeth[13])}/>
                       <UpperJawRightSeven src={UpRSeven} alt="27" onClick={(event) => handleChoseTooth(event,teeth[14])}/>
                       <UpperJawRightEight src={UpREight} alt="28" onClick={(event) => handleChoseTooth(event,teeth[15])}/>
                       <DownJawLeftFirst src={DownLFirst} alt="41" onClick={(event) => handleChoseTooth(event,teeth[16])}/>
                       <DownJawLeftSecond src={DownLSecond} alt="42" onClick={(event) => handleChoseTooth(event,teeth[17])}/>
                       <DownJawLeftThird src={DownLThird} alt="43" onClick={(event) => handleChoseTooth(event,teeth[18])}/>
                       <DownJawLeftFour src={DownLFour} alt="44" onClick={(event) => handleChoseTooth(event,teeth[19])}/>
                       <DownJawLeftFive src={DownLFive} alt="45" onClick={(event) => handleChoseTooth(event,teeth[20])}/>
                       <DownJawLeftSix src={DownLSix} alt="46" onClick={(event) => handleChoseTooth(event,teeth[21])}/>
                       <DownJawLeftSeven src={DownLSeven} alt="47" onClick={(event) => handleChoseTooth(event,teeth[22])}/>
                       <DownJawLeftEight src={DownLEight} alt="48" onClick={(event) => handleChoseTooth(event,teeth[23])}/>
                       <DownJawRightFirst src={DownRFirst} alt="31" onClick={(event) => handleChoseTooth(event,teeth[24])}/>
                       <DownJawRightSecond src={DownRSecond} alt="32" onClick={(event) => handleChoseTooth(event,teeth[25])}/>
                       <DownJawRightThird src={DownRThird} alt="33" onClick={(event) => handleChoseTooth(event,teeth[26])}/>
                       <DownJawRightFour src={DownRFour} alt="34" onClick={(event) => handleChoseTooth(event,teeth[27])}/>
                       <DownJawRightFive src={DownRFive} alt="35" onClick={(event) => handleChoseTooth(event,teeth[28])}/>
                       <DownJawRightSix src={DownRSix} alt="36" onClick={(event) => handleChoseTooth(event,teeth[29])}/>
                       <DownJawRightSeven src={DownRSeven} alt="37" onClick={(event) => handleChoseTooth(event,teeth[30])}/>
                       <DownJawRightEight src={DownREight} alt="38" onClick={(event) => handleChoseTooth(event,teeth[31])}/>
                   </Jaw>
                   <VisitOptions>
                       <Description type="text"  />
                       {tooth && (
                           <TeethOptions>
                           <ToothDescription>
                                Ząb : {toothName}
                               <ToothDescriptionTextField type="text"/>
                               <ToothDescriptionHistory>
                                   {tooth.descriptions.map((description,i) => (
                                       <>
                                           <ToothDescriptionHistoryElement key={i}>
                                               {description}
                                           </ToothDescriptionHistoryElement>
                                       </>
                                       ))}
                               </ToothDescriptionHistory>
                           </ToothDescription>
                           <ToothStatus>
                           <StatusLabel>Próchnica</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={caries} onChange={changeCariesStatus}/>
                           <StatusLabel>Ubytek</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={cavity} onChange={changeCavityStatus}/>
                           <StatusLabel>Brak Zęba</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={noTooth} onChange={changeNoToothStatus}/>
                           <StatusLabel>Wypełnienie</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={filling} onChange={changeFillingStatus}/>
                           <StatusLabel>Kanałowe</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={rootCanal} onChange={changeRootCanalsStatus}/>
                           </ToothStatus>
                           </TeethOptions>
                           )}

                   </VisitOptions>
               </>
           ):(
               <>
               </>
           )}

       </VisitBody>
    )
}