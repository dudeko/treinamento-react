import React from 'react'
import { 
    Button,
    Card,
    Image
} from 'react-bootstrap'
import CircleWithLetter from './CircleWithLetter'

class Candidato extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            votos: props.candidato.votos
        }
    }

    adicionarVoto = () => {
        this.setState(state => ({
            votos: state.votos + 1
        }))
    }

    removerVoto = () => {
        this.setState(state => ({
            votos: state.votos - 1
        }))
    }

    getImagemDoCandidato = () => {
        if (this.props.candidato.caminhoImagem !== undefined) {
              return <Image roundedCircle style={{width: '20vh', height: '20vh', objectFit: 'cover', objectPosition: 'top' }} 
                src={this.props.candidato.caminhoImagem} />
        }
        return <CircleWithLetter name={this.props.candidato.nome}></CircleWithLetter>
    }

    render() {
        return <Card bg="dark" text="light" style={{ width: '18rem', margin: '10px' }}>
                    <Card.Body align="center">
                    <Card.Title  style={{height: '45px'}}>{this.props.candidato.nome}</Card.Title>
                    {this.getImagemDoCandidato()}
                    <Card.Text style={{margin: '10px 0 0 0'}} as="h1">
                        {this.state.votos}
                    </Card.Text>
                    <Card.Text as="p">
                        Votos
                    </Card.Text>
                    <Button variant="danger" onClick={this.removerVoto}>Remover</Button>{' '}
                    <Button onClick={this.adicionarVoto}>Adicionar</Button>
                    </Card.Body>
                </Card>
    }
}

export default Candidato