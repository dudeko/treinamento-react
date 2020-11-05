import React from 'react'
import { 
  Button,
  Card,
  Container,
  Image,
  Navbar,
  Row
 } from 'react-bootstrap'

 import CircleWithLetter from './Components/CircleWithLetter'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.setState(state => ({
    }));
  }

  render() {
    return (
      <Container>
        <Navbar>
          <Navbar.Brand style={{color: 'white'}}><h2>Contador de Votos</h2></Navbar.Brand>
        </Navbar>
        <Row align="center">
          <Card bg="dark" text="light" style={{ width: '18rem', margin: '10px'}}>
            <Card.Body align="center">
              <Card.Title style={{height: '45px'}}>Quimby</Card.Title>
              <Image roundedCircle style={{width: '20vh', height: '20vh', objectFit: 'cover', objectPosition: 'top' }} src="https://upload.wikimedia.org/wikipedia/en/5/51/Mayor_Quimby.png" />
              <Card.Text style={{margin: '10px 0 0 0'}} as="h1">
                0
              </Card.Text>
              <Card.Text as="p">
                Votos
              </Card.Text>
              <Button variant="danger">Remover</Button>{' '}
              <Button>Adicionar</Button>
            </Card.Body>
          </Card>
          <Card bg="dark" text="light" style={{ width: '18rem', margin: '10px' }}>
            <Card.Body align="center">
              <Card.Title style={{height: '45px'}}>Palpatine</Card.Title>
              <Image roundedCircle style={{width: '20vh', height: '20vh', objectFit: 'cover', objectPosition: 'top' }} src="https://i.pinimg.com/originals/bd/8f/f8/bd8ff88664121a185cd90fd98d35551d.jpg" />
              <Card.Text style={{margin: '10px 0 0 0'}} as="h1">
                0
              </Card.Text>
              <Card.Text as="p">
                Votos
              </Card.Text>
              <Button variant="danger">Remover</Button>{' '}
              <Button>Adicionar</Button>
            </Card.Body>
          </Card>
          <Card bg="dark" text="light" style={{ width: '18rem', margin: '10px' }}>
            <Card.Body align="center">
              <Card.Title  style={{height: '45px'}}>Candidato que Ninguem Vota</Card.Title>
              <CircleWithLetter name="Candidato que Ninguém Vota"></CircleWithLetter>
              <Card.Text style={{margin: '10px 0 0 0'}} as="h1">
                0
              </Card.Text>
              <Card.Text as="p">
                Votos
              </Card.Text>
              <Button variant="danger">Remover</Button>{' '}
              <Button>Adicionar</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

export default App;