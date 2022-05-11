import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import CardCamiseta from './components/CardCamiseta';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ImagemCabecalho = styled.img`
width: 75vw;
height: 250px;
`

const ListaProdutos = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap;
`

class App extends React.Component {

  render () {

    return (
     
      <MainContainer>
        <Header />
        <ImagemCabecalho src="https://cdn.pixabay.com/photo/2016/11/12/10/06/banner-1818540_960_720.jpg" />

        <ListaProdutos>
          <CardCamiseta />
        </ListaProdutos>

        <Footer />
      </MainContainer>

    );

  
} 
}

export default App;
