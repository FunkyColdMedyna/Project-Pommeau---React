import {Col, Row, Container, Card, CardBody,  } from 'reactstrap';
// import ProducerCard from '../features/producers/ProducerCard';
import ProducersList from '../features/producers/ProducersList';
// import { selectRandomProducer } from '../features/producers/producersSlice';
import ProducerDetail from '../features/producers/ProducerDetail';
import { selectProducerById } from '../features/producers/producersSlice';
// import { useState } from 'react';

const ProducersPage = () => {
    // const selectedProducer = selectRandomProducer();
    // const [producerId, setProducerId] = useState(0);
    // const selectedProducer = selectProducerById(producerId)
    
    const toggleProducer = () => {
        selectedProducer = selectRandomCampsite();
    };

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
                    {/* <ProducerDetail producer={} /> */}
                </Col>
                <Col>
                <ProducersList setProducerId={setProducerId} />
                </Col>
                {/* <Col className='col-6 my-1'>
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
                </Col> */} 

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
