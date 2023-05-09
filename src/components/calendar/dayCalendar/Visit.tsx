import React, {useCallback, useContext, useEffect, useState} from "react"
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
    VisitBody, VisitOptions, TeethOptions, ToothDescription, ToothStatus,StatusLabel,StatusCheckbox, ToothDescriptionTextField,ToothDescriptionHistory, ToothDescriptionHistoryElement, Descriptions, ToothDescriptionSaveButton
} from "./DayCalendar.styles";
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
import DownLSeven from "../../../resources/img/Jaw/7-DOWN-L.png";
import DownLSix from "../../../resources/img/Jaw/6-DOWN-L.png";
import DownLFive from "../../../resources/img/Jaw/5-DOWN-L.png";
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
import {VisitApi} from "../../../api/VisitApi";






type Props = {

};

export  const Visit: React.FC<Props> = (props:Props) =>{
    const {currentVisit} = useContext(CalendarContext);
    const [teeth,setTeeth] = useState<Tooth[]>([]);
    const [tooth,setTooth] = useState <Tooth|null>(null);
    const [forObservation,setForObservation]=useState<boolean>(false)
    const [caries,setCaries]=useState<boolean>(false)
    const [secondaryCaries,setSecondaryCaries]=useState<boolean>(false)
    const [filling,setFilling]=useState<boolean>(false)
    const [prostheticCrown,setProstheticCrown]=useState<boolean>(false)
    const [channelsFilledCorrectly,setChannelsFilledCorrectly]=useState<boolean>(false)
    const [channelNotCompleted,setChannelNotCompleted]=useState<boolean>(false)
    const [periapicalChange,setPeriapicalChange]=useState<boolean>(false)
    const [crownRootInsert,setCrownRootInsert]=useState<boolean>(false)
    const [supragingivalCalculus,setSupragingivalCalculus]=useState<boolean>(false)
    const [subgingivalCalculus,setSubgingivalCalculus]=useState<boolean>(false)
    const [impactedTooth,setImpactedTooth]=useState<boolean>(false)
    const [noTooth,setNoTooth]=useState<boolean>(false)
    const [microdonticTooth,setMicrodonticTooth]=useState<boolean>(false)
    const [developmentalDefect,setDevelopmentalDefect]=useState<boolean>(false)
    const [pathologicalClash,setPathologicalClash]=useState<boolean>(false)
    const [toothName,setToothName] = useState("");
    const [descriptionTooth, setDescriptionTooth] = useState("")

    function handleChoseTooth(event:React.MouseEvent<HTMLImageElement>,tooth:Tooth)  {
        setToothName(event.currentTarget.alt)
        setTooth(tooth);
        setCaries(tooth.caries);
        setNoTooth(tooth.noTooth);
        setFilling(tooth.filling);
        setForObservation(tooth.forObservation)
        setSecondaryCaries(tooth.secondaryCaries)
        setProstheticCrown(tooth.prostheticCrown)
        setChannelsFilledCorrectly(tooth.channelsFilledCorrectly)
        setChannelNotCompleted(tooth.channelNotCompleted)
        setPeriapicalChange(tooth.periapicalChange)
        setCrownRootInsert(tooth.crownRootInsert)
        setSupragingivalCalculus(tooth.supragingivalCalculus)
        setSubgingivalCalculus(tooth.subgingivalCalculus)
        setImpactedTooth(tooth.impactedTooth)
        setMicrodonticTooth(tooth.microdonticTooth)
        setDevelopmentalDefect(tooth.developmentalDefect)
        setPathologicalClash(tooth.pathologicalClash)
    };

    // function safeVisitDescription(event:React.ChangeEvent<HTMLTextAreaElement>){
    //
    // }
    const safeVisitDescription = useCallback(async (event:React.ChangeEvent<HTMLTextAreaElement>) =>{
        await VisitApi.safeDescription({
            visitId:currentVisit?.id,
            description:event.target.value
        })
    },[]);

    function changeCariesStatus(){
        if(tooth)
            tooth.caries = !tooth.caries;
        setCaries(!caries);
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
    function changeForObservationStatus(){
        if(tooth)
            tooth.forObservation = !tooth.forObservation;
        setForObservation(!forObservation);
    }
    function changeSecondaryCariesStatus(){
        if(tooth)
            tooth.secondaryCaries = !tooth.secondaryCaries;
        setSecondaryCaries(!secondaryCaries);
    }
    function changeProstheticCrownStatus(){
        if(tooth)
            tooth.prostheticCrown = !tooth.prostheticCrown;
        setProstheticCrown(!prostheticCrown);
    }
    function changeChannelsFilledCorrectlyStatus(){
        if(tooth)
            tooth.channelsFilledCorrectly = !tooth.channelsFilledCorrectly;
        setChannelsFilledCorrectly(!channelsFilledCorrectly);
    }
    function changeChannelNotCompletedStatus(){
        if(tooth)
            tooth.channelNotCompleted = !tooth.channelNotCompleted;
        setChannelNotCompleted(!channelNotCompleted);
    }
    function changePeriapicalChangeStatus(){
        if(tooth)
            tooth.periapicalChange = !tooth.periapicalChange;
        setPeriapicalChange(!periapicalChange);
    }
    function changeCrownRootInsertStatus(){
        if(tooth)
            tooth.crownRootInsert = !tooth.crownRootInsert;
        setCrownRootInsert(!crownRootInsert);
    }
    function changeSupragingivalCalculusStatus(){
        if(tooth)
            tooth.supragingivalCalculus = !tooth.supragingivalCalculus;
        setSupragingivalCalculus(!supragingivalCalculus);
    }
    function changeSubgingivalCalculusStatus(){
        if(tooth)
            tooth.subgingivalCalculus = !tooth.subgingivalCalculus;
        setSubgingivalCalculus(!subgingivalCalculus);
    }
    function changeImpactedToothStatus(){
        if(tooth)
            tooth.impactedTooth = !tooth.impactedTooth;
        setImpactedTooth(!impactedTooth);
    }
    function changeMicrodonticToothStatus(){
        if(tooth)
            tooth.microdonticTooth = !tooth.microdonticTooth;
        setMicrodonticTooth(!microdonticTooth);
    }
    function changeDevelopmentalDefectStatus(){
        if(tooth)
            tooth.developmentalDefect = !tooth.developmentalDefect;
        setDevelopmentalDefect(!developmentalDefect);
    }
    function changePathologicalClashStatus(){
        if(tooth)
            tooth.pathologicalClash = !tooth.pathologicalClash;
        setPathologicalClash(!pathologicalClash);
    }
    useEffect(() => {
        console.log(currentVisit)
        if(currentVisit)
        setTeeth(currentVisit.patient.teeth.sort((a,b) => a.number-b.number))
    },[currentVisit])
    return(
       <VisitBody>
           {currentVisit && (
               <>
                   <Jaw>
                       <UpperJawLeftFirst src={UpLFirst} isSelected = {tooth?.number ===1}  isNoTooth={teeth[0]?.noTooth}  alt="11" onClick={(event) => handleChoseTooth(event,teeth[0])}/>
                       <UpperJawLeftSecond src={UpLSecond} isSelected = {tooth?.number ===2}  isNoTooth={teeth[1]?.noTooth}   alt="12" onClick={(event)=>handleChoseTooth(event,teeth[1])}/>
                       <UpperJawLeftThird src={UpLThird} isSelected = {tooth?.number ===3}  isNoTooth={teeth[2]?.noTooth}  alt="13" onClick={(event) => handleChoseTooth(event,teeth[2])}/>
                       <UpperJawLeftFour src={UpLFour} isSelected = {tooth?.number ===4}  isNoTooth={teeth[3]?.noTooth}  alt="14" onClick={(event) => handleChoseTooth(event,teeth[3])}/>
                       <UpperJawLeftFive src={UpLFive} isSelected = {tooth?.number ===5}  isNoTooth={teeth[4]?.noTooth}  alt="15" onClick={(event) => handleChoseTooth(event,teeth[4])}/>
                       <UpperJawLeftSix src={UpLSix} isSelected = {tooth?.number ===6}  isNoTooth={teeth[5]?.noTooth}  alt="16" onClick={(event) => handleChoseTooth(event,teeth[5])}/>
                       <UpperJawLeftSeven src={UpLSeven} isSelected = {tooth?.number ===7}  isNoTooth={teeth[6]?.noTooth}  alt="17" onClick={(event) => handleChoseTooth(event,teeth[6])}/>
                       <UpperJawLeftEight src={UpLEight} isSelected = {tooth?.number ===8}  isNoTooth={teeth[0]?.noTooth}  alt="18" onClick={(event) => handleChoseTooth(event,teeth[7])}/>
                       <UpperJawRightFirst src={UpRFirst} isSelected = {tooth?.number ===9}  isNoTooth={teeth[0]?.noTooth}  alt="21" onClick={(event) => handleChoseTooth(event,teeth[8])}/>
                       <UpperJawRightSecond src={UpRSecond} isSelected = {tooth?.number ===10}  isNoTooth={teeth[0]?.noTooth}  alt="22" onClick={(event) => handleChoseTooth(event,teeth[9])}/>
                       <UpperJawRightThird src={UpRThird} isSelected = {tooth?.number ===11}  isNoTooth={teeth[0]?.noTooth}  alt="23" onClick={(event) => handleChoseTooth(event,teeth[10])}/>
                       <UpperJawRightFour src={UpRFour} isSelected = {tooth?.number ===12}  isNoTooth={teeth[0]?.noTooth}  alt="24" onClick={(event) => handleChoseTooth(event,teeth[11])}/>
                       <UpperJawRightFive src={UpRFive} isSelected = {tooth?.number ===13}  isNoTooth={teeth[0]?.noTooth}  alt="25" onClick={(event) => handleChoseTooth(event,teeth[12])}/>
                       <UpperJawRightSix src={UpRSix} isSelected = {tooth?.number ===14}  isNoTooth={teeth[0]?.noTooth}  alt="26" onClick={(event) => handleChoseTooth(event,teeth[13])}/>
                       <UpperJawRightSeven src={UpRSeven} isSelected = {tooth?.number ===15}  isNoTooth={teeth[0]?.noTooth}  alt="27" onClick={(event) => handleChoseTooth(event,teeth[14])}/>
                       <UpperJawRightEight src={UpREight} isSelected = {tooth?.number ===16}  isNoTooth={teeth[0]?.noTooth}  alt="28" onClick={(event) => handleChoseTooth(event,teeth[15])}/>
                       <DownJawLeftFirst src={DownLFirst} isSelected = {tooth?.number ===17}  isNoTooth={teeth[0]?.noTooth}  alt="41" onClick={(event) => handleChoseTooth(event,teeth[16])}/>
                       <DownJawLeftSecond src={DownLSecond} isSelected = {tooth?.number ===18}  isNoTooth={teeth[0]?.noTooth}  alt="42" onClick={(event) => handleChoseTooth(event,teeth[17])}/>
                       <DownJawLeftThird src={DownLThird} isSelected = {tooth?.number ===19}  isNoTooth={teeth[0]?.noTooth}  alt="43" onClick={(event) => handleChoseTooth(event,teeth[18])}/>
                       <DownJawLeftFour src={DownLFour} isSelected = {tooth?.number ===20}  isNoTooth={teeth[0]?.noTooth}  alt="44" onClick={(event) => handleChoseTooth(event,teeth[19])}/>
                       <DownJawLeftFive src={DownLFive} isSelected = {tooth?.number ===21}  isNoTooth={teeth[0]?.noTooth}  alt="45" onClick={(event) => handleChoseTooth(event,teeth[20])}/>
                       <DownJawLeftSix src={DownLSix} isSelected = {tooth?.number ===22}  isNoTooth={teeth[0]?.noTooth}  alt="46" onClick={(event) => handleChoseTooth(event,teeth[21])}/>
                       <DownJawLeftSeven src={DownLSeven} isSelected = {tooth?.number ===23}  isNoTooth={teeth[0]?.noTooth}  alt="47" onClick={(event) => handleChoseTooth(event,teeth[22])}/>
                       <DownJawLeftEight src={DownLEight} isSelected = {tooth?.number ===24}  isNoTooth={teeth[0]?.noTooth}  alt="48" onClick={(event) => handleChoseTooth(event,teeth[23])}/>
                       <DownJawRightFirst src={DownRFirst} isSelected = {tooth?.number ===25}  isNoTooth={teeth[0]?.noTooth}  alt="31" onClick={(event) => handleChoseTooth(event,teeth[24])}/>
                       <DownJawRightSecond src={DownRSecond} isSelected = {tooth?.number ===26}  isNoTooth={teeth[0]?.noTooth}  alt="32" onClick={(event) => handleChoseTooth(event,teeth[25])}/>
                       <DownJawRightThird src={DownRThird} isSelected = {tooth?.number ===27}  isNoTooth={teeth[0]?.noTooth}  alt="33" onClick={(event) => handleChoseTooth(event,teeth[26])}/>
                       <DownJawRightFour src={DownRFour} isSelected = {tooth?.number ===28}  isNoTooth={teeth[0]?.noTooth}  alt="34" onClick={(event) => handleChoseTooth(event,teeth[27])}/>
                       <DownJawRightFive src={DownRFive} isSelected = {tooth?.number ===29}  isNoTooth={teeth[0]?.noTooth}  alt="35" onClick={(event) => handleChoseTooth(event,teeth[28])}/>
                       <DownJawRightSix src={DownRSix} isSelected = {tooth?.number ===310}  isNoTooth={teeth[0]?.noTooth}  alt="36" onClick={(event) => handleChoseTooth(event,teeth[29])}/>
                       <DownJawRightSeven src={DownRSeven} isSelected = {tooth?.number ===31}  isNoTooth={teeth[30]?.noTooth}  alt="37" onClick={(event) => handleChoseTooth(event,teeth[30])}/>
                       <DownJawRightEight src={DownREight} isSelected = {tooth?.number ===32}  isNoTooth={teeth[31]?.noTooth}  alt="38" onClick={(event) => handleChoseTooth(event,teeth[31])}/>
                   </Jaw>
                   <VisitOptions>
                       <Descriptions>
                           <Description   onChange={safeVisitDescription}/>
                           <Description/> //TODO dodać blokade tylko dla recepcjonistów
                       </Descriptions>
                       {tooth && (
                           <TeethOptions>
                           <ToothDescription>
                                Ząb : {toothName}
                               <ToothDescriptionTextField type="text"/>
                               <ToothDescriptionSaveButton>Dodaj notatkę do zęba</ToothDescriptionSaveButton>
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
                           <StatusLabel>Do obserwacji</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={forObservation} onChange={changeForObservationStatus}/>
                           <StatusLabel>Próchnica</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={caries} onChange={changeCariesStatus}/>
                           <StatusLabel>Próchnica wtórna</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={secondaryCaries} onChange={changeSecondaryCariesStatus}/>
                           <StatusLabel>Wypełnienie</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={filling} onChange={changeFillingStatus}/>
                           <StatusLabel>Korona protetyczna </StatusLabel>
                           <StatusCheckbox type="checkbox" checked={prostheticCrown} onChange={changeProstheticCrownStatus}/>
                           <StatusLabel>Kanały wypełnione prawidłowo </StatusLabel>
                           <StatusCheckbox type="checkbox" checked={channelsFilledCorrectly} onChange={changeChannelsFilledCorrectlyStatus}/>
                           <StatusLabel>Kanał niedopelniony</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={channelNotCompleted} onChange={changeChannelNotCompletedStatus}/>
                           <StatusLabel>Zmiana okolowierzcholko</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={periapicalChange} onChange={changePeriapicalChangeStatus}/>
                           <StatusLabel>Wkład koronowo-korzeniowy </StatusLabel>
                           <StatusCheckbox type="checkbox" checked={crownRootInsert} onChange={changeCrownRootInsertStatus}/>
                           <StatusLabel>Kamień naddziąslowy</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={supragingivalCalculus} onChange={changeSupragingivalCalculusStatus}/>
                           <StatusLabel>Kamień poddziąslowy</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={subgingivalCalculus} onChange={changeSubgingivalCalculusStatus}/>
                           <StatusLabel>Ząb zatrzymany</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={impactedTooth} onChange={changeImpactedToothStatus}/>
                           <StatusLabel>Brak zęba</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={noTooth} onChange={changeNoToothStatus}/>
                           <StatusLabel>Ząb mikrodontyczny </StatusLabel>
                           <StatusCheckbox type="checkbox" checked={microdonticTooth} onChange={changeMicrodonticToothStatus}/>
                           <StatusLabel>Wada rozwojowa</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={developmentalDefect} onChange={changeDevelopmentalDefectStatus}/>
                           <StatusLabel>Starcie patologiczne</StatusLabel>
                           <StatusCheckbox type="checkbox" checked={pathologicalClash} onChange={changePathologicalClashStatus}/>
                           </ToothStatus>
                           </TeethOptions>
                           )}

                   </VisitOptions>
               </>
           )}

       </VisitBody>
    )
}