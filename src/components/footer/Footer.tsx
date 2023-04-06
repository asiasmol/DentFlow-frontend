import React from 'react'
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
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
            <Heading>Kliniki</Heading>
            <FooterLink href="/Clinics">Sprawdź</FooterLink>
          </Column>
          <Column>
            <Heading>Kontakt</Heading>
            <FooterLink href="/contacts">Skontaktuj się</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    
  )
}

