import { PRODUCERS } from "../../app/shared/PRODUCERS";

export const selectAllProducers = () => {
    return PRODUCERS;
};

export const selectRandomProducer = () => {
    return PRODUCERS[Math.floor(PRODUCERS.length * Math.random())];
};