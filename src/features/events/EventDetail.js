import { Card, CardImg, CardText, CardBody, Col, Button, CardTitle, Container, Row } from 'reactstrap';

const EventDetail = ( { event } ) => {
    const { image, name, description, date, time } = event;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardTitle>
                    <Container>
                        <Row>
                            <Col className='col-6 mt-3 ml-2'>
                                <h2>{name}</h2>
                            </Col>
                            <Col className='col-6'>
                                <h4>{date}</h4>
                                <h4>{time}</h4>
                            </Col>
                        </Row>
                    </Container>
                </CardTitle>
                <CardImg top src={image} alt={name} className='card-detail ' />
                <CardBody>
                    <CardText>
                        {description}
                    </CardText>
                    {/* add links to external producer sites . google maps. etc. producer contact info */}
                </CardBody>
                <Button outline color='primary'type='submit' >
                    Sign Up
                </Button>{' '}
            </Card>
        </Col>
    );
};

export default EventDetail;