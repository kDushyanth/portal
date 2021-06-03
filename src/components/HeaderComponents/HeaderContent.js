import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';


const  HeaderContent = ({content,size : fsize})=>{
    const size = 
    {
        small:'10px',
        default:'15px',
        large:'20px'
    }
    return (
        <div style ={{fontSize:size[fsize]}}>
            {content}
        </div>
    )
}
HeaderContent.propTypes = {
    size:PropTypes.oneOf(['small','default','large']),
    /** A small Bio of author of the post
     */
    content:PropTypes.string
}
HeaderContent.defaultProps={
    content: 'N/A',
    size:'default'
}

export default HeaderContent;