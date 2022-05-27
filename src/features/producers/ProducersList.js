import { PRODUCERS } from "../../app/shared/PRODUCERS";
import ProducerCard from "./ProducerCard";
import { Col, Row } from "reactstrap";

const ProducersList = () => {
    return (
        <Row className="ms-auto">
            {PRODUCERS.map((producer) => {
                return (
                    <Col 
                        md='5' 
                        className='m-4' 
                        key={producer.id}
                    >
                        <ProducerCard producer={producer} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default ProducersList;
