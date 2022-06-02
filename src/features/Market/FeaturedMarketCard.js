import { Col, Row, Card, CardBody, CardHeader, CardFooter } from 'reactstrap'; 
// import Apple4 from '../../app/assets/images/apple4.png';
import '../../styles.css';

const FeaturedMarketCard = ( marketId ) => {
    const { id, image, name, description } = marketId;
    return (
        <Card>
            <CardHeader>
                <h3>{ name }</h3>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className='col-12'>
                        <img src={image} alt={name} class='card-detail' />
                    </Col>
                    <Col className='col-12'>
                        <p>{description}</p>
                    </Col>
                </Row>
                <CardFooter>
                    <div>
                        <Button onclick= '' >
                           Buy now here
                        </Button>
                    </div>
                </CardFooter>
            </CardBody>
        </Card>
    )
};

export default FeaturedMarketCard;