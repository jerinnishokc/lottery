import React from 'react';
import Balls from '../balls/balls.component';
import './balls-container.styles.css';

const BallsContainer = (props) => {
    return (
        <div className="balls-container">                
            {
                props.randomArray.map(number => <Balls key={Math.random() * number} num={number}></Balls>)
            }              
        </div>
    );
};

export default BallsContainer;