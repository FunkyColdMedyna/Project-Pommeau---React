import {Col, Row, Container } from 'reactstrap';
import EventsList from '../features/events/EventsList.js';
// import EventCard from '../features/events/EventCard.js'
// import FeaturedEventCard from '../features/events/FeaturedEventCard.js';

const EventsPage = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col mt='1'>
                    <h3>Events</h3>
                    <p>
                Whats happening? ... or some would say...what poppin'?
                    </p>
                </Col>
            </Row>
            <Row> 
                <Col className='sm-6'>
                    <div>
                        <p>Calendar Placeholder</p>
                    </div>
                </Col>
                <Col className='sm-6'>
                    <EventsList />
                </Col>
            </Row>
        </Container>
    );
};

export default EventsPage;
