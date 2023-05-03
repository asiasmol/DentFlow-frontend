import {
    BorderContainer,
    ContactForm,
    ContactHero,
    ContactInputs,
    HomeButton,
    HomeContainer,
    HomeHeader,
    HomeLink,
    Links,
    Logo,
    TextArea,
    PriceContainer, H1, H2,
} from "./HomePage.style";
import logo from '../../resources/img/logo.png';
import './HomePage.css'
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import TextField from '@mui/material/TextField';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Pricing} from "../../components/pricing/Pricing";
// import {Footer} from "../../components/footer/Footer";

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
                            <HomeButton marginTop={0}>Załóż konto</HomeButton>
                        </Link>

                        <Link to={"/login"}>
                            <HomeButton marginTop={0}>Zaloguj</HomeButton>
                        </Link>
                    </div>
                </HomeHeader>
                <div id='homeBody'>
                    <TextArea>

                        <H1>Zaufaj nam!</H1>
                        {/*<Typography*/}
                        {/*    variant={"h2"}*/}
                        {/*    sx={{*/}
                        {/*        fontFamily: "Montserrat",*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*    Zaufaj nam!*/}
                        {/*</Typography>*/}


                        <H2>Odkryj najlepsze oprogramowanie <br/> do zarządzania gabinetem
                            stomatologicznym</H2>

                        {/*<Typography variant={'h4'} sx={{*/}
                        {/*    fontFamily: "Montserrat",*/}
                        {/*    marginY: '2rem',*/}
                        {/*    }}>*/}
                        {/*    Odkryj najlepsze oprogramowanie <br/> do zarządzania gabinetem*/}
                        {/*    stomatologicznym*/}
                        {/*</Typography>*/}

                        <HomeButton  marginTop={0}> Dowiedz się więcej </HomeButton>
                    </TextArea>

                    <ContactForm>
                        <ContactHero>
                            Skontaktuj się!
                        </ContactHero>

                        <ContactInputs id={"inputs"}>
                            <TextField required id="outlined-basic" label="Imię i nazwisko" variant="outlined"
                                       className={"input"}/>
                            <TextField required id="outlined-basic" label="Email" variant="outlined"
                                       className={"input"}/>
                            <TextField required id="outlined-basic" label="Numer telefonu" variant="outlined"
                                       className={"input"}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Wybierz dzień kontaktu" className={"input"}/>
                            </LocalizationProvider>
                            <HomeButton marginTop={0}  id={'contact-form-button'}>
                                Wyślij
                            </HomeButton>

                        </ContactInputs>
                    </ContactForm>
                </div>
            </BorderContainer>
        </HomeContainer>
    )
}

export default HomePage;