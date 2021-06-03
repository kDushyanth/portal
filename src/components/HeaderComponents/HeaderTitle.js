import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';


const HeaderTitle = ({author,date})=>{
    return (
        <div>
            <span>{author}</span> : <span> {date.toDateString()} </span>
        </div>
    );
}
HeaderTitle.propTypes = {
    /**  Author of the post*/
    title: PropTypes.string,
    /**  Posted on...*/
    date: PropTypes.instanceOf(Date)
}
HeaderTitle.defaultProps = {
    title: 'Dushyanth',
    date: new Date(2021,1,1)
}

export default HeaderTitle;
