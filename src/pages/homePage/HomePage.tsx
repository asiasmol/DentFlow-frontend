import {
    ContactForm,
    ContactHero, ContactInputs,
    HomeButton,
    HomeContainer,
    HomeHeader,
    HomeLink,
    Links,
    Logo,
    TextArea
} from "./HomePage.style";
import logo from '../../resources/img/logo.png';
import './HomePage.css'
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import TextField from '@mui/material/TextField';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";


const HomePage = () => {
    return (
        <>
            <HomeContainer>
                <HomeHeader>
                    <Logo src={logo}/>
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
                            <a href="/clinic-registration" style={{color:'red'}} >Załóż przychodnię</a>
                        </HomeLink>
                    </Links>
                    <div id='buttons'>
                        <Link to={'/user-registration'}>
                            <HomeButton width={12}>Załóż konto</HomeButton>
                        </Link>

                        <Link to={"/login"}>
                            <HomeButton width={12}>Zaloguj</HomeButton>
                        </Link>
                    </div>
                </HomeHeader>

                <TextArea>
                    <Typography variant={"h2"} sx={{fontFamily: "Montserrat"}}>
                        Zaufaj nam!
                    </Typography>

                    <Typography variant={'h4'} sx={{fontFamily: "Montserrat", marginY: '2rem'}}>
                        Odkryj najlepsze oprogramowanie <br/> do zarządzania gabinetem
                        stomatologicznym
                    </Typography>

                    <HomeButton width={17}> Dowiedz się więcej </HomeButton>
                </TextArea>

                <ContactForm>
                    <ContactHero variant='h4' sx={{fontFamily:"Montserrat", marginY:"2rem"}}>
                        Skontaktujmy się!
                    </ContactHero>

                    <ContactInputs id={"inputs"}>
                        <TextField  required id="outlined-basic" label="Imię i nazwisko" variant="outlined" className={"input"} />
                        <TextField  required id="outlined-basic" label="Email" variant="outlined" className={"input"} />
                        <TextField  required id="outlined-basic" label="Numer telefonu" variant="outlined" className={"input"} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Wybierz dzień kontaktu" className={"input"} />
                        </LocalizationProvider>


                    </ContactInputs>

                    <HomeButton width={13} id={'contact-form-button'}>
                        Wyślij
                    </HomeButton>
                </ContactForm>

            </HomeContainer>
        </>
    )
}

export default HomePage;