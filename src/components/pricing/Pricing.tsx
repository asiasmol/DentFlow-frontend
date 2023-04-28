import {
    PriceContainer,
    HeadingText,
    Prices,


} from "./Pricing.styles";
import React from "react";
import {FirstTypeOffer} from "./offers/FirstTypeOffer";
import {SecondTypeOffer} from "./offers/SecondTypeOffer";
import Typography from "@mui/material/Typography";


export const Pricing = () => {
    return (
        <PriceContainer>
            <HeadingText>
                <Typography
                    variant={"h2"}
                    sx={{
                        fontFamily: "Montserrat",
                        fontWeight: "bold",
                        color: "#252B42"}}>
                    Cennik
                </Typography>
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
                <FirstTypeOffer
                    header={"5+ foteli"}
                    price={"899.99"}
                    currency={"zł/msc"}
                    // text={"Na Miesiąc"}
                />
            </Prices>
        </PriceContainer>
    );
};