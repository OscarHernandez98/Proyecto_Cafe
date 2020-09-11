import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import bolsaCafe from '../assets/bolsaCafe.jpg'
import civeta from '../assets/civeta.jpg'
import italiana from '../assets/CafeteraItaliana.jpg'
import oster from '../assets/CafeteraOster.jpg'

const ProductCard = (props) => {
   
    // const {description, precio, producto, stock, ventas} = props
    return (
        <div >
            <Row className="justify-content-center mt-5 mr-0 ml-0">
                <Card className="ventas mx-3 mt-1" style={{ width: '18rem', height: '' }}>
                    <Card.Img className="catalogo" variant="top" style={{height:"320px", width: "100%" }} src={bolsaCafe} />
                    <Card.Body className="align-content-center">
                        <Card.Title className="text-center">Bolsa 1KG Cafe</Card.Title>
                        <p className="text-center">$120</p>
                        <Card.Text className="text-center">El mejor cafe de Veracruz</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ventas mx-3 mt-1" style={{ width: '18rem', height: '' }}>
                    <Card.Img className="catalogo" variant="top" style={{height:"320px", width: "100%" }} src={civeta} />
                    <Card.Body className="align-content-center">
                        <Card.Title className="text-center">Cafe Civeta</Card.Title>
                        <p className="text-center">$650</p>
                        <Card.Text className="text-center">El Cafe exotico mas rico.</Card.Text>
                   </Card.Body>
                </Card>
                <Card className="ventas mx-3 mt-1" style={{ width: '18rem', height: '' }}>
                    <Card.Img className="catalogo" variant="top" style={{height:"320px", width: "100%" }} src={italiana} />
                    <Card.Body className="align-content-center">
                        <Card.Title className="text-center">Cafetera Italiana</Card.Title>
                        <p className="text-center">$700</p>
                        <Card.Text className="text-center">La mejor cafetera para preparar café al gusto.</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="ventas mx-3 mt-1" style={{ width: '18rem', height: '' }}>
                    <Card.Img className="catalogo" variant="top" style={{height:"320px", width: "100%" }} src={oster} />
                    <Card.Body className="align-content-center">
                        <Card.Title className="text-center">Cafetera Oster</Card.Title>
                        <p className="text-center">$330</p>
                        <Card.Text className="text-center">El mejor cafe de Veracruz</Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}

export default ProductCard
