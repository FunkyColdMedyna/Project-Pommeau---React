// import { PRODUCERS } from "../../app/shared/PRODUCERS";
import ProducerCard from "./ProducerCard";
import { Col, Row } from "reactstrap";
import { selectAllProducers } from "./producersSlice";

const ProducersList = ({setProducerId}) => {
    const producers = selectAllProducers();
    return (
        <Row className="ms-auto">
            {producers.map((producer) => {
                return (
                    <Col 
                        md='3'
                        key={producer.id}
                        onClick={() => setProducerId(producer.id)}
                    >
                        <ProducerCard producer={producer} className="m-1 "/>
                    </Col>
                );
            })}
        </Row>
    )
};

export default ProducersList;
