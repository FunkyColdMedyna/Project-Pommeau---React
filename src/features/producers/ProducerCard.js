// import React from "react";
// import { Card, CardHeader, CardBody } from 'reactstrap';
// import Apple6 from '../../app/assets/images/apple6.png';
import { Card, CardTitle, CardBody, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles.css'

const ProducerCard = ({ producer }) => {
    const { id, image, name, } = producer;
    return (
        <Link to={`${id}`}>
            <Card >
                <CardImg 
                    className='card-grid'
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
    
}

export default ProducerCard;

// const ProducerCard = ({ producer }) => {
//     const { id, image, name, description } = producer;
//     // console.log(producer);
//     return (
//         <Link to={`${id}`} >
//             <Card>
//                 <CardImg width='100%'
//                     src={image} 
//                     alt={name}
//                 /> 
//                 <CardImgOverlay>
//                     <CardTitle>{name}</CardTitle>
//                 </CardImgOverlay>
//                 {description}
//             </Card>
//         </Link>
//     )
// };

// export default ProducerCard;




// const ProducerCard = () => {
//     return (
//         <Card>
//             <CardHeader>
//                 <h3>Default Producer Card</h3>
//             </CardHeader>
//             <CardBody>
//                 <img src={Apple6} alt= 'default producer image' width='100rem' /> 
//                 <p>Body of default producer card. relevant bio info goes here </p>
//                 <footer>
//                     <div>
//                         <p>
//                             links for producer here
//                         </p>
//                     </div>
//                 </footer>
//             </CardBody>
//         </Card>
//     )
// };

// export default ProducerCard;