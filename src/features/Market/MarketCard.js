import { Card, CardTitle, CardBody, CardText, CardImg,} from 'reactstrap';



const MarketCard = ({ market }) => {
    const { id, image, name, description } = market;
    return (
        // <Link to={id}>
            <Card>
                <CardImg varient='top' 
                    src={image} 
                    alt={name}
                /> 
                <CardBody>
                    <CardTitle tag='h5'>{name}</CardTitle>
                <CardText>
                    {/* {description} */}
                </CardText>
                </CardBody>
            </Card>
     ) ;
    /* </Link> */
    
};

export default MarketCard;