import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
class CardContent extends React.Component {
    static propTypes  = {
        /** Background color of the card content */
        color:PropTypes.string,
        /** Topic of the post*/
        topic:PropTypes.string,
        /** Description of the post */
        desc:PropTypes.string,
        /** Information of the post */
        info:PropTypes.string
    }
    static defaultProps = {
        color:'white',
        topic:'N/A',
        info:'N/A',
        desc:'N/A'
    }
    render(){
        return(
            <div 
            className="cardC"
            style={{backgroundColor: this.props.color}}>

            <strong>{this.props.topic}</strong>
            <p><em>{this.props.desc}</em></p>
            <p>{this.props.info}</p>

        </div>
        );
    }
}

export default CardContent;
