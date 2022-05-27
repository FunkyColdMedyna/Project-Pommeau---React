// referred to as 'home' 
import {Col, Row, Container, Card, CardBody, CardHeader} from 'reactstrap';
import FeaturedEventCard from '../components/FeaturedEventCard';

const InCider = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col className='col-12'>
                    <h1>In-Cider</h1>
                    <p>
                bringing you news and 'an apple a day'
                    </p>
                    <img src='./app/apple9.png'></img>
                </Col>
                <Col className='col-12'>
                    <FeaturedEventCard />
                </Col>
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote m-2'>
                                <p> I will not follow where the path may lead, but I
                                    will go where there is no path, and I will leave
                                    a trail.
                                </p>
                                <footer className='blockquote-footer'>
                                    Muriel Strode,{' '}
                                    <cite title='Source Title'>
                                        "Wind-Wafted Wild Flowers" - The Open Court,
                                        1903
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col mt='3'>
                    <Card>
                        <CardHeader >
                            <h3>Subscription Tiers</h3>
                        </CardHeader >
                        <CardBody >
                            <Row>
                                <Col sm='4'>
                                    <h4>Free</h4>
                                    <p>Details about free service</p>
                                    {/* table? */}
                                </Col>
                                <Col className='sm-4'>
                                    <h4>Cheap</h4>
                                    <p>Details about middle tier service</p>
                                </Col>
                                <Col sm='4'>
                                    <h4>Expensive</h4>
                                    <p>details about Expensive/top tier service</p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default InCider;
