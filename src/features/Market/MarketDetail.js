import { Card, CardImg, CardText, CardBody, Col, Container, Row, Button } from 'reactstrap';

const MarketDetail = ( {market} ) => {
    const { image, name, description, price } = market;

    return (
        <Container>
        <h1>FEATURED PRODUCT OF THE WEEK</h1>
        <Row>
        <Col md='6' >
            <Card>
                <CardImg src={image} alt={name} />
            </Card>
        </Col>
            <Col md='6' >
            <Card>
                <CardBody>
                    <CardText>{description}</CardText>
                    <CardText tag='h3'>{price}</CardText>
                    <Button>Buy Now</Button>

                    {/* Design Market Detail */}
                </CardBody>
            </Card>

        </Col>
        </Row>
        </Container>
    );
};

export default MarketDetail;