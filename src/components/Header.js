import React from 'react';
import styled from 'styled-components';


const HeaderContainer = styled.header`
display: flex;
justify-content: center;
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
            </HeaderContainer>

);
}


export default Header;