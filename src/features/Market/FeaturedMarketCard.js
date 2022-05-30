import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap'; 
import Apple4 from '../../app/assets/images/apple4.png';

const FeaturedMarketCard = () => {
    return (
        <Card>
            <CardHeader>
                <h3>Default Featured Market Card</h3>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className='col-12'>
                    <img src={Apple4} alt='orchard picture' width='200rem' />
                    <p>Default Featured Market info goes here. Price, features, etc.</p>
                    </Col>
                    <Col className='col-12'>
                            <p>
                                Description and additional information 
                            </p>
                        </Col>
                </Row>
                <footer>
                    <div>
                        <p>
                           Buy now here
                        </p>
                    </div>
                </footer>
            </CardBody>
        </Card>
    )
};

export default FeaturedMarketCard;