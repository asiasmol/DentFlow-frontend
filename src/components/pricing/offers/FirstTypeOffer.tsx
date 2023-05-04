import {
    FirstOfferContainer,
    Header,
    PriceArea,
    OfferParam,
    OfferIcon,
    CurrencyTextArea, H1, H2, H3, H4,
} from "./FirstTypeOffer.style";
import {HomeButton1} from "../../../pages/homePage/HomePage.style";
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
            <HomeButton1 id={'contact-form-button'}
                         marginTop={2}>
                Kup
            </HomeButton1>
        </FirstOfferContainer>


    )
}