import React from 'react';
import './Header.css';
import rsg from './../../assets/images/rsg.svg';

class ImageThumbnail extends React.Component {
    render(){
        return(
            <div>
                <img alt="logo" src={rsg}></img>
            </div>
        );
    }
}
export default ImageThumbnail;
