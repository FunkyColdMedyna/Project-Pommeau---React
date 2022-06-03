import {Col, Row, Container, Card, CardBody } from 'reactstrap';
import MarketsList from '../features/market/MarketsList.js';
import MarketDetail from '../features/market/MarketDetail.js';
import { selectMarketById } from '../features/market/marketsSlice.js';
import { useState } from 'react';



const MarketPage = () => {
    const [MarketId, setMarketId] = useState(0);

    const selectedMarket = selectMarketById(MarketId);
    return (
        <Container>
            <Row className='row-content'>
                <Col className='col-12 text-header'>
                    <h1>FEATURED PRODUCT OF THE WEEK</h1>
                </Col>
                <Col className='col-12 my-2'>
                    <MarketDetail market={selectedMarket} />
                </Col>
                <br/>
                <br/>
                <Col className='col-12 text-header mt-4'>
                    <h1>OTHER PRODUCTS:</h1>
                </Col>
                <Col>
                    <MarketsList setMarketId={setMarketId}/>
                </Col>
            </Row>

            <Row>
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

export default MarketPage;
