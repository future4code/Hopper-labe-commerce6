import React from 'react';
import styled from 'styled-components';
import face from '../img/facebook.png';
import insta from '../img/instagram.png';
import twiter from '../img/twitter.png';
import whats from '../img/whatsapp.png';

const FootContainer = styled.footer`
display: flex;
justify-content: space-around;
background-color: gray;
width: 75vw;
`

const Img = styled.img`
height: 25px;

`

function Footer() {
    return(
        <FootContainer>
            <div>
                <p>
                Serviços
                </p>
            </div>
            <div>
                <p>
                Contatos
                </p>
            </div>
            <div>
                <p>Redes Sociais</p>
                <Img src={face} />
                <Img src={insta} />
                <Img src={twiter} />
                <Img src={whats} />                
            </div>

        </FootContainer>

);
}

export default Footer;