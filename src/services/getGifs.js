import { ENV } from "../env/env";

export default async function getGifs(category) {
    const resp = await fetch(
        `${ENV.urlAPP}gifs/search?q=${encodeURI(
            category
        )}&api_key=${ENV.apiKEY}`
    );

    const { data } = await resp.json();

    let gifsData = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            image: gif.images.downsized_medium.url,
        };
    });
    return gifsData;
}
