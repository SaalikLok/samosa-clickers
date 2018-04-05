import React, {Component} from 'react';
import './style/style.min.css';

const Leader = (props) => {
    return(
        <div className="leader">
            <p>{props.name} : {props.score}</p>
        </div>
    );
}
export default Leader;