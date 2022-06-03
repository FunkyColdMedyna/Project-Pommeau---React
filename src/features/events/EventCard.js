import { Card, CardTitle, CardBody, CardText, CardImg, Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
// import ApplE from '../../app/assets/images/ApplE.jpeg';
import '../../styles.css'

const EventCard = ({ event }) => {
    const { id, image, name, date, time} = event;

    return(
        <Link to={`${id}`}>
            <Card>
                <CardImg varient='top' className='card-grid'
                    src={image} 
                    alt={name}
                /> 
                <CardBody>
                    <CardTitle tag='h5'>{name}</CardTitle>
                <CardText>
                    <Container>
                        <Row>
                            <Col sm='4'>
                                <p>Event Name:{name}</p>;
                            </Col>
                            <Col sm='4'>
                                <p>Event Date: {date}</p>
                            </Col>
                            <Col sm='4'>
                                <p>Event Time: {time}</p>
                            </Col>
                        </Row>
                    </Container>
                </CardText>
                </CardBody>
            </Card>
        </Link> 
    )
};

export default EventCard;
