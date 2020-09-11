import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide01 from '../assets/Raiz2.jpg';
import slide02 from '../assets/Cafeto.jpg';
import slide03 from '../assets/CosechaCafe2.jpg';
import slide04 from '../assets/Despulpado.jpg';
import slide05 from '../assets/Tostado.jpg';
import slide06 from '../assets/MolidoCafe.jpg';
import slide07 from '../assets/CafeFinal.jpg';
import './Carrusel.css';

const Carrusel = () => {
    return (

        <div>
                <Carousel className="Carrusel_estilo ">
                    {/*                                         SLIDE 1 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 Carrusel_estilo"
                            src={slide01}
                            alt="Nacimiento"
                        />
                        <Carousel.Caption >
                            <h3 className="tituloCarrusel">El nacimiento de la magia</h3>
                            <p className="parrafoCarrusel d-none d-sm-none d-md-block">
                                Aquí comienza una de las bebidas naturales mas consumidas en el mundo solo por detrás del agua potable.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/*                                         SLIDE 2 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 Carrusel_estilo"
                            src={slide02}
                            alt="Cafeto"
                        />

                        <Carousel.Caption>
                            <h3 className="tituloCarrusel">CAFETO</h3>
                            <p className="parrafoCarrusel d-none d-sm-none d-md-block">
                                El cafeto (Coffea) es el árbol en el cual se generan los granos de café, el cual debe estar protegido por la luz directa del sol para la creación de un buen café.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/*                                         SLIDE 3 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 Carrusel_estilo"
                            src={slide03}
                            alt="Cosecha de cafe"
                        />
                        <Carousel.Caption>
                            <h3 className="tituloCarrusel">COSECHA</h3>
                            <p className="parrafoCarrusel d-none d-sm-none d-md-block">
                                Una o dos veces por año, hordas de hombres y mujeres se ajustan a los canastos de mimbre en sus cintas y caminan entre las plantaciones para recoger los frutos del cafeto.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/*                                         SLIDE 4 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 Carrusel_estilo"
                            src={slide04}
                            alt="Despulpado"
                        />
                        <Carousel.Caption>
                            <h3 className="tituloCarrusel">DESPULPADO</h3>
                            <p className="parrafoCarrusel d-none d-sm-none d-md-block">
                                En términos prácticos se trata de separar las semillas de la cascara y la pulpa.
                                <br/>
                                El método seco, que produce los que se conocen como cafés naturales.
                                <br/>
                                El método húmedo, que genera cafés lavados, es el preferido de las regiones prosperas por que existen hectolitros de agua.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/*                                         SLIDE 5 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 Carrusel_estilo"
                            src={slide05}
                            alt="Tostado"
                        />
                        <Carousel.Caption>
                            <h3 className="tituloCarrusel">TOSTADO</h3>
                            <p className="parrafoCarrusel d-none d-sm-none d-md-block">En pocas palabras, el café verde se vuelca en un gran horno que cuenta con una cámara cilíndrica giratoria que regula las temperaturas exigidas a lo largo del proceso.
                            Al tostarse duplica su volumen, pero pierde una quinta parte de su peso (como palomitas de maíz, se inflan); exuda parte del agua que conserva en su interior; cambia de color hasta volverse beige claro o marrón oscuro, a veces casi negro.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/*                                         SLIDE 6 */}
                    <Carousel.Item>
                        <img
                            className="d-block  w-100 Carrusel_estilo"
                            src={slide06}
                            alt="Molido"
                        />
                        <Carousel.Caption>
                            <h3 className="tituloCarrusel">MOLIDO</h3>
                            <p className="parrafoCarrusel d-none d-sm-none d-md-block">
                                El molido preciso es fundamental: si el grano esta poco molido y queda muy grueso, el agua pasara rápidamente a través de él, no podrá extraer todos sus valores y la bebida quedara poco liviana y poco concentrada; si el grano está demasiado molido y queda muy fino, el agua pasara con mucha dificultad a través de él, disolverá los componentes aromáticos y la bebida quedara amarga.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/*                                         SLIDE 7 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 Carrusel_estilo"
                            src={slide07}
                            alt="Rico Cafe"
                        />
                        <Carousel.Caption>
                            <h3 className="tituloCarrusel">CAFE</h3>
                            <p className="parrafoCarrusel d-none d-sm-none d-md-block">
                                El tónico eficaz contra la modorra o rendimiento instantáneo contra el mal humor.
                                <br />
                                El café lleva más de mil años iluminando la mente y calentando el espíritu.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Carrusel
