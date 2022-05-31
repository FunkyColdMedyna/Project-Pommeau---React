import { Card, CardImg, CardHeader, CardText, CardBody, Col, Container, Row, Button } from 'reactstrap';

const MarketDetail = ( {market} ) => {
    const { image, name, description, price } = market;

    return (
        <Col md='12' className='m-1'>
            <Card>
                <CardHeader>
                    <h1>FEATURED PRODUCT OF THE WEEK</h1>
                </CardHeader>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                    <CardText tag='h3'>{price}</CardText>
                    <Button>Buy Now</Button>

                    {/* Design Market Detail */}
                </CardBody>
            </Card>
        </Col>
    );
};

export default MarketDetail;