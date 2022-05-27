import React from "react";
import { Card, CardHeader, CardBody } from 'reactstrap';

const ProducerCard = () => {
    return (
        <Card>
            <CardHeader>
                <h3>Default Producer Card</h3>
            </CardHeader>
            <CardBody>
                <p>Body of default producer card. relevant bio info goes here </p>
                <footer>
                    <div>
                        <p>
                            links for producer here
                        </p>
                    </div>
                </footer>
            </CardBody>
        </Card>
    )
};

export default ProducerCard;