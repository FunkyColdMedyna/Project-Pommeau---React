import { PRODUCERS } from "../../app/shared/PRODUCERS";

export const selectAllProducers = () => {
    return PRODUCERS;
};

export const selectRandomProducer = () => {
    return PRODUCERS[Math.floor(PRODUCERS.length * Math.random())];
};

export const selectProducerById = (id) => {
    return PRODUCERS.find((producer) => producer.id === id);
};

export const selectFeaturedProducer = (featured) => {
    return PRODUCERS.find((producer) => producer.featured === true) 
};
