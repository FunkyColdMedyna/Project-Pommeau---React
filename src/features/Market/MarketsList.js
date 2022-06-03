import MarketCard from "./MarketCard";
import { Col, Row } from "reactstrap";
import { selectAllMarkets } from "./marketsSlice";

const MarketsList = ({setMarketId}) => {
    const markets = selectAllMarkets();
    return (
        <Row className="grid-margin">
            {markets.map((market) => {
                return (
                    <Col 
                        className=""
                        md='4'
                        key={market.id}
                        onClick={() => setMarketId(market.id)}
                       
                    >
                        <MarketCard className='' market={market} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default MarketsList;
