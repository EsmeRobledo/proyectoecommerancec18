import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Singup.css'
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';

function Singup() {
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        rol: ""
    })
    function onSave(event) {
        event.preventDefault()

    }

    function onChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

   

    return (
        <>
            <div className="wrap">
                <div className="formContent">
                    <Form className='form-reserva' onSubmit={onSave}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name='name' value={form.name} onChange={onChange} placeholder="Escribe tu nombre" />
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" name='lastName' value={form.lastName} onChange={onChange} placeholder="Escribe tu apellido" />
                       <Form.Label>email</Form.Label>
                        <Form.Control type="email" name='email' value={form.email} onChange={onChange} placeholder="Escribe tu correo electronico" />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" name='password' value={form.password} onChange={onChange} placeholder="Escribe contraseña" />
                        <Form.Label>Rol</Form.Label>
                        <Form.Control type="text" name='rol' value={form.rol} onChange={onChange}  />
                       
                        <Form.Text className="text-muted">
                            Tu informacion es privada y no sera compartida o reutilizada.
                        </Form.Text>
                        <Button type="submit" className='formButton'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Singup;
