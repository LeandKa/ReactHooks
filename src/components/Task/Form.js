import React from 'react'
import axios from 'axios'
import {  Form, FormGroup, Label, Button } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';
import { useForm } from "react-hook-form";

export default function Formulario (props) {

    const { register, handleSubmit } = useForm();
    
    
    const onSubmit = data =>{
        axios.post('https://jsonplaceholder.typicode.com/posts',data)
        .then(res =>{
           console.log('Foi'+res.data);
        }).catch(err =>{
            
        })
    }

        return (
            <Container fluid="sm">
                  <Row>
                      <Col xs="8">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label>Titulo</Label>
                        <input name="title"ref={register({})}
      />
                    </FormGroup>
                    <FormGroup>
                        <Label>Texto</Label>
                        <input name="body"ref={register({})} />
                    </FormGroup>
                   <Button >Submit</Button>
                </Form>
                    </Col>
                </Row>
            </Container>
        )
    }