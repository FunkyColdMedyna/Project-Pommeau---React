import EventCard from "./EventCard";
import { Col, Row } from "reactstrap";
import { selectAllEvents } from "./eventsSlice";
import {useSelector} from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";

const EventsList = ({setEventId}) => {
    const events = useSelector( () => selectAllEvents());
    return (
        <Row className="ms-auto">
            {events.map((event) => {
                return (
                    <>
                        <Col 
                            className="my-2"
                            md='12'
                            key={nanoid()}
                            onClick={() => setEventId(event)}
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