import { Container, Row, Col } from 'reactstrap';
import '../../styles.css';

const ReviewCard = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>User Rating</h2>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <p>4.1 average based on 254 reviews.</p>
                    {/* <hr style={'border:3px solid #f1f1f1'}></hr> */}
                </Col>
            </Row>
            <Row>
                <Col>
                <div className="side">
                    <div>5 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-5"></div>
                    </div>
                </div>
                <div className="side right">
                    <div>150</div>
                </div>
                <div className="side">
                    <div>4 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-4"></div>
                    </div>
                </div>
                <div className="side right">
                    <div>63</div>
                </div>
                <div className="side">
                    <div>3 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-3"></div>
                    </div>
                </div>
                <div className="side right">
                    <div>15</div>
                </div>
                <div className="side">
                    <div>2 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-2"></div>
                    </div>
                </div>
                <div className="side right">
                    <div>6</div>
                </div>
                <div className="side">
                    <div>1 star</div>
                </div>
                <div className="middle">
                    <div className="bar-container">
                    <div className="bar-1"></div>
                    </div>
                </div>
                <div className="side right">
                    <div>20</div>
                </div>
                </Col>
            </Row>
        </Container>
    )
};

export default ReviewCard;