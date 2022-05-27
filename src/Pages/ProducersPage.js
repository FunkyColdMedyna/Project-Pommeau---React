import {Col, Row, Container, Card, CardBody } from 'reactstrap';
import ProducerCard from '../components/ProducerCard';
import FeaturedProducerCard from '../components/FeaturedProducerCard';


const ProducersPage = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col className= 'col-12'>
                    <h2>Producers</h2>
                    <p>
                find out who is making and growing the product
                    </p>
                </Col>
                <Col className='col-12 my-2'>
                    <FeaturedProducerCard />
                </Col>
                <Col className='col-6 my-1'>
                    <ProducerCard />
                </Col>
                <Col className='col-6 my-1'>
                        <ProducerCard />
                </Col>
                <Col className='col-6 my-1'>
                        <ProducerCard />
                </Col>
                <Col className='col-6 my-1'>
                        <ProducerCard />
                </Col>

                <Col className='col-12'>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
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
        </Container>
    );
};

export default ProducersPage;
