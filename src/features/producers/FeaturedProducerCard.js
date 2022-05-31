import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap'; 
import { selectFeaturedProducer } from './producersSlice';
import React from 'react';

const FeaturedProducerCard = (props) => {
    const producer = selectFeaturedProducer();
    console.log(props);
    const { name, image, description } = props.producer;
    

    return (
        <Card>
            <CardHeader>
                <h3>{name}</h3>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className='col-12'>
                    <img src={image} alt={name} width='200rem' />
                    </Col>
                    <Col className='col-12'>
                            <p> {description}
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