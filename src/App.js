import React from 'react'
import {
  Container,
  Navbar,
  Row
 } from 'react-bootstrap'

import Candidato from './Components/Candidato'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidatos: [
        {
          nome: "Quimby",
          votos: 0,
          caminhoImagem: "https://upload.wikimedia.org/wikipedia/en/5/51/Mayor_Quimby.png"
        },
        {
          nome: "Palpatine",
          votos: 0,
          caminhoImagem: "https://i.pinimg.com/originals/bd/8f/f8/bd8ff88664121a185cd90fd98d35551d.jpg"
        },
        {
          nome: "Candidato Que Ninguém Vota",
          votos: 0
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        <Navbar>
          <Navbar.Brand style={{color: 'white'}}><h2>Contador de Votos</h2></Navbar.Brand>
        </Navbar>
        <Row align="center">
          {this.state.candidatos.map(candidato => {
            return <Candidato key={candidato.nome} candidato={candidato} />
          })}
        </Row>
      </Container>
    );
  }
}

export default App;
