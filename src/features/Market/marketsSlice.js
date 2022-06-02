// import { createSlice } from '@reduxjs/toolkit';
import { MARKET } from "../../app/shared/MARKET";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    marketArray: MARKET
};

const marketsSlice = createSlice({
    name: 'markets',
    initialState
});

export const marketsReducer = marketsSlice.reducer;

export const selectAllMarkets = () => {
    return MARKET;
};

export const selectRandomMarket = () => {
    return MARKET[Math.floor(MARKET.length * Math.random())];
};

export const selectMarketById = (id) => {
    return  MARKET.find((market) => market.id === id);
};

export const selectFeaturedMarket = () => {
    return MARKET.find((market) => market.featured);
};