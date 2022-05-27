import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap'; 
import Apple4 from '../../app/assets/images/apple4.png';

const FeaturedProducerCard = () => {
    return (
        <Card>
            <CardHeader>
                <h3>Default Featured Producer Card</h3>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className='col-12'>
                    <img src={Apple4} alt='orchard picture' width='200rem' />
                    <p>Default Featured Producer info goes here. Bio / stats etc.</p>
                    </Col>
                    <Col className='col-12'>
                            <p>
                                Description and additional information 
                                <br></br>
                                contact
                                <br></br>
                                phone num
                                <br></br>
                                email 
                                <br></br>
                                google.maps
                                <br></br>
                                website
                            </p>
                        </Col>
                </Row>
                <footer>
                    <div>
                        <p>
                            links for producer here
                        </p>
                    </div>
                </footer>
            </CardBody>
        </Card>
    )
};

export default FeaturedProducerCard;