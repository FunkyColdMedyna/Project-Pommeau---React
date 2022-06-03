import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Col,
  CardTitle,
  CardImgOverlay,
  Row,
  Container,
} from "reactstrap";
import "../../styles.css";

const ProducerDetail = ({ producer }) => {
  const { image, name, description } = producer;

  return (
      <Container>
        <Row>
          <Col className="col-12">
            <Card>
                <CardTitle>
                    <h2>{name}</h2>
                    {/* <h6>Quick Links</h6> */}
                </CardTitle>
                <CardBody>
                    <Container>
                        <Row>
                            <Col>
                                <CardImg src={image} className="card-detail" />
                            </Col>
                            <Col md='6'>
                                <a
                                role="button"
                                className="btn btn-link"
                                href="mailto:notreal@notreal.com"
                                >
                                <i className="fa fa-envelope-o" /> Email:
                                </a>
                                <a role="button" className="btn btn-link" href="tel:+12065551234">
                                <i className="fa fa-phone" /> 1-206-555-1234
                                </a>
                                <br />
                                <br />
                                <a
                                className="btn btn-social-icon btn-facebook"
                                href="http://www.facebook.com/"
                                >
                                <i className="fa fa-facebook" />
                                </a>{" "}
                                <a
                                className="btn btn-social-icon btn-twitter"
                                href="http://twitter.com/"
                                >
                                <i className="fa fa-twitter" />
                                </a>{" "}
                                <br />
                                <br />
                                <a
                                className="btn btn-social-icon "
                                href="http://www.maps.google.com"
                                >
                                <i className="fa fa-map-marker" />
                                </a>{" "}
                                <br />
                                <br />
                                <p>{description}</p>
                            </Col>
                        </Row>
                    </Container>
                    {/* <Container>
                        <p>{description}</p>
                    </Container> */}
                </CardBody>
            </Card>
            </Col>
        </Row>
    </Container> 
    );
};

export default ProducerDetail;
