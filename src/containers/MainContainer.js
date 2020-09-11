import React, { useState, useEffect } from 'react'
import Carrusel from '../components/Carrusel';
import Card from '../components/MostSold'
import Insta from '../components/Insta'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const MainContainer = () => {
    const [picInsta, setPic] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPic = () => {
        setLoading(true);
        const URI = 'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJWMkFrTGhMbm1aQWtiRkxhR1Y0OGtDWWpFN3VEY0tIa1BsNGMtdzRLenlCRVpZAV0ZAQQWEtSndMcUpyWlFqSkM1QVlpN1ZApMWtxR0lPWjYydWtUaVd1NFkzc20zSnlyMkdQSFl4UGxkZAms4UlJxTAZDZD&resolution=standard_resolution&limit=4'
        axios.get(URI)
            .then((res) => {
                setPic(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                alert(error);
                setLoading(false);
            })
    }

    useEffect(() => {
        // alert('Se esta iniciando un componente');
        getPic();
    }, []);

    return (
        <div>
            <Carrusel />
            <div className="Frase mt-5">
                <h2 className="textFrase text-center">
                    ¡Cuidado!<br /><br />Por que si aun no eres amante del cafe esta bebida te seducira muy pronto.
                </h2>
            </div>
            <Card />
            <h2 className="Frase mt-5 textFrase text-center">¡Siguenos en instagram!</h2>
            <Container>
                <Row className="justify-content-center mt-5 mr-0 ml-0">
            {picInsta.map((pic) => (
                <Insta 
                    caption={pic.caption}
                    media_url={pic.media_url}
                    permalink={pic.permalink}    
                />
            ))}
                </Row>
            </Container>
        </div>
    )
}

export default MainContainer
