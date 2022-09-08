import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';
// import EventForm from '../../components/EventForm.js';
import { useState } from 'react';


const EventDetail = ( { event } ) => {
    const { image, name, description } = event;
    // const [eventFormOpen, setEventFormOpen] = useState(false);

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText className='card-text-description'>{description}</CardText>
                </CardBody>
                
            </Card>
        </Col>
    );
};

export default EventDetail;