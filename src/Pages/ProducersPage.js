import {Col, Row, Container, Card, CardBody,  } from 'reactstrap';
import ProducersList from '../features/producers/ProducersList';
// import ProducerDetail from '../features/producers/ProducerDetail';
import { selectProducerById } from '../features/producers/producersSlice';
// import { selectRandomProducer } from '../features/producers/producersSlice';
// import ProducerCard from '../features/producers/ProducerCard';
import { useState } from 'react';

const ProducersPage = () => {
    const [producerId, setProducerId] = useState(0);

    const selectedProducer = selectProducerById(producerId);
     // const selectedProducer = selectRandomProducer();
    // const toggleProducer = () => {
    //     selectedProducer = selectRandomProducer();
    //     console.log(selectedProducer)
    // };

    return (
        <Container className='background-main'>
            <Row className='row-content'>
                <Col className= 'col-12 text-header'>
                    <h2>Producers</h2>
                    <p>
                find out who is making and growing the product
                    </p>
                </Col>
                {/* <Col className='col-12 my-2'>
                    <ProducerDetail producer={selectedProducer} />
                </Col> */}
                <Col>
                    <ProducersList setProducerId={setProducerId}/>
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
