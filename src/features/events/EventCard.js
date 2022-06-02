import { Card, CardTitle, CardBody, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
// import ApplE from '../../app/assets/images/ApplE.jpeg';
import '../../styles.css'

const EventCard = ({ event }) => {
    const { id, image, name } = event;

    return(
        <Link to={`${id}`}>
            <Card>
                <CardImg varient='top' className='card-grid'
                    src={image} 
                    alt={name}
                /> 
                <CardBody>
                    <CardTitle tag='h5'>{name}</CardTitle>
                <CardText>
                    {/* {description} only x amount of characters */}
                </CardText>
                </CardBody>
            </Card>
        </Link> 
    )
};

export default EventCard;
