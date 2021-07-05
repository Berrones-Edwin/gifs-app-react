import useUser from "hooks/useUser";
import React from "react";
import { useHistory } from "react-router-dom";

const FavButton = ({ id }) => {
    const { isLoggenIn } = useUser();
    const { push } = useHistory();

    const handleClickFav = () => {
        if (!isLoggenIn) {
            push({
                pathname: "/login",
            });
        } else {
            alert(id);
        }
    };
    return (
        <button
            onClick={handleClickFav}
            className="btn btn-sm btn-outline-danger"
        >
            Fav
        </button>
    );
};

export default FavButton;
