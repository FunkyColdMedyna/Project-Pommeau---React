import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap'; 
import Orchard1 from '../app/assets/images/orchard1.png';

const FeaturedEventCard = () => {
    return(
            <Card>
                <CardHeader>
                    <h3>Featured Events Card</h3>
                </CardHeader>
                <CardBody >
                    <Row>
                        <Col className='col-12'>
                        {/* <h1>Header / Orchard</h1> */}
                        <img src={Orchard1} alt='orchard with apples' width='200rem' className='align-items self-center'/>
                        <p> Content filler text. Lorum Ipsum</p>
                        </Col>
                        <Col className='col-12'>
                            <p>
                                Description and additional information 
                                <br></br>
                                contact
                                <br></br>
                                phone num
                                <br></br>
                                email 
                                <br></br>
                                google.maps
                                <br></br>
                                website
                            </p>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
    )
};

export default FeaturedEventCard;

