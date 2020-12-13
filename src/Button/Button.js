import React from "react";


const Button = ({onClick}) => {
    return(
        <div className="LoadMoreButton">
            <button className="Button" type="submit" onClick={onClick}>
                Load more
            </button>
        </div>
    )
}

export default Button;