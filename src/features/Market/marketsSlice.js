// import { createSlice } from '@reduxjs/toolkit';
import { MARKET } from "../../app/shared/MARKET";

// const initialState = {
//     marketArray: MARKET
// };

// const marketsSlice = createSlice({
//     name: 'market',
//     initialState
// });

export const selectAllMarkets = () => {
    return MARKET;
};

export const selectRandomMarket = () => {
    return MARKET[Math.floor(MARKET.length * Math.random())];
};

export const selectMarketById = (id) => {
    return  MARKET.find((market) => market.id === id);
};
