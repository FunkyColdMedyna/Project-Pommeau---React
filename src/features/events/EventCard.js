import { Col, Card, CardBody, CardHeader } from 'reactstrap'; 
import ApplE from '../../app/assets/images/ApplE.jpeg';

const EventCard = () => {
    return(
        <Col>
            <Card>
                <CardHeader>
                    <h1>Default Events Card</h1>
                </CardHeader>
                <CardBody >
                    <h1>Header</h1>
                    <p> Content filler text. Lorum Ipsum</p>
                    <img src={ApplE} alt='low quality apple jpeg file' width='100rem' /> 
                </CardBody>
            </Card>
        </Col>
    )
};

export default EventCard;
