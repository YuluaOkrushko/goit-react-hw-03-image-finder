import React, {Component} from 'react';

export default class Modal extends Component {
    componentDidMount(){
        window.addEventListener("keydown", this.keyDownForClose)
    }
    componentWillUnmount(){
        window.removeEventListener("keydown", this.keyDownForClose)
    }
    keyDownForClose = (e) =>{
        if (e.code === "Escape"){
            this.props.onClick(e, true)
        }
    }
    render(){
        const {alt, src, onClick} = this.props
        return(
            <div className="Overlay" onClick={onClick}>
                <div className="Modal">
                    <img src={src} alt={alt} />
                </div>
            </div>
        )
    }
}