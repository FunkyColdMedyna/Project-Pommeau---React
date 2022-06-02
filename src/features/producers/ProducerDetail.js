import { Card, CardImg, CardText, CardBody, Col, CardTitle, CardImgOverlay, Row, Container} from 'reactstrap';
import '../../styles.css'

const ProducerDetail = ( {producer} ) => {
    const { image, name, description } = producer;

    return (
        <>
        <Container>
        <Row>
        <Col md='6'>
            <h3>{name}</h3>
                <p>Quick Fact</p>
                <p>Email</p>
                <p>Website</p>
                <p>Map</p>
                <p>Social</p>
            </Col>
            <Col md='6'>
            <img src={image} className='card-detail'/>
            </Col>
        </Row>
        <Row>
            <Col md='12'>
            <p>{description}</p>
            </Col>
        </Row>
        <Row>
            <Col md='6'>
            </Col>

            <Col md='6'>
            <h5>Producer Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
            </Col>
        </Row>
        </Container>
      
        </>
        // <Col md='12' className='m-4'>
        //     <Card>
        //         <CardImg 
        //         className='card-detail'
        //         top src={image} 
        //         alt={name} />
        //         <CardBody>
        //             <CardText>{description}</CardText>
        //             {/* add links to external producer sites . google maps. etc. producer contact info */}
        //         </CardBody>
        //         <CardImgOverlay>
        //             <CardTitle>{name}</CardTitle>
        //         </CardImgOverlay>
        //     </Card>

        // </Col>
    );
};

export default ProducerDetail;