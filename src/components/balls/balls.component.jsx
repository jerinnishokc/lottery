import React from 'react';
import './balls.styles.css';

const Balls = (props) => {
    return (        
        <div className="ball">{props.num}</div>
    );
};

export default Balls;