import { MARKET } from "../../app/shared/MARKET";

export const selectAllMarkets = () => {
    return MARKET;
};

export const selectRandomMarket = () => {
    return MARKET[Math.floor(MARKET.length * Math.random())];
};

export const selectMarketById = (id) => {
    return  MARKET.find((market) => market.id === id);
}
