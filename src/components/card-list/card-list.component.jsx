import React from 'react';
import './card-list.styles.css'


export const CardList = (props) => {
    console.log(props);
return (<div className= 'card-list'><h1>{props.name}</h1></div>)}