import {Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
 return(
     <footer className='site-footer navBar-main'>
         <Container>
             <Row>
                 <Col xs={{ size: 4, offset: 2 }} sm='2'>
                    <h5>Links</h5>
                    <ul className='list-unstyled'>
                        <li>
                            <Link to ='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/producers'>Producers</Link>
                        </li>
                        <li>
                            <Link to='/events'>Events</Link>
                        </li>
                        <li>
                            <Link to='/market'>Market</Link>
                        </li>
                    </ul>
                 </Col>

                 <Col xs='6' sm='3' className='text-center'>
                 <h5>Social</h5>
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

                 <Col sm='4' className='text-center'>
                 <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12345678910'
                        >
                            <i className='fa fa-phone' /> 1-234-567-8910
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> info@projectpommeau.com
                        </a>
                 </Col>
             </Row>
         </Container>
     </footer> 
 )
};

export default Footer;