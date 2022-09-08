import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedEvent } from '../events/eventsSlice';
import { selectFeaturedProducer } from '../producers/producersSlice';

const DisplayList = () => {
    const items = [selectFeaturedEvent(), selectFeaturedProducer()];

    return (
        <Row>
            {items.map((item, idx) =>{
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default DisplayList;