import {Col, Row, Container, Card, CardBody } from 'reactstrap';


const ProducersPage = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Header</h3>
                    <p>
                filler text
                    </p>
                </Col>
                {/* <Col sm='6'> */}
                    {/* <Card>
                        <CardHeader className='bg-primary text-white'>
                            <h3>Facts at a Glance</h3>
                        </CardHeader>
                        <CardBody>
                            <dl className='row'>
                                    <dt className='col-6'>Founded</dt>
                                    <dd className='col-6'>February 3, 2016</dd>
                                    <dt className='col-6'>No. of Campsites in 2019</dt>
                                    <dd className='col-6'>563</dd>
                                    <dt className='col-6'>No. of Reviews in 2019</dt>
                                    <dd className='col-6'>4388</dd>
                                    <dt className='col-6'>Employees</dt>
                                    <dd className='col-6'>42</dd>
                            </dl>
                        </CardBody>
                    </Card> */}
                {/* </Col> */}
                <Col>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p> I will not follow where the path may lead, but I
                                    will go where there is no path, and I will leave
                                    a trail.
                                </p>
                                <footer className='blockquote-footer'>
                                    Muriel Strode,{' '}
                                    <cite title='Source Title'>
                                        "Wind-Wafted Wild Flowers" - The Open Court,
                                        1903
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProducersPage;
