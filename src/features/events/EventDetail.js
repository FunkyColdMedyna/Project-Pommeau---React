import { Card, CardImg, CardText, CardBody, Col, CardTitle, Container, Row } from 'reactstrap';
import EventForm from '../../components/EventForm.js';
// import { useState } from 'react';

const EventDetail = ( { event } ) => {
    const { image, name, description, date, time } = event;
    // const[eventFormOpen, setEventFormOpen] = useState(false);

    return (
        <>
            <Row>
                <Col md='12' className='m-4'>
                    <Card>
                        <CardTitle>
                            <Container>
                                <Row>
                                    <Col className='col-6 mt-3 ml-2'>
                                        <h2>{name}</h2>
                                    </Col>
                                    <Col className='col-6'>
                                        <h4>{date}</h4>
                                        <h4>{time}</h4>
                                    </Col>
                                </Row>
                            </Container>
                        </CardTitle>
                        <CardImg top src={image} alt={name} className='card-detail ' />
                        <CardBody>
                            <CardText>
                                {description}
                            </CardText>
                            {/* add links to external producer sites . google maps. etc. producer contact info */}
                        </CardBody>
                        </Card>
                </Col>
            </Row>
            <Row>
                  <EventForm />
            </Row>
        </>
    );
};

export default EventDetail;