import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import CardCamiseta from './components/CardCamiseta';

const MainContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const MainFilter = styled.div`
display:flex;
flex-direction: column;
align-items: center;
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

    return (
     
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

     </MainFilter>
     <div>
     <p>Products</p>
     <select>
       <option>Crescente</option>
       <option>Decrescente</option>
       <CardCamiseta />
     </select>
     </div>
     <div>
     <p>ProdutosCard</p>
     </div>

      
       
      </MainContainer>

    );

  
} 
}

export default App;