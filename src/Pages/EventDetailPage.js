import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectEventById } from '../features/events/eventsSlice';
import EventDetail from '../features/events/EventDetail';

const EventDetailPage = () => {
    const { eventId } = useParams();
    const event = selectEventById(eventId);

    return (
        <Container>
            <Row>
                <EventDetail event={event} />
            </Row>
        </Container>
    );
};

export default EventDetailPage;