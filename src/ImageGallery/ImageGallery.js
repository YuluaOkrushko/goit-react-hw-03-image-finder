import React, { Component } from "react";
import Modal from "../Modal/Modal";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        imageSrc: ""
    }
    openModal = (e) => {
        const largeImageURL = e.currentTarget.dataset.src;
        this.setState({
            showModal: true,
            imageSrc:largeImageURL
        })
    }
    closeModal = (e, force = false) => {
        if(e.currentTarget === e.target || force){
            this.setState({
                showModal: false,
            })
        }
    }
    render(){
        const {showModal, imageSrc} = this.state;
        const {items} = this.props
        return(
            <>
            <ul className="ImageGallery">
                <ImageGalleryItem items={items} onClick={this.openModal}/></ul>
                {showModal && <Modal alt={items.tags} src={imageSrc} onClick={this.closeModal}/>}
            </>
        )
    }
}