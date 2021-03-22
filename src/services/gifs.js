export default async function getGifs(category) {
    const resp = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
            category
        )}&limit=10&api_key=`
    );

    const { data } = await resp.json();

    let gifsData = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            image: gif.images.downsized_medium.url,
        };
    });
    // setImages(gifsData);
    return gifsData;
}
