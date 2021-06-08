import React from 'react';
import './Card.css';

function Card(props)
{
    const classes='card '+ props.className; //previous classes and along with class card is added to this
    return (

        <div className={classes}>{props.children}</div>
    );

}
export default Card;