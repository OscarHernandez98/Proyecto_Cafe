import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cafe1 from '../assets/cafe1.png'
import cafe2 from '../assets/cafe2.png'
import cafe3 from '../assets/cafe3.jpg'
import cafetera1 from '../assets/CafeteraItaliana.jpg'
import cafetera2 from '../assets/CafeteraOster.jpg'
import cafetera3 from '../assets/CafeteraKrups.jpg'
import accesorio1 from '../assets/lechera.jpg'
import accesorio2 from '../assets/MolidoCafe.jpg'
import accesorio3 from '../assets/juego de tazas.jpg'
import './ShopContainer.css'

const ShopContainer = () => {
  return (
    <main className="background">
      <div className="divShop">
        <section className="intro-section">
          <div className="container text-center">
            <div className="row">
              <div className="col-xl-10 offset-xl-1 tienda">
                <h2 className="section-title">Tienda en Línea</h2>
                <br />
                <h6 className="section-title tienda">Aquí podras encontrar todos nuestros productos que tenemos para ti</h6>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
        <CardDeck>

          {/* cafe1 */}
          <Card>
            <Card.Img variant="top" src={cafe1} />
            <Card.Body>
              <Card.Title>Cafe Chiapaneco</Card.Title>
              <Card.Text>
              Con este producto podrás probar alguno de nuestros cafés orgánicos en una caja con 500 gramos de café orgánico certificado además de un souvenir de Chiapas
              </Card.Text>
            </Card.Body>
            <Card.Footer>
             <Button variant="outline-dark">Agregar al carrito</Button>
            </Card.Footer>
          </Card>

         {/* cafe2 */}
          <Card>
            <Card.Img variant="top" src={cafe2} />
            <Card.Body>
              <Card.Title>Cafe Puro 100% Arabica</Card.Title>
              <Card.Text>
              Cada uno de nuestros granos de café cuenta con su historia propia, fincas que se encuentran en lugares secretos rodeadas por una vegetación intensa característica de nuestro México.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-dark">Agregar al carrito</Button>
            </Card.Footer>
          </Card>

        {/* cafe3 */}
          <Card>
            <Card.Img variant="top" src={cafe3} />
            <Card.Body>
              <Card.Title>Cafe de Costa Rica</Card.Title>
              <Card.Text>
              Café Gourmet de Costa Rica 100% Arábica. 1 kg. Kirkland Signature Tostado: Oscuro especial que permite disfrutar la dulzura y viveza de este café.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-dark">Agregar al carrito</Button>
            </Card.Footer>
          </Card>
        </CardDeck>
        <br/>
        <br/>

        {/* cafetera1 */}
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={cafetera1} />
            <Card.Body>
              <Card.Title>Cafetera Italiana</Card.Title>
              <Card.Text>
              Esta cafetera espresso para estufa encarna la elegancia del diseño para producir un espresso auténtico en solo minutos.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-dark">Agregar al carrito</Button>
            </Card.Footer>
          </Card>

          {/* cafetera2 */}
          <Card>
            <Card.Img variant="top" src={cafetera2} />
            <Card.Body>
              <Card.Title>Cafetera Oster</Card.Title>
              <Card.Text>
              Si estás planeando una tarde con amigos, el café está invitado de antemano. Nuestras cafeteras programables lo hacen todo más fácil. Desde la selección de la intensidad del café hasta su función de apagado automático, la tecnología incorporada te ayuda a relajarte y disfrutar más el encuentro.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-dark">Agregar al carrito</Button>
            </Card.Footer>
          </Card>

          {/* cafetera3 */}
          <Card>
            <Card.Img variant="top" src={cafetera3} />
            <Card.Body>
              <Card.Title>Cafetera Krups</Card.Title>
              <Card.Text>
              Elabora un delicioso capuchino solo pulsando un botón en tu cafetera Krups Espressería automática Premium Inox además con sus 3 niveles de temperarura permiten extraer el verdadero sabor del café, sus 15 bares logran la extracción perfecta. Con 1450W y un molino integrado que logra 3 niveles de molienda, que te permitirán crear el café perfecto.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-dark">Agregar al carrito</Button>
            </Card.Footer>
          </Card>
        </CardDeck>
        <br/>
        <br/>

        {/* accesorios1 */}
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={accesorio1} />
            <Card.Body>
              <Card.Title>Jarra de espuma</Card.Title>
              <Card.Text>
                TEste juego de jarra de espuma de acero inoxidable de capacidad de 12 onzas y combo de Tamper son las herramientas perfectas para obtener esa espuma cremosa, espumosa sobre tu café o café de la mañana. Disfruta de tu próxima pausa de café como un profesional a precios directos de fábrica New Star Foodservice.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-dark">Agregar al carrito</Button>
            </Card.Footer>
          </Card>

          {/* accesorios2 */}
          <Card>
            <Card.Img variant="top" src={accesorio2} />
            <Card.Body>
              <Card.Title>Molino de cafe manual</Card.Title>
              <Card.Text>
              Los granos de café contienen aceite, por lo que el molinillo debe limpiarse después de moler. De lo contrario, la grasa se acumulará y se pudrirá después de mucho tiempo. Incluso los granos de alta calidad se muelen hasta formar un polvo extraño. El molinillo debe limpiarse después de cada uso.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-dark">Agregar al carrito</Button>
            </Card.Footer>
          </Card>

          {/* accesorios3 */}
          <Card>
            <Card.Img variant="top" src={accesorio3} />
            <Card.Body>
              <Card.Title>Juego de tazas para cafe</Card.Title>
              <Card.Text>
              1. Cada taza mide 7,6 cm de diámetro y 5,3 cm de altura, y los platos miden 12,7 cm de diámetro, lo que los hace ideales para degustar espresso. Bonito aspecto clásico, adecuado para regalos a amigos y familiares.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-dark">Agregar al carrito</Button>
            </Card.Footer>
          </Card>
        </CardDeck>

      </div>
    </main>

  )
}

export default ShopContainer
