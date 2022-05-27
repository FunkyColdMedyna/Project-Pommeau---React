import { PRODUCERS } from "../../app/shared/PRODUCERS";

export const selectAllProducers = () => {
    return PRODUCERS;
};

export const selectRandomCampsite = () => {
    return PRODUCERS[Math.floor(PRODUCERS.length * Math.random())];
};