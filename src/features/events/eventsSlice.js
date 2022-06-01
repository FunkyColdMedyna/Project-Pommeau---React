import { EVENTS } from "../../app/shared/EVENTS";

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