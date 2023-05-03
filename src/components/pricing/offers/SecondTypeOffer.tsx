import {
    SecondOfferContainer,
    Header,
    PriceArea,
    OfferParam,
    OfferIcon,
    CurrencyTextArea
} from "./SecondTypeOffer.style";
import {HomeButton} from "../../../pages/homePage/HomePage.style";
import React from "react";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {CheckCircle} from "react-bootstrap-icons";

interface OfferProps {
    header: string;
    price: number;
    currency: string;
}

export const SecondTypeOffer: React.FC<OfferProps> = ({ currency, price, header }) => {
    return (
        <SecondOfferContainer>
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
                        color: "#FAFAFA"}}>
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
                        color={"white"}
                        size={30}/>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem",
                            color: "#FAFAFA",
                        }}>
                        pełna wersja programu
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem",
                            color: "#FAFAFA"
                        }}>
                        brak opłat od liczby użytkowników
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem",
                            color: "#FAFAFA"
                        }}>
                        brak opłat od liczby komputerów
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem",
                            color: "#FAFAFA"
                        }}>
                        brak opłat za stanowisko recepcji
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem",
                            color: "#FAFAFA"
                        }}>
                        brak opłat za aktualizację programu i pomoc
                    </Typography>
                </OfferIcon>
            </OfferParam>
            <HomeButton
                marginTop={2}
                id={'contact-form-button'}
                >
                Kup
            </HomeButton>
        </SecondOfferContainer>


    )
}