import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardContainer = ()=>{
    const data = {topic:"Reactjs"
        ,desc:"JavaScript library"
        ,info:`React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building 
        user interfaces or UI components. It is maintained by Facebook and a community of individual developers and 
        companies. React can be used as a base in the development of single-page or mobile applications.
         However, React is only concerned with state management and rendering that state to the DOM, so creating React 
         applications usually requires the use of additional libraries for routing, as well as certain client-side 
         functionality.`};
    return (
        <div className="card-container">
            <CardBanner/>
            <CardContent color='#ffffff' topic={data.topic} desc = {data.desc} info = {data.info}/>
        </div>
        
    )
}
export default CardContainer;
