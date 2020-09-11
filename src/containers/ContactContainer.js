import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import "./ContactContainer.css"

const ContactContainer = () => {
    return (
        <div className="div">
            <Form>
                <section className="intro-section">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <h2 className="section-title">¡Contactanos!</h2>
                                <br/>
                                <h6 className="section-title">Si tienes dudas o comentarios, llena el siguiente formulario</h6>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </section>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="email" placeholder="Nombre" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="password" placeholder="Correo" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control placeholder="Direccion" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="dark" size="lg" block>
                    Enviar
            </Button>
            </Form>
        </div>
    )
}

export default ContactContainer