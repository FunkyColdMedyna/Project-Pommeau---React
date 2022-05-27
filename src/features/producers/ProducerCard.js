// import React from "react";
// import { Card, CardHeader, CardBody } from 'reactstrap';
// import Apple6 from '../../app/assets/images/apple6.png';


import { Card, CardImgOverlay, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';




const ProducerCard = ({ producer }) => {
    const { id, image, name } = producer;
    // console.log(producer);
    return (
        <Link to={`${id}`} >
            <Card>
                <CardImg width='100%' 
                    src={image} 
                    alt={name}
                /> 
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
};

export default ProducerCard;




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