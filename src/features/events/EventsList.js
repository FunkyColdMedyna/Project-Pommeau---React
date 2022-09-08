import EventCard from "./EventCard";
import { Col, Row } from "reactstrap";
import { selectAllEvents } from "./eventsSlice";
// import {useSelector} from 'react-redux';
// import { nanoid } from "@reduxjs/toolkit";

const EventsList = ({ setEventId }) => {
    const events = selectAllEvents();

    return (
        <Row className="ms-auto">
            {events.map((event) => {
                return (
                        <Col 
                            md='5'
                            className="m-4"
                            key={event.id}
                            onClick={() => setEventId(event.id)}
                        >
                            <EventCard event={event} />
                        </Col>
                );
            })}
        </Row>
    );
};

export default EventsList;