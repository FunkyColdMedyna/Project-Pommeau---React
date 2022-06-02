import { Card, CardTitle, CardBody, CardText, CardImg,} from 'reactstrap';
import { Link } from 'react-router-dom';


const MarketCard = ({ market }) => {
    const { id, image, name } = market;
    return (
        <Link to={id}>
            <Card>
                <CardImg varient='top' 
                    src={image} 
                    alt={name}
                /> 
                <CardBody>
                    <CardTitle tag='h5'>{name}</CardTitle>
                <CardText>
                    {/* {description} (only first x amount of characters) */}
                </CardText>
                </CardBody>
            </Card>
        </Link> 
    )
};
export default MarketCard;