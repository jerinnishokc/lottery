import React from 'react';
import BallsContainer from '../balls-container/balls-container.component';
import './lottery-ticket.styles.css';

class LotteryTicket extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            numOfBalls: this.props.numOfBalls,
            maxLimit: this.props.maxLimit,
            randomArray: []
        };
        console.log(this.props,this.state);
    }

    generateRandom = () => {
        let randomNumberArr = Array.from({length: this.state.numOfBalls});
        randomNumberArr = randomNumberArr.map(() => {
            const randomNumber = Math.floor(Math.random() * this.state.maxLimit) + 1;
            return randomNumber;
        });
        this.setState({randomArray: randomNumberArr});
    };

    handleClick(e) {
        this.generateRandom();
    }

    render() {
        return (
            <div className="lottery-ticket">
                <BallsContainer randomArray={this.state.randomArray}></BallsContainer>                
                <button onClick={this.handleClick}>Spin it up!</button>
            </div>
        );
    }
    
};

export default LotteryTicket;