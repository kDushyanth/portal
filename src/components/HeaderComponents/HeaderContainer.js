import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = ()=>{
    
    return (
        <div className="header-container">
            <div className="header-1"><ImageThumbnail/></div>
            <div className="header-2">
            <HeaderTitle author="Dushyanth Kurra" date={new Date()}/>
            <HeaderContent content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. header content lies in this component.`  } size='default'/>
            </div>
            
        </div>
    )

}

export default HeaderContainer;