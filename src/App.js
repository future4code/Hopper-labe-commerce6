import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import CardCamiseta from './components/CardCamiseta.js';
//import infoProduto from '../dados/produtos.json';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const MainFilter = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`
const MainCard = styled.div`
display: flex;
flex-flow: wrap;
justify-content: space-around;
`

// // const ImagemCabecalho = styled.img`
// // width: 75vw;
// // height: 250px;
// `

// const ListaProdutos = styled.div`
// display: flex;
// flex-direction: row;
// flex-flow: wrap;
// `

class App extends React.Component {
state ={
  dados: [
  {
      id: Date.now(),
      imagem: "https://img.elo7.com.br/product/294x234/21C0E30/camiseta-baby-look-feminina-olho-do-universo-estampa-total-camiseta-hd.jpg",
      titulo: "Camiseta 1",
      preco: 55
  },
  {
      id: Date.now(),
      imagem: "https://img.elo7.com.br/product/294x234/21B3412/camiseta-masculina-longline-swag-espacial-astronauta-masculina.jpg",
      titulo: "Camiseta 2",
      preco: 100
  },

  {
      id: Date.now(),
      imagem: "https://img.elo7.com.br/product/294x234/21B3D1B/camiseta-masculina-longline-swag-galaxia-estampa-digital-masculina.jpg",
      titulo: "Camiseta 3",
      preco: 75 
  },
  {
      id: Date.now(),
      imagem: "https://img.elo7.com.br/product/294x234/21B43AF/camiseta-masculina-longline-swag-naves-espaciais-full-print.jpg",
      titulo: "Camiseta 4",
      preco: 65 
  },
  {
      id: Date.now(),
      imagem: "https://img.elo7.com.br/product/294x234/21B448C/camiseta-masculina-longline-swag-olho-do-universo-olho.jpg",
      titulo: "Camiseta 5",
      preco: 80
  },
  {
      id: Date.now(),
      imagem: "https://img.elo7.com.br/product/294x234/2E534F1/camiseta-baby-look-feminina-galaxia-nebulosa-md04-camiseta.jpg",
      titulo: "Camiseta 6",
      preco: 170
  },

  {
      id: Date.now(),
      imagem: "https://img.elo7.com.br/product/294x234/2E4DE4F/camiseta-masculina-galaxia-chuva-de-meteoros-md05-estrela.jpg",
      titulo: "Camiseta 7",
      preco: 125 
  },
  {
      id: Date.now(),
      imagem: "https://img.elo7.com.br/product/294x234/2E4DE17/camiseta-masculina-galaxia-nebulosa-md03-total-print.jpg",
      titulo: "Camiseta 8",
      preco: 98 
  }
],
  min: "",
  max: "",
  prod: ""
}


 onChangeMinimo=(event)=>{
   
 this.setState({
  min: event.target.value
 })
 }
 
 onChangeMaximo=(event)=>{
   
  this.setState({
 max: event.target.value
  })
  }

  onChangeProduto=(event)=>{
   
    this.setState({
   prod: event.target.value
    })
    }

  render () {
    const cardProduto = this.state.dados.map((card) => {
      return <CardCamiseta 
                titulo={card.titulo}
                imagem={card.imagem}
                valor={card.preco}
      />
    })



    return (<>
<Header />
      <MainContainer>
          <MainFilter>
            <p>Filtro</p>
            <input 
                placeholder='Digite o Valor Mínimo'
                value ={this.state.min}
                onChange={this.onChangeMinimo}
                />
            <input 
                placeholder='Digite Valor Máximo'
                value={this.state.max}
                onChange={this.onChangeMaximo}
                />
            <input 
                placeholder='Nome do Produto'
                value={this.state.prod}
                onChange={this.onChangeProduto}
                />

              <div>
                  <p>Products</p>
              </div>
              <select>
                <option>Crescente</option>
                <option>Decrescente</option>
              </select>
          </MainFilter>
          <MainCard>              
              {cardProduto}
          </MainCard>      
       
      </MainContainer>
<Footer />
</>
    );

  
} 
}

export default App;