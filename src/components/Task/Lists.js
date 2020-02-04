import React  from 'react';
import { Button} from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import hookGetAll from '../Hooks/hookGetAll';
import axios from 'axios';

const Tarefas = () => {
    
       const estilo = {
            marginLeft:'10px',
            marginRight:'10px'
        }

        const data = hookGetAll('https://jsonplaceholder.typicode.com/posts');

      function Deletar(id){
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res =>{
            console.log('Deletou');
        }).catch(err =>{
            console.log('Nao deletou');
        })
      }
        return (
            <div> 
                {data.map(task =>(
                    <Container key={task.id} >
                    <Row>
                        <Col xs="4">
                        <Image src="https://image.freepik.com/vetores-gratis/ilustracao-da-lista-de-tarefas_53876-28518.jpg" thumbnail></Image>
                        </Col>
                        <Col xs="6">
                         <p>{task.title}</p>
                         <p>{task.body}</p>
                         <Button style={estilo}><Link style={{textDecoration:'none',color:'white'}} to={"/posts/"+task.id}>Editar</Link></Button>
                         <Button style={estilo} onClick={()=>Deletar(task.id)}>Deletar</Button>
                     </Col>
                    </Row>
                    <hr className="my-3"></hr>
                 </Container>

                ))}
            </div>
        )
}

export default Tarefas;

