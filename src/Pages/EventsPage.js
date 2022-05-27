import {Col, Row, Container } from 'reactstrap';
import EventCard from '../components/EventCard';
import FeaturedEventCard from '../components/FeaturedEventCard';

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
                <Col>
                    <FeaturedEventCard />
                </Col>
            </Row>
            <Row>
                <Col m='1' >
                    <EventCard />
                </Col>
            </Row>
            <Row>
                <Col mx='1' sm='6'>
                    <EventCard />
                </Col>
                <Col mx='1' sm='6'>
                    <EventCard />
                </Col>
            </Row>
        </Container>
    );
};

export default EventsPage;
