import { ENV } from "../env/env";

const fromApiResponseToGifs = (response) => {
    const { data = [] } = response

    return data;
};

export const getTrendingGifs = () => {
    return fetch(`${ENV.urlAPP}trending/searches?api_key=${ENV.apiKEY}`)
        .then((res) => res.json())
        .then(fromApiResponseToGifs);
};
