// referred to as 'home' 
import {Col, Row, Container, Card, CardBody, } from 'reactstrap';
import FeaturedEventCard from '../features/events/FeaturedEventCard';
import FeaturedProducerCard from '../features/producers/FeaturedProducerCard';
import SubscriptionTiers from '../components/SubscriptionTiers';
import { selectFeaturedProducer } from '../features/producers/producersSlice';

const InCider = () => {
    const producer = selectFeaturedProducer();
    // const { Name, image, description } = producer;

    // const event = selectFeaturedEvent();
    // const { name, image, description } = event;

    return (
        <Container>
            <Row className='row-content'>
                <Col className='col-12'>
                    <h1>In-Cider</h1>
                    <p>
                bringing you news and 'an apple a day'
                    </p>
                </Col>
                <Col className='col-6'>
                    <FeaturedEventCard />
                </Col>
                <Col className='col-6'>
                    <FeaturedProducerCard producer = {producer} />
                </Col>
                <Col className='col-12 m-3'>
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
                    <SubscriptionTiers />
                </Col>
            </Row>
        </Container>
    );
};

export default InCider;
