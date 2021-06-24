import { useReducer } from "react";

const TYPES = {
    UPDATE_KEYWORD: "update_keyword",
    UPDATE_RATING: "update_rating",
};

const reducer = (state, action) => {
    switch (action.type) {
        case TYPES.UPDATE_KEYWORD:
            return {
                ...state,
                inputValue: action.payload,
            };
        case TYPES.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload,
            };

        default:
            return state;
    }
};

export const useForm = ({ ínitialKeyword, initialRating }) => {
    const [state, dispatch] = useReducer(reducer, {
        inputValue: decodeURIComponent(ínitialKeyword),
        rating: initialRating,
    });

    const { inputValue, rating } = state;

    return {
        inputValue,
        rating,
        updateKeyword: (keyword) =>
            dispatch({
                type: TYPES.UPDATE_KEYWORD,
                payload: keyword,
            }),
        updateRating: (rating) =>
            dispatch({
                type: TYPES.UPDATE_RATING,
                payload: rating,
            }),
    };
};
