import React from 'react';
import styled from 'styled-components';


const HeaderContainer = styled.header`
display: flex;
`

const ListadoMenu = styled.ul`
display: flex;
list-style: none;
li{
    margin: 0 5px;
}
li:hover{
    background-color: orange;
}
`

function Header () {
        return(
            <HeaderContainer>
                <p>
                    Camiseteria Labenu
                </p>
                <ListadoMenu>
                    <li>Masculino</li>
                    <li>Feminino</li>
                    <li>Carrinho</li>
                </ListadoMenu>

            </HeaderContainer>

);
}


export default Header;