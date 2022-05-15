import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid gray;
margin: 10px;
align-items: center;
img{
  height: 150px;
}
`

function CardCamiseta(props)  {
  
      return (       
        <CardContainer>
            <img src={props.imagem} />
            <h2>
             {props.titulo}
            </h2> 
            <h3>
            R$ {props.valor.toFixed(2)}                
            </h3> 
            <button onClick={() => this.props.adicionarAoCarrinho}>Adicionar Carrinho</button>
        </CardContainer>

);
}

export default CardCamiseta;