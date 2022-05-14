import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid gray;
margin: 10px;
align-items: center;
`

function CardCamiseta(props)  {
  
      return (       
        <CardContainer>
            <img src={props.imagem} />
            <h1>
             {props.titulo}
            </h1> 
            <h3>
            R$ {props.valor.toFixed(2)}                
            </h3> 
            <button></button>
        </CardContainer>

);
}

export default CardCamiseta;