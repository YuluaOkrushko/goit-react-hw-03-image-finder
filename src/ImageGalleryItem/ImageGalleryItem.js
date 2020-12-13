import React from "react";


const ImageGalleryItem = ({items, onClick}) => {
    return(
        <>
        {items.map((item) => (
            <li key={item.id}
                data-src={item.largeImageURL}
                onClick={onClick}
                className="ImageGalleryItem">
                <img
                    alt={item.tags}
                    src={item.webformatURL}
                    className="ImageGalleryItem-image">
                </img>
            </li>
        ))}
        </>
    )
}
export default ImageGalleryItem