import { Container, } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectProducerById } from '../features/producers/producersSlice';
import ProducerDetail from '../features/producers/ProducerDetail';


const ProducerDetailPage = () => {
    const { producerId } = useParams();
    const producer = selectProducerById(producerId);

    return (
        <Container>
                <ProducerDetail producer={producer} />
        </Container>
    );
};

export default ProducerDetailPage;