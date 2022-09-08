import { useState } from 'react';
import {Col, Row, Container } from 'reactstrap';
import EventsList from '../features/events/EventsList.js';
import { selectEventById } from '../features/events/eventsSlice.js';
import EventDetail from '../features/events/EventDetail.js';
// import EventCard from '../features/events/EventCard.js'
// import FeaturedEventCard from '../features/events/FeaturedEventCard.js';


const EventsPage = () => {
    const [eventId, setEventId] = useState(0);
    let selectedEvent = selectEventById(eventId);

    return (
        <Container>
            <Row className='row-content text-header'>
                <Col sm='12'>
                    <EventsList setEventId={setEventId}/>
                </Col>
                {/* <Col sm= '7' md= '5'>
                    <EventDetail event={selectedEvent} />
                </Col> */}
            </Row>
        </Container>
    );
};

export default EventsPage;
