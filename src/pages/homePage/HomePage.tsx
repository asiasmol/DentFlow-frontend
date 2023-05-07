import {
    BorderContainer,
    ContactForm,
    ContactHero,
    ContactInputs,
    HomeButton1,
    HomeContainer,
    HomeHeader,
    HomeLink,
    Links,
    Logo,
    TextArea,
    PriceContainer,
    H1, H2,
    HomeButton2,
    StyledTextFieldMedium,
    StyledTextFieldSmall,
    StyledDatePickerMedium, StyledDatePickerSmall, HomeButton3,

} from "./HomePage.style";
// import AdapterDayjs from "@mui/lab/AdapterDayjs";
import logo from '../../resources/img/logo.png';
import './HomePage.css'
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import TextField from '@mui/material/TextField';
import {DateField, LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Pricing} from "../../components/pricing/Pricing";
import dayjs from "dayjs";
import {DemoItem, DemoContainer} from "@mui/x-date-pickers/internals/demo";
// import {Footer} from "../../components/footer/Footer";
import { DesktopDatePicker } from '@mui/x-date-pickers-pro';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const HomePage = () => {

    return (
        <HomeContainer>
            <BorderContainer>
                <HomeHeader>
                    <a href="/"><Logo src={logo}/></a>
                    <Links>
                        <HomeLink>
                            <a href="/">Strona główna</a>
                        </HomeLink>
                        <HomeLink>
                            <a href="/pricing"> Cennik </a>
                        </HomeLink>
                        <HomeLink>
                            <a href="/contact">Kontakt</a>
                        </HomeLink>
                        <HomeLink>
                            <a href="/clinic-registration">Załóż przychodnię</a>
                        </HomeLink>
                    </Links>
                    <div id='buttons'>
                        <Link to={'/user-registration'}>
                            <HomeButton1 marginTop={0}>Załóż konto</HomeButton1>
                        </Link>

                        <Link to={"/login"}>
                            <HomeButton1 marginTop={0}>Zaloguj</HomeButton1>
                        </Link>
                    </div>
                </HomeHeader>
                <div id='homeBody'>
                    <TextArea>
                        <H1>Zaufaj nam!</H1>
                        <H2>Odkryj najlepsze oprogramowanie <br/> do zarządzania gabinetem
                            stomatologicznym</H2>

                        <HomeButton3 marginTop={0}> Dowiedz się więcej </HomeButton3>
                    </TextArea>

                    <ContactForm>
                        <ContactHero>
                            Skontaktuj się!
                        </ContactHero>

                        <ContactInputs id={"inputs"}>
                            <StyledTextFieldMedium label="Imię i nazwisko" size={"medium"}/>
                            <StyledTextFieldSmall label="Imię i nazwisko" size={"small"}/>

                            <StyledTextFieldMedium label="Email" size={"medium"}/>
                            <StyledTextFieldSmall label="Email" size={"small"}/>

                            <StyledTextFieldMedium label="Numer telefonu" size={"medium"}/>
                            <StyledTextFieldSmall label="Numer telefonu" size={"small"}/>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StyledDatePickerMedium label={'Data'} />
                                <StyledDatePickerSmall label={'Data'} />
                            </LocalizationProvider>

                            <HomeButton2 id={'contact-form-button'}>
                                Wyślij
                            </HomeButton2>
                        </ContactInputs>
                    </ContactForm>
                </div>
            </BorderContainer>
        </HomeContainer>
    )
}

export default HomePage;