import { ENV } from 'env/env'

export default async function getGifs({
    limit = 5,
    rating = 'g',
    keyword = 'morty',
    page = 0,
} = {}) {
    const resp = await fetch(
        `${ENV.urlAPP}gifs/search?q=${encodeURI(keyword)}&api_key=${
            ENV.apiKEY
        }&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`
    )

    const { data = [] } = await resp.json()
    let gifsData = []
    if (Array.isArray(data)) {
        // console.log(data)
        gifsData = data.map((gif) => {
            // console.log(gif.import_datetime)
            return {
                id: gif.id,
                title: gif.title,
                image: gif.images.downsized_medium.url,
                datetime_imp: gif.import_datetime,
                rating: gif.rating,
            }
        })
    }

    return gifsData || []
}
