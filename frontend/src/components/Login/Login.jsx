import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'; 
import '../SignUp/Singup.css'
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
    const {auth, login} = useContext(UserContext);
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    
    
    async function onSave(event) {
        event.preventDefault()
        
        await  fetch("http://localhost:3002/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then(resp => resp.json())
        .then(result =>  {
            
            login(form.email, result.token)
            Swal.fire("Usuario Loggeado")
            navigate('/Productos')
        }).catch(error =>{
            Swal.fire(error)
        })

    }

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    useEffect(() =>{
        if(auth.token){
            navigate('/Productos')
        }
    },[])

  return (
    <div>

<div className="wrap">
                <div className="formContent">
                    <Form className='form-reserva' onSubmit={onSave}>
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" name='email' value={form.email} onChange={onChange} placeholder="Escribe tu correo electronico" />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' value={form.password} onChange={onChange} placeholder="Escribe contraseña" />
                                          
                        <Button type="submit" className='formButton'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
    </div>
  )
}

export default Login

