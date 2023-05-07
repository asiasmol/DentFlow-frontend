import {
    PriceContainer,
    HeadingText,
    Prices,


} from "./Pricing.styles";
import React from "react";
import {FirstTypeOffer} from "./offers/FirstTypeOffer";
import {SecondTypeOffer} from "./offers/SecondTypeOffer";
import {ThirdTypeOffer} from "./offers/ThirdTypeOffer";
import Typography from "@mui/material/Typography";
import {H1, H3} from "../../pages/homePage/HomePage.style";



export const Pricing = () => {
    return (
        <PriceContainer>
            <HeadingText>
                <H1>Cennik</H1>
                <H3>Cena Abonamentu zależy od ilości foteli</H3>
            </HeadingText>
            <Prices>
                <FirstTypeOffer
                    header={"1 fotel"}
                    price={"249.99"}
                    currency={"zł/msc"}
                />
                <SecondTypeOffer
                    header={"1-4 fotele"}
                    price={549.99}
                    currency={"zł/msc"}
                    />
                <ThirdTypeOffer
                    header={"5+ foteli"}
                    price={"899.99"}
                    currency={"zł/msc"}
                />
            </Prices>
        </PriceContainer>
    );
};