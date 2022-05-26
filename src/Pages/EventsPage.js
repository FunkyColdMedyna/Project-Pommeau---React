import {Col, Row, Container } from 'reactstrap';
import EventCard from '../components/EventCard';

const EventsPage = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col mt='1'>
                    <h3>Events</h3>
                    <p>
                filler text
                    </p>
                </Col>
            </Row>
            <Row> 
            {/* featured news first col-12 */}
                <Col m='1'>
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
