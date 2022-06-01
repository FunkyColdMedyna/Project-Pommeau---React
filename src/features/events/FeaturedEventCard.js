import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap'; 
import { selectFeaturedEvent } from './eventsSlice';
import React from 'react';

const FeaturedEventCard = (props) => {
    const event = selectFeaturedEvent();
    console.log(props);
    const { name, image, description } = props.event;

    return(
            <Card>
                <CardHeader>
                    <h3>{name}</h3>
                </CardHeader>
                <CardBody >
                    <Row>
                        <Col className='col-12'>
                        <img src={image} alt={name} width='200rem' className='align-items self-center'/>
                        </Col>
                        <Col className='col-12'>
                            <p>{description}</p>
                            {/* <p>
                                Description and additional information 
                                <br></br>
                                contact
                                <br></br>
                                bio
                                <br></br>
                                phone num
                                <br></br>
                                email 
                                <br></br>
                                google.maps
                                <br></br>
                                website
                            </p> */}
                        </Col>
                    </Row>
                </CardBody>
            </Card>
    )
};

export default FeaturedEventCard;

