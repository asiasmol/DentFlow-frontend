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
    VisitBody, VisitOptions, TeethOptions, ToothDescription,
    ToothStatus,StatusLabel,StatusCheckbox, ToothDescriptionTextField,
    ToothDescriptionHistory, ToothDescriptionHistoryElement, Descriptions,
    ToothDescriptionSaveButton, DescriptionTitle, DescriptionRow, ToothNumberText,ToothText

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
import {ClinicContext} from "../../../context/ClinicContext";
import { TeethApi } from "../../../api/TeethApi";
import {VirtualizedList} from "./ToothNoteList";






type Props = {

};

export  const Visit: React.FC<Props> = (props:Props) =>{
    const {currentVisit} = useContext(CalendarContext);
    const [teeth,setTeeth] = useState<Tooth[]>([]);
    const [currentTooth,setCurrentTooth] = useState <Tooth|null>(null);
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
    const {currentClinic} = useContext(ClinicContext);

    function handleChoseTooth(event:React.MouseEvent<HTMLImageElement>,tooth:Tooth)  {
        setToothName(event.currentTarget.alt)
        setCurrentTooth(tooth);
        if(!tooth.description)setDescriptionTooth("")
        else setDescriptionTooth(tooth.description);
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

    const safeVisitDescription = useCallback(async (event:React.ChangeEvent<HTMLTextAreaElement>) =>{
        await VisitApi.safeDescription({
            clinicId:currentClinic?.id,
            visitId:currentVisit?.id,
            doctorDescription:event.target.value
        })
    },[currentClinic?.id,currentVisit?.id]);

    const safeToothStatus = useCallback(async () =>{
        await TeethApi.safeToothStatus({
            clinicId:currentClinic?.id,
            patientId:currentVisit?.patient.patientId,
            tooth:currentTooth,
        })
    },[currentClinic?.id,currentTooth,currentVisit?.patient.patientId]);

    const safeToothDescription = useCallback(async () =>{
        try{
            await TeethApi.safeToothDescription({
                clinicId:currentClinic?.id,
                patientId:currentVisit?.patient.patientId,
                tooth:currentTooth,
            })
            if(currentTooth){
                currentTooth.descriptions.push({id:currentTooth.descriptions.length > 0
                        ? currentTooth.descriptions.sort((b, a) => b.id - a.id)[currentTooth.descriptions.length-1].id + 1
                        : 1,description:descriptionTooth})
                currentTooth.description = "";
            }
            setDescriptionTooth("")
        }catch (e){

        }

    },[currentClinic?.id,currentTooth,currentVisit?.patient.patientId,descriptionTooth]);
    function changeToothDescription(event:React.ChangeEvent<HTMLTextAreaElement>){
        if(currentTooth)
            currentTooth.description = event.target.value;
        setDescriptionTooth(event.target.value)
    }
    function changeCariesStatus(){
        if(currentTooth)
            currentTooth.caries = !currentTooth.caries;
        setCaries(!caries);
        safeToothStatus()
    }
    function changeNoToothStatus(){
        if(currentTooth)
            currentTooth.noTooth = !currentTooth.noTooth;
        setNoTooth(!noTooth);
        safeToothStatus()
    }
    function changeFillingStatus(){
        if(currentTooth)
            currentTooth.filling = !currentTooth.filling;
        setFilling(!filling);
        safeToothStatus()
    }
    function changeForObservationStatus(){
        if(currentTooth)
            currentTooth.forObservation = !currentTooth.forObservation;
        setForObservation(!forObservation);
        safeToothStatus()
    }
    function changeSecondaryCariesStatus(){
        if(currentTooth)
            currentTooth.secondaryCaries = !currentTooth.secondaryCaries;
        setSecondaryCaries(!secondaryCaries);
        safeToothStatus()
    }
    function changeProstheticCrownStatus(){
        if(currentTooth)
            currentTooth.prostheticCrown = !currentTooth.prostheticCrown;
        setProstheticCrown(!prostheticCrown);
        safeToothStatus()
    }
    function changeChannelsFilledCorrectlyStatus(){
        if(currentTooth)
            currentTooth.channelsFilledCorrectly = !currentTooth.channelsFilledCorrectly;
        setChannelsFilledCorrectly(!channelsFilledCorrectly);
        safeToothStatus()
    }
    function changeChannelNotCompletedStatus(){
        if(currentTooth)
            currentTooth.channelNotCompleted = !currentTooth.channelNotCompleted;
        setChannelNotCompleted(!channelNotCompleted);
        safeToothStatus()
    }
    function changePeriapicalChangeStatus(){
        if(currentTooth)
            currentTooth.periapicalChange = !currentTooth.periapicalChange;
        setPeriapicalChange(!periapicalChange);
        safeToothStatus()
    }
    function changeCrownRootInsertStatus(){
        if(currentTooth)
            currentTooth.crownRootInsert = !currentTooth.crownRootInsert;
        setCrownRootInsert(!crownRootInsert);
        safeToothStatus()
    }
    function changeSupragingivalCalculusStatus(){
        if(currentTooth)
            currentTooth.supragingivalCalculus = !currentTooth.supragingivalCalculus;
        setSupragingivalCalculus(!supragingivalCalculus);
        safeToothStatus()
    }
    function changeSubgingivalCalculusStatus(){
        if(currentTooth)
            currentTooth.subgingivalCalculus = !currentTooth.subgingivalCalculus;
        setSubgingivalCalculus(!subgingivalCalculus);
        safeToothStatus()
    }
    function changeImpactedToothStatus(){
        if(currentTooth)
            currentTooth.impactedTooth = !currentTooth.impactedTooth;
        setImpactedTooth(!impactedTooth);
        safeToothStatus()
    }
    function changeMicrodonticToothStatus(){
        if(currentTooth)
            currentTooth.microdonticTooth = !currentTooth.microdonticTooth;
        setMicrodonticTooth(!microdonticTooth);
        safeToothStatus()
    }
    function changeDevelopmentalDefectStatus(){
        if(currentTooth)
            currentTooth.developmentalDefect = !currentTooth.developmentalDefect;
        setDevelopmentalDefect(!developmentalDefect);
        safeToothStatus()
    }
    function changePathologicalClashStatus(){
        if(currentTooth)
            currentTooth.pathologicalClash = !currentTooth.pathologicalClash;
        setPathologicalClash(!pathologicalClash);
        safeToothStatus()
    }
    useEffect(() => {
        if(currentVisit)
        setTeeth(currentVisit.patient.teeth.sort((a,b) => a.number-b.number))
    },[currentVisit])
    return(
       <VisitBody>
           {currentVisit && (
               <>
                   <Jaw>
                       <UpperJawLeftFirst src={UpLFirst} isSelected = {currentTooth?.number ===1}  isNoTooth={teeth[0]?.noTooth}  alt="11" onClick={(event) => handleChoseTooth(event,teeth[0])}/>
                       <UpperJawLeftSecond src={UpLSecond} isSelected = {currentTooth?.number ===2}  isNoTooth={teeth[1]?.noTooth}   alt="12" onClick={(event)=>handleChoseTooth(event,teeth[1])}/>
                       <UpperJawLeftThird src={UpLThird} isSelected = {currentTooth?.number ===3}  isNoTooth={teeth[2]?.noTooth}  alt="13" onClick={(event) => handleChoseTooth(event,teeth[2])}/>
                       <UpperJawLeftFour src={UpLFour} isSelected = {currentTooth?.number ===4}  isNoTooth={teeth[3]?.noTooth}  alt="14" onClick={(event) => handleChoseTooth(event,teeth[3])}/>
                       <UpperJawLeftFive src={UpLFive} isSelected = {currentTooth?.number ===5}  isNoTooth={teeth[4]?.noTooth}  alt="15" onClick={(event) => handleChoseTooth(event,teeth[4])}/>
                       <UpperJawLeftSix src={UpLSix} isSelected = {currentTooth?.number ===6}  isNoTooth={teeth[5]?.noTooth}  alt="16" onClick={(event) => handleChoseTooth(event,teeth[5])}/>
                       <UpperJawLeftSeven src={UpLSeven} isSelected = {currentTooth?.number ===7}  isNoTooth={teeth[6]?.noTooth}  alt="17" onClick={(event) => handleChoseTooth(event,teeth[6])}/>
                       <UpperJawLeftEight src={UpLEight} isSelected = {currentTooth?.number ===8}  isNoTooth={teeth[7]?.noTooth}  alt="18" onClick={(event) => handleChoseTooth(event,teeth[7])}/>
                       <UpperJawRightFirst src={UpRFirst} isSelected = {currentTooth?.number ===9}  isNoTooth={teeth[8]?.noTooth}  alt="21" onClick={(event) => handleChoseTooth(event,teeth[8])}/>
                       <UpperJawRightSecond src={UpRSecond} isSelected = {currentTooth?.number ===10}  isNoTooth={teeth[9]?.noTooth}  alt="22" onClick={(event) => handleChoseTooth(event,teeth[9])}/>
                       <UpperJawRightThird src={UpRThird} isSelected = {currentTooth?.number ===11}  isNoTooth={teeth[10]?.noTooth}  alt="23" onClick={(event) => handleChoseTooth(event,teeth[10])}/>
                       <UpperJawRightFour src={UpRFour} isSelected = {currentTooth?.number ===12}  isNoTooth={teeth[11]?.noTooth}  alt="24" onClick={(event) => handleChoseTooth(event,teeth[11])}/>
                       <UpperJawRightFive src={UpRFive} isSelected = {currentTooth?.number ===13}  isNoTooth={teeth[12]?.noTooth}  alt="25" onClick={(event) => handleChoseTooth(event,teeth[12])}/>
                       <UpperJawRightSix src={UpRSix} isSelected = {currentTooth?.number ===14}  isNoTooth={teeth[13]?.noTooth}  alt="26" onClick={(event) => handleChoseTooth(event,teeth[13])}/>
                       <UpperJawRightSeven src={UpRSeven} isSelected = {currentTooth?.number ===15}  isNoTooth={teeth[14]?.noTooth}  alt="27" onClick={(event) => handleChoseTooth(event,teeth[14])}/>
                       <UpperJawRightEight src={UpREight} isSelected = {currentTooth?.number ===16}  isNoTooth={teeth[15]?.noTooth}  alt="28" onClick={(event) => handleChoseTooth(event,teeth[15])}/>
                       <DownJawLeftFirst src={DownLFirst} isSelected = {currentTooth?.number ===17}  isNoTooth={teeth[16]?.noTooth}  alt="41" onClick={(event) => handleChoseTooth(event,teeth[16])}/>
                       <DownJawLeftSecond src={DownLSecond} isSelected = {currentTooth?.number ===18}  isNoTooth={teeth[17]?.noTooth}  alt="42" onClick={(event) => handleChoseTooth(event,teeth[17])}/>
                       <DownJawLeftThird src={DownLThird} isSelected = {currentTooth?.number ===19}  isNoTooth={teeth[18]?.noTooth}  alt="43" onClick={(event) => handleChoseTooth(event,teeth[18])}/>
                       <DownJawLeftFour src={DownLFour} isSelected = {currentTooth?.number ===20}  isNoTooth={teeth[19]?.noTooth}  alt="44" onClick={(event) => handleChoseTooth(event,teeth[19])}/>
                       <DownJawLeftFive src={DownLFive} isSelected = {currentTooth?.number ===21}  isNoTooth={teeth[20]?.noTooth}  alt="45" onClick={(event) => handleChoseTooth(event,teeth[20])}/>
                       <DownJawLeftSix src={DownLSix} isSelected = {currentTooth?.number ===22}  isNoTooth={teeth[21]?.noTooth}  alt="46" onClick={(event) => handleChoseTooth(event,teeth[21])}/>
                       <DownJawLeftSeven src={DownLSeven} isSelected = {currentTooth?.number ===23}  isNoTooth={teeth[22]?.noTooth}  alt="47" onClick={(event) => handleChoseTooth(event,teeth[22])}/>
                       <DownJawLeftEight src={DownLEight} isSelected = {currentTooth?.number ===24}  isNoTooth={teeth[23]?.noTooth}  alt="48" onClick={(event) => handleChoseTooth(event,teeth[23])}/>
                       <DownJawRightFirst src={DownRFirst} isSelected = {currentTooth?.number ===25}  isNoTooth={teeth[24]?.noTooth}  alt="31" onClick={(event) => handleChoseTooth(event,teeth[24])}/>
                       <DownJawRightSecond src={DownRSecond} isSelected = {currentTooth?.number ===26}  isNoTooth={teeth[25]?.noTooth}  alt="32" onClick={(event) => handleChoseTooth(event,teeth[25])}/>
                       <DownJawRightThird src={DownRThird} isSelected = {currentTooth?.number ===27}  isNoTooth={teeth[26]?.noTooth}  alt="33" onClick={(event) => handleChoseTooth(event,teeth[26])}/>
                       <DownJawRightFour src={DownRFour} isSelected = {currentTooth?.number ===28}  isNoTooth={teeth[27]?.noTooth}  alt="34" onClick={(event) => handleChoseTooth(event,teeth[27])}/>
                       <DownJawRightFive src={DownRFive} isSelected = {currentTooth?.number ===29}  isNoTooth={teeth[28]?.noTooth}  alt="35" onClick={(event) => handleChoseTooth(event,teeth[28])}/>
                       <DownJawRightSix src={DownRSix} isSelected = {currentTooth?.number ===30}  isNoTooth={teeth[29]?.noTooth}  alt="36" onClick={(event) => handleChoseTooth(event,teeth[29])}/>
                       <DownJawRightSeven src={DownRSeven} isSelected = {currentTooth?.number ===31}  isNoTooth={teeth[30]?.noTooth}  alt="37" onClick={(event) => handleChoseTooth(event,teeth[30])}/>
                       <DownJawRightEight src={DownREight} isSelected = {currentTooth?.number ===32}  isNoTooth={teeth[31]?.noTooth}  alt="38" onClick={(event) => handleChoseTooth(event,teeth[31])}/>
                   </Jaw>
                   <VisitOptions>
                       <Descriptions>
                           <DescriptionRow>
                               <DescriptionTitle>Notatka Lekarska</DescriptionTitle>
                               <Description value={currentVisit.doctorDescription}  onChange={safeVisitDescription}/>
                           </DescriptionRow>
                           <DescriptionRow>
                               <DescriptionTitle>Notatka z Recepcji</DescriptionTitle>
                               <Description/>
                           </DescriptionRow>
                       </Descriptions>
                       {currentTooth && (
                           <TeethOptions>
                           <ToothDescription>
                                <ToothNumberText>Ząb : {toothName}</ToothNumberText>
                               <ToothDescriptionTextField value={descriptionTooth} onChange={changeToothDescription}/>
                               <ToothDescriptionSaveButton onClick={safeToothDescription}>Dodaj notatkę do zęba</ToothDescriptionSaveButton>
                               <ToothDescriptionHistory>
                                   <VirtualizedList descriptions={currentTooth.descriptions.sort((a, b) => b.id - a.id)}/>
                               </ToothDescriptionHistory>
                           </ToothDescription>
                           <ToothStatus>
                               <ToothText>Statusy Zęba</ToothText>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={forObservation} onChange={changeForObservationStatus}/> Do obserwacji</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={caries} onChange={changeCariesStatus}/> Próchnica</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={secondaryCaries} onChange={changeSecondaryCariesStatus}/> Próchnica wtórna</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={filling} onChange={changeFillingStatus}/> Wypełnienie</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={prostheticCrown} onChange={changeProstheticCrownStatus}/> Korona protetyczna </StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={channelsFilledCorrectly} onChange={changeChannelsFilledCorrectlyStatus}/> Kanały wypełnione prawidłowo </StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={channelNotCompleted} onChange={changeChannelNotCompletedStatus}/> Kanał niedopelniony</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={periapicalChange} onChange={changePeriapicalChangeStatus}/> Zmiana okolowierzcholko</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={crownRootInsert} onChange={changeCrownRootInsertStatus}/> Wkład koronowo-korzeniowy </StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={supragingivalCalculus} onChange={changeSupragingivalCalculusStatus}/> Kamień naddziąslowy</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={subgingivalCalculus} onChange={changeSubgingivalCalculusStatus}/> Kamień poddziąslowy</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={impactedTooth} onChange={changeImpactedToothStatus}/> Ząb zatrzymany</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={noTooth} onChange={changeNoToothStatus}/> Brak zęba</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={microdonticTooth} onChange={changeMicrodonticToothStatus}/> Ząb mikrodontyczny </StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={developmentalDefect} onChange={changeDevelopmentalDefectStatus}/> Wada rozwojowa</StatusLabel>
                           <StatusLabel><StatusCheckbox type="checkbox" checked={pathologicalClash} onChange={changePathologicalClashStatus}/> Starcie patologiczne</StatusLabel>
                           </ToothStatus>
                           </TeethOptions>
                           )}

                   </VisitOptions>
               </>
           )}

       </VisitBody>
    )
}