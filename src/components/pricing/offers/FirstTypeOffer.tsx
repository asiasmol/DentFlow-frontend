import {
    FirstOfferContainer,
    Header,
    PriceArea,
    OfferParam,
    OfferIcon,
    CurrencyTextArea,
} from "./FirstTypeOffer.style";
import {HomeButton} from "../../../pages/homePage/HomePage.style";
import React from "react";
import Typography from "@mui/material/Typography";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import { Icon } from "@chakra-ui/icons";
import { CheckCircle } from 'react-bootstrap-icons';

interface OfferProps {
    header: string;
    price: string;
    currency: string;
}

export const FirstTypeOffer: React.FC<OfferProps> = ({ price, header, currency }) => {
    return (
        <FirstOfferContainer>
            <Header>
                <Typography
                    variant={"h5"}
                    sx={{
                        // width: "3rem",
                        // height: "3rem",
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        fontSize: "2rem",
                        marginTop: "2rem",
                        color: "#1784B3"}}>
                    {header}
                </Typography>
            </Header>
            <PriceArea>
                <Typography
                    variant={"h2"}
                    sx={{
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        marginLeft: "1rem",
                        marginRight: "1rem",
                        color: "#FFBE5C"}}>
                    {price}
                </Typography>
                <CurrencyTextArea>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            fontWeight: "bold",

                            color: "#FFBE5C"}}>
                        {currency}
                    </Typography>
                    {/*<Typography*/}
                    {/*    variant={"h6"}*/}
                    {/*    sx={{*/}
                    {/*        fontFamily: "Montserrat",*/}
                    {/*        fontWeight: "bold",*/}

                    {/*        color: "#FFBE5C"}}>*/}
                    {/*    {text}*/}
                    {/*</Typography>*/}
                </CurrencyTextArea>
            </PriceArea>
            <OfferParam>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                        />
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem"
                        }}>
                        pełna wersja programu
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem"
                        }}>
                        brak opłat od liczby użytkowników
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem"
                        }}>
                        brak opłat od liczby komputerów
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem"
                        }}>
                        brak opłat za stanowisko recepcji
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            flexDirection: "row",
                            marginLeft: "1rem"
                        }}>
                        brak opłat za aktualizację programu i pomoc
                    </Typography>
                </OfferIcon>
            </OfferParam>
            <HomeButton id={'contact-form-button'}
                        marginTop={2}>
                Kup
            </HomeButton>
        </FirstOfferContainer>


    )
}