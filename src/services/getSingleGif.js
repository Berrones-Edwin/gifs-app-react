import { ENV } from "env/env";

export default async function getSingleGif({ id } = {}) {
    const resp = await fetch(
        `${ENV.urlAPP}gifs/${id}?api_key=${ENV.apiKEY}&lang=en`
    );

    const { data = {} } = await resp.json();

    const { id: gifID, title, images } = data;
    const { url } = images.downsized_medium;

    return {
        gifID,
        title,
        url,
    };
}
