import {
    SecondOfferContainer,
    Header,
    PriceArea,
    OfferParam,
    OfferIcon,
    H1, H2, H3,
    CurrencyTextArea, H4
} from "./SecondTypeOffer.style";
import {HomeButton1, HomeButton2} from "../../../pages/homePage/HomePage.style";
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
                <H1>1-4 foteli</H1>
            </Header>
            <PriceArea>
                <H2>549.99</H2>
                <H3>zł/msc</H3>
            </PriceArea>
            <OfferParam>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <H4>pełna wersja programu</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <H4>brak opłat od liczby użytkowników</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <H4>brak opłat od liczby komputerów</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <H4>brak opłat za stanowisko recepcji</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <H4>bezpłatna pomoc</H4>
                </OfferIcon>
            </OfferParam>
            <HomeButton2>
                Kup
            </HomeButton2>
        </SecondOfferContainer>


    )
}