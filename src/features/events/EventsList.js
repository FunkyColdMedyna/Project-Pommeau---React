import EventCard from "./EventCard";
import { Col, Row } from "reactstrap";
import { selectAllEvents } from "./eventsSlice";

const EventsList = ({setEventId}) => {
    const events = selectAllEvents();
    return (
        <Row className="ms-auto">
            {events.map((event) => {
                return (
                    <>
                        <Col 
                            className="my-2"
                            md='12'
                            key={event.id}
                            onClick={() => setEventId(event.id)}
                        >
                            <EventCard event={event} />
                        </Col>
                    </>
                );
            })}
        </Row>
    )
};

export default EventsList;