import {
    FirstOfferContainer,
    Header,
    PriceArea,
    OfferParam,
    OfferIcon,
    CurrencyTextArea, H1, H2, H3, H4,
} from "./FirstTypeOffer.style";
import {HomeButton1, HomeButton2} from "../../../pages/homePage/HomePage.style";
import React from "react";
import Typography from "@mui/material/Typography";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import { Icon } from "@chakra-ui/icons";
import { CheckCircle } from 'react-bootstrap-icons';
import {useNavigate} from "react-router-dom";

interface OfferProps {
    header: string;
    price: string;
    currency: string;
}

export const FirstTypeOffer: React.FC<OfferProps> = ({ price, header, currency }) => {
    const navigate = useNavigate();

    return (
        <FirstOfferContainer>
            <Header>
                <H1>1 fotel</H1>
                <PriceArea>
                    <H2>249.99</H2>
                    <H3>zł/msc</H3>
                </PriceArea>
            </Header>
            <OfferParam>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                        />
                    <H4>pełna wersja programu</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <H4>brak opłat od liczby użytkowników</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <H4>brak opłat od liczby komputerów</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <H4>brak opłat za stanowisko recepcji</H4>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"#1784B3"}
                        size={30}
                    />
                    <H4>brak opłat za pomoc</H4>

                </OfferIcon>
            </OfferParam>
            <HomeButton2 onClick={() => navigate("/clinic-registration")}>
                Kup
            </HomeButton2>
        </FirstOfferContainer>


    )
}