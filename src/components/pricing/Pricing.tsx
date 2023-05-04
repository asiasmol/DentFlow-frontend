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
import {H1} from "../../pages/homePage/HomePage.style";


export const Pricing = () => {
    return (
        <PriceContainer>
            <HeadingText>
                <H1>Cennik</H1>
                {/*<Typography*/}
                {/*    variant={"h2"}*/}
                {/*    sx={{*/}
                {/*        fontFamily: "Montserrat",*/}
                {/*        fontWeight: "bold",*/}
                {/*        color: "#252B42"}}>*/}
                {/*    Cennik*/}
                {/*</Typography>*/}
                <Typography
                    variant={"h6"}
                    sx={{
                        fontFamily: "Montserrat",
                        color: "#737373"}}>
                    Cena Abonamentu zależy od ilości foteli
                </Typography>
            </HeadingText>
            <Prices>
                <FirstTypeOffer
                    header={"1 fotel"}
                    price={"249.99"}
                    currency={"zł/msc"}
                    // text={"Na Miesiąc"}
                />
                <SecondTypeOffer
                    header={"1-4 fotele"}
                    price={549.99}
                    currency={"zł/msc"}
                    // text={"Na Miesiąc"}
                    />
                <ThirdTypeOffer
                    header={"5+ foteli"}
                    price={"899.99"}
                    currency={"zł/msc"}
                    // text={"Na Miesiąc"}
                />
            </Prices>
        </PriceContainer>
    );
};