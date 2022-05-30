import MarketCard from "./MarketCard";
import { Col, Row } from "reactstrap";
import { selectAllMarkets } from "./marketsSlice";

const MarketsList = ({setMarketId}) => {
    const markets = selectAllMarkets();
    return (
        <Row className="ms-auto">
            {markets.map((market) => {
                return (
                    <Col 
                        md='4'
                        key={market.id}
                        onClick={() => setMarketId(market.id)}
                    >
                        <MarketCard market={market} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default MarketsList;
