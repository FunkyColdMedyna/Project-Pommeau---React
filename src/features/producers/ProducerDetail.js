import { Card, CardImg, CardText, CardBody, Col, CardTitle, CardImgOverlay } from 'reactstrap';

const ProducerDetail = ( {producer} ) => {
    const { image, name, description } = producer;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg 
                className='card-detail'
                top src={image} 
                alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                    {/* add links to external producer sites . google maps. etc. producer contact info */}
                </CardBody>
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>

        </Col>
    );
};

export default ProducerDetail;