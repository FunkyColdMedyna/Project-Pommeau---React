import { Col, Card, CardBody, CardHeader } from 'reactstrap'; 

const EventCard = (props) => {
    return(
        <Col>
            <Card>
                <CardHeader>
                    <h1>Default Events Card</h1>
                </CardHeader>
                <CardBody >
                    <h1>Header</h1>
                    <p> Content filler text. Lorum Ipsum</p>
                </CardBody>
            </Card>
        </Col>
    )
};

export default EventCard;
