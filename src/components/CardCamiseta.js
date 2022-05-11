import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid;
`

class CardCamiseta extends React.Component {
    state = {
       cards: [
            {
                imagem: "https://picsum.photos/50/51",
                valor: "R$ 5454",
                nome: "Camiseta A",
                tam: "P",
                tipo: "Mas"
            }
        ]
    }


    onChange

    render () {
  
      return (
       
        <CardContainer>
            <img src="https://picsum.photos/50/51" />
            <p>
                Nome camiseta
            </p>
            <p>
                Preço R$ 34
            </p>

        </CardContainer>

);
}
}


export default CardCamiseta;