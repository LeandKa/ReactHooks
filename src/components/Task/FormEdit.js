import React, { useEffect,useState} from 'react'
import axios from 'axios'
import {  Form, FormGroup, Label, Button, Input } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';

export default function FormularioEdit (props) {

    const [Tarefa,setTarefas]= useState({id:'',title:'',body:''});

    const urlId = props.match.params.id;

    useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/posts/'+urlId).then(res =>{
       setTarefas(res.data);
     })
     .catch(err =>{
       console.log('Nao foi');
     })
    },[urlId])


    const updateProduct = (e) =>{
        e.preventDefault();
        const data = {
            id:props.match.params.id,
            title:Tarefa.title,
            body:Tarefa.body
        }
        axios.put(`https://jsonplaceholder.typicode.com/posts/${urlId}`,data).then(res =>{
            console.log('Atualizou');
        })
        .catch(err =>{
            console.log('Nao foi possivel')
        })
    }

    const onChange = (e) =>{
        setTarefas({...Tarefa,[e.target.name]:e.target.value});
    }
    
   
        return (
            <Container fluid="sm">
                  <Row>
                      <Col xs="8">
                <Form onSubmit={updateProduct}>
                    <FormGroup >
                        <Label>Titulo</Label>
                        <Input name="title" value={Tarefa.title} onChange={onChange}  />
                    </FormGroup>
                    <FormGroup>
                        <Label>Texto</Label>
                        <Input name="body" value={Tarefa.body} onChange={onChange} />
                        <Input type="hidden" name="id" value={Tarefa.id} onChange={onChange}></Input>
                    </FormGroup>
                   <Button >Submit</Button>
                </Form>
                    </Col>
                </Row>
            </Container>
        )
    }