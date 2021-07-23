import React from 'react'
import useFavorites from 'hooks/useFavorites'
import useUser from 'hooks/useUser'
import { useHistory } from 'react-router-dom'

const FavButton = ({ id }) => {
    const { isLoggenIn } = useUser()
    const { push } = useHistory()
    const { isFavorite, addFavoriteGif, response } = useFavorites()

    const handleClickFav = () => {
        if (!isLoggenIn) {
            push({
                pathname: '/login',
            })
        } else {
            addFavoriteGif({ id })
            if (response === null) {
                alert('gif add favorite')
            }
        }
    }

    const [label, classBtn] = isFavorite({ id })
        ? ['Delete', 'secondary']
        : ['Fav', 'danger']

    return (
        <button
            onClick={handleClickFav}
            className={`btn btn-sm btn-${classBtn}`}
        >
            {label}
        </button>
    )
}

export default FavButton
