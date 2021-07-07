import { ENV } from "env/env";

export async function getGifsFavorites({ idsGifs } = {}) {
    const resp = await fetch(
        `${ENV.urlAPP}gifs?api_key=${ENV.apiKEY}&ids=${idsGifs}&lang=en`
    );
    const { data } = await resp.json();

    let gifsData = [];
    if (Array.isArray(data)) {
        gifsData = data.map((gif) => {
            return {
                id: gif.id,
                title: gif.title,
                image: gif.images.downsized_medium.url,
            };
        });
    }
    return gifsData || [];
}
