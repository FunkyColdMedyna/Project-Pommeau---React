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
                        md='4'
                        key={producer.id}
                        onClick={() => setProducerId(producer.id)}
                    >
                        <ProducerCard producer={producer} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default ProducersList;
