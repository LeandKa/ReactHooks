import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';


export default class Login extends Component {

    state = {
       email:'',
       senha:'',
       message:'' 
    };

    signIn = (e) => {
        e.preventDefault()
        const data ={
            email:this.state.email,
            senha:this.state.senha
        }
       axios.post('http://localhost:3000/login',data)
       .then(response=>{
        localStorage.setItem('accessToken',response.data.accessToken)
        localStorage.setItem('refresh',response.data.refreshToken)
        this.props.history.push('/')
        return
    }).catch(e =>{
const erro = 'Usuario não encontrado';
e = erro
          this.setState({message:e})
      })
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});



    render() {
        return (
                    <div className="col-md-6">
                  {
                    this.state.message !== '' ?(
                    <Alert color="danger" className="text-center">{this.state.message}</Alert>
                     ) : ''
                  }

                    <Form>
                <FormGroup>
                   <Label for="email">Email:</Label>
                   <Input id="email" name="email" onChange={this.onChange} value={this.state.email}/>    
                </FormGroup>
                <FormGroup>
                   <Label>Password:</Label>
                   <Input type="password" id="password" name="senha" onChange={this.onChange} value={this.state.senha} />
                </FormGroup>
                <Button type="submit" onClick={this.signIn} color="primary">Login</Button>
            </Form>
                    </div>         
        )
    }
}