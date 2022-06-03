import {Col, Row, Container } from 'reactstrap';
import EventsList from '../features/events/EventsList.js';
// import EventCard from '../features/events/EventCard.js'
// import FeaturedEventCard from '../features/events/FeaturedEventCard.js';
import { useState } from 'react';
import { selectEventById } from '../features/events/eventsSlice.js';

const EventsPage = () => {
    const [eventId, setEventId] = useState(0);
    const selectedEvent = selectEventById(eventId);
    
    return (
        <Container>
            <Row className='row-content text-header'>
                <Col mt='1'>
                    <h3>Events</h3>
                    <p>
                Whats happening? ... or some would say...what poppin'?
                    </p>
                </Col>
            </Row>
            <Row> 
                {/* <Col className='sm-6'>
                    <div>
                        <p>Calendar Placeholder</p>
                    </div>
                </Col> */}
                <Col>
                    <EventsList setEventId={setEventId} />
                </Col>
            </Row>
        </Container>
    );
};

export default EventsPage;
