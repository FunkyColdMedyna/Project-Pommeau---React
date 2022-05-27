import { Col, Row, Card, CardBody, CardHeader } from 'reactstrap';

const SubscriptionTiers = () => {

    return (
        <Card>
            <CardHeader >
                <h3>Subscription Tiers</h3>
            </CardHeader >
            <CardBody >
                <Row>
                    <Col sm='4'>
                        <h4>Free</h4>
                        <p>Details about free service</p>
                        {/* table? */}
                    </Col>
                    <Col className='sm-4'>
                        <h4>Cheap</h4>
                        <p>Details about middle tier service</p>
                    </Col>
                    <Col sm='4'>
                        <h4>Expensive</h4>
                        <p>details about Expensive/top tier service</p>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
};

export default SubscriptionTiers;