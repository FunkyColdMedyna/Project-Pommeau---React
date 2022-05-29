import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const EventDetail = ( {event} ) => {
    const { image, name, description } = event;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                    {/* add links to external producer sites . google maps. etc. producer contact info */}
                </CardBody>
            </Card>
        </Col>
    );
};

export default EventDetail;