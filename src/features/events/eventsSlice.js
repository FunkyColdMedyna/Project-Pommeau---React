import { EVENTS } from "../../app/shared/EVENTS";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = {
    eventsArray: EVENTS
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {

    }
});

export const selectAllEvents = () => {
    return EVENTS;
};

export const selectRandomEvent = () => {
    return EVENTS[Math.floor(EVENTS.length * Math.random())];
};

export const selectEventById = (id) => {
    return EVENTS.find((event) => event.id === parseInt(id));
}

export const selectFeaturedEvent = () => {
    return EVENTS.find((event) => event.featured)
};

export const eventsReducer = eventsSlice.reducer;

export default eventsSlice.reducer


