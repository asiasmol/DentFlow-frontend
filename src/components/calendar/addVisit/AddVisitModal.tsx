import React, {useCallback, useContext, useEffect, useState} from "react"
import {AutocompleteTime, InputsTime, Modal, ModalContent, ModalOverlay, StyledTextarea} from "./AddVisitModal..styles";
import {EmployeeResponse} from "../../../models/api/EmployeeResponse";
import {PatientResponse} from "../../../models/api/PatientResponse";
import {ClinicContext} from "../../../context/ClinicContext";
import {ClinicApi} from "../../../api/ClinicApi";
import dayjs from "dayjs";
import {LoginButton, LoginHeader, LoginInputs} from "../../login/Login.styles";
import {Autocomplete, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {VisitApi} from "../../../api/VisitApi";
import {toast} from "react-toastify";
import {CalendarContext} from "../../../context/CalendarContext";


type Props = {
    handleModalClose:()=>void;
};
export  const AddVisitModal: React.FC<Props> = (props:Props) =>{
    const [date, setDate] = useState<dayjs.Dayjs | null>(dayjs(new Date()));
    const [description, setDescription] = useState("")
    const [doctors, setDoctors] = useState<EmployeeResponse[]>([]);
    const [filterDoctors, setFilterDoctors] = useState<EmployeeResponse[]>([]);
    const [doctor, setDoctor] = useState<EmployeeResponse>();
    const [patient, setPatient] = useState<PatientResponse>();
    const [patients, setPatients] = useState<PatientResponse[]>([]);
    const {currentClinic} = useContext(ClinicContext);
    const [type, setType] = useState("Konsultacja");
    const [from, setFrom] = useState<string>("");
    const [to, setTo] = useState<string>("");
    const{fetchVisits} = useContext(CalendarContext)
    const [isFormComplete, setIsFormComplete] = useState(false);
    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 8; hour <= 20; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                const time = dayjs().set("hour", hour).set("minute", minute);
                const label = time.format("HH:mm");
                const value = time.toISOString();
                options.push({ label, value });
            }
        }
        return options;
    };

    const timeOptions = generateTimeOptions();
    function doctorHandleResultClick(result: EmployeeResponse|null) { // określenie typu parametru "result" na string
        if (result) {
            setDoctor(result);
        }
    }
    function patientHandleResultClick(result: PatientResponse|null) {// określenie typu parametru "result" na string
        if (result) {
            setPatient(result);
        }
    }
    const fetchDoctors= useCallback(async () => {
        try {
            const result = await ClinicApi.getDoctors({
                clinicId:currentClinic?.id
            });
            setDoctors(result.data)
        } finally {
            // setIsLoading(false);
        }
    }, [currentClinic?.id]);

    const fetchPatients= useCallback(async () => {
        try {
            const result = await ClinicApi.getPatients({
                clinicId:currentClinic?.id
            });
            setPatients(result.data)
        } finally {
            // setIsLoading(false);
        }
    }, [currentClinic?.id]);
    const handleDataChange = (date: dayjs.Dayjs | null) => {
        setDate(date);
    };

    function changeDescription(event:React.ChangeEvent<HTMLTextAreaElement>){
        setDescription(event.target.value)
    }

    useEffect(() => {
        fetchDoctors();
        fetchPatients();
    }, [fetchDoctors,fetchPatients])

    useEffect(() => {
        validateForm();
    }, [patient, doctor, date, from, to, description]);
    useEffect(()=>{
        doFilterDoctors()
    },[doctors,date,from,to])

    const handleAppointment= useCallback(async () => {
        try {
            await VisitApi.add({
                clinicId:currentClinic?.id,
                receptionistDescription: description,
                visitDate:date?.format("YYYY-MM-DD"),
                visitTime:from,
                type:type === "Kontrolna" ? "CONTROL" : type === "Zabieg" ? "TREATMENT" : type === "Inne" ? "OTHER" : "",
                doctorEmail:doctor?.email,
                patientId:patient?.patientId,
                lengthOfTheVisit: dayjs(to, "HH:mm").diff(dayjs(from, "HH:mm"), "minute")
            })
            props.handleModalClose();
            toast.success("Dodano wizyte");
            fetchVisits()
        } finally {
            // setIsLoading(false);
        }
    }, [currentClinic?.id,props,from, to,date,description]);
    function doFilterDoctors ()  {
        const filterDoctors:EmployeeResponse[]=[]
        doctors.map((doctor)=>{
            doctor.hoursOfAvailability.map((hour)=>{
                if(hour.day.toLowerCase() === date?.format("dddd") ){
                    if (hour.from <= from && to<=hour.to){
                        filterDoctors.push(doctor)
                    }
                }
            })
        })
        setFilterDoctors(filterDoctors)
    };
    const validateForm = () => {
        const areAllFieldsFilled =
            !!patient &&
            !!doctor &&
            !!type &&
            !!date &&
            !!from &&
            !!to &&
            from < to;
        setIsFormComplete(areAllFieldsFilled);
    };

    return(
        <Modal>
            <ModalOverlay onClick={props.handleModalClose} />
            <ModalContent>
                <LoginHeader>Umów wizytę</LoginHeader>
                <LoginInputs>
                    <Autocomplete
                        sx = {{marginBottom: "2rem",
                            marginTop: "2rem",
                        }}
                        disablePortal
                        id="combo-box-demo"
                        options={patients}
                        getOptionLabel={(patient) => patient.firstName + ' ' + patient.lastName}
                        renderInput={(params) => <TextField {...params} label="Pacjent" />}
                        value={patient}
                        onChange={(event, value) => patientHandleResultClick(value)}
                    />
                    <Autocomplete
                        sx = {{marginBottom: "2rem",
                        }}
                        disablePortal
                        id="combo-box-demo"
                        options={filterDoctors}
                        getOptionLabel={(doctor) => doctor.firstName + ' ' + doctor.lastName}
                        renderInput={(params) => <TextField {...params} label="Lekarz" />}
                        value={doctor}
                        onChange={(event, value) => doctorHandleResultClick(value)}
                    />
                    <Autocomplete
                        sx = {{marginBottom: "1.5rem",
                        }}
                        disablePortal
                        id="combo-box-demo"
                        defaultValue={"Kontrolna"}
                        options={["Kontrolna","Zabieg","Inne"]}
                        renderInput={(params) => <TextField {...params} label="Rodzaj Wizyty" />}
                        inputValue={type}
                        onInputChange={(event, type) => {setType(type);}}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker  sx = {{marginBottom: "2rem",}}
                                         label={"Data"}
                                         format={"DD-MM-YYYY"}
                                         value={date}
                                         onChange={handleDataChange}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    <InputsTime>
                    <AutocompleteTime
                        disablePortal
                        id="combo-box-demo"
                        options={timeOptions}
                        defaultValue={timeOptions[0]}
                        renderInput={(params) => <TextField {...params} label="OD" />}
                        inputValue={from}
                        onInputChange={(event, value) => {setFrom(value);}}
                    />
                    <AutocompleteTime
                        disablePortal
                        id="combo-box-demo"
                        options={timeOptions}
                        defaultValue={timeOptions[1]}
                        renderInput={(params) => <TextField {...params} label="DO" />}
                        inputValue={to}
                        onInputChange={(event, value) => {setTo(value);}}
                    />
                        </InputsTime>
                    <StyledTextarea
                        value={description}
                        onChange={changeDescription}
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Notatka"
                    />
                    <LoginButton onClick={handleAppointment} disabled={!isFormComplete}>
                        Umów
                    </LoginButton>
                </LoginInputs>
            </ModalContent>
        </Modal>
    )
}