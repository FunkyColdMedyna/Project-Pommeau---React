import { Card, CardImg, CardText, CardBody, Col, CardImgOverlay, CardTitle } from 'reactstrap';

const EventDetail = ( { event } ) => {
    const { image, name, description } = event;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardTitle><h2>{name}</h2></CardTitle>
                <CardImg top src={image} alt={name} className='card-detail ' />
                <CardBody>
                    <CardText>{description}</CardText>
                    {/* add links to external producer sites . google maps. etc. producer contact info */}
                </CardBody>
                {/* <CardImgOverlay>
                    
                </CardImgOverlay> */}
            </Card>
        </Col>
    );
};

export default EventDetail;