import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  FooterText,
} from "./Footer.styles";


export const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>O nas</Heading>
            <FooterLink href="/profile">Zespół</FooterLink>  
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                <SocialIcon network="github" bgColor="#FFBE5C" url="https://github.com/EternalCode-pl"
                style={{ height: 25, width: 25 }} />
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Eternal-Code sp. z o.o</Heading>
            <FooterText>ul. Codecoolowa 1, 00-000 Codecool</FooterText>
            <FooterText>kontakt@eternalcode.pl</FooterText>
            <FooterText>+48 123 123 123</FooterText>
          </Column>
          
        </Row>
      </Container>
    </Box>
    
  )
}

