import {Col, Row, Container, Card, CardBody } from 'reactstrap';
import Apple10 from '../app/assets/images/apple10.png';


const AboutPage = () => {
    return (
        <Container>
            <Row className='row-content'>
                <Col className='col-12'>
                    <h3>About Us</h3>
                    <p>
                filler text below:
                    </p>
                </Col>

                <Col>
                    <p>Lorem ipsum dolor sit amet, ad atqui nonumes sea, stet altera fierent mel ad. An modus   nullam copiosae sea, alia veri definitionem nec no, mollis integre maiorum vix cu. Et nam habeo errem laboramus. Vidit doctus vim et, summo falli menandri te vim, eum vidisse prodesset sadipscing no. Accusam mandamus mediocritatem no eos, nemore ornatus in ius. 
                    </p>
                    <p>
                    At ius postea fierent contentiones, ius no graecis mediocrem intellegebat. Illud clita nec an. Wisi iusto ad nam, mel populo adipiscing ei. No per idque nostrud saperet. Ex exerci antiopam pro, cu ius utamur equidem consequat. Dicit omnium disputationi an per, eam etiam tation no. Tale omnis repudiare an vix, eum fugit volumus scaevola te. 
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={Apple10} alt='nig apple' width='500'/>
                </Col>
                <Col className='col-12'>
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

export default AboutPage;
