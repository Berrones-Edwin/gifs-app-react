

// import  from 'react'

import { useContext } from "react"
import GifContext from "../context/GifContextProvider"

export const useGetGifs = () => {
    
    const {gif} = useContext(GifContext)

    return gif
}


