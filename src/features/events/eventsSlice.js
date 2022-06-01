import { EVENTS } from "../../app/shared/EVENTS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventsArray: EVENTS
};

const eventsSlice = createSlice({
    name: 'events',
    initialState
});

export const eventsReducer = eventsSlice.reducer;



export const selectAllEvents = () => {
    return EVENTS;
};

export const selectRandomEvent = () => {
    return EVENTS[Math.floor(EVENTS.length * Math.random())];
};

export const selectEventById = (id) => {
    return EVENTS.find((event) => event.id === id);
}

export const selectFeaturedEvent = () => {
    return EVENTS.find((event) => event.featured)
};

