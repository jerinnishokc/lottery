import React from 'react';
import './homepage.styles.css';
import LotteryTicket from '../../components/lottery-ticket/loterry-ticket.component';

const Homepage = () => {
    return (
        <div>
            <h1 className="header">Homepage test</h1>
            <div className="lottery-container">
                <LotteryTicket numOfBalls={3} maxLimit={10}></LotteryTicket>
                <LotteryTicket numOfBalls={7} maxLimit={50}></LotteryTicket>
            </div>
        </div>
    );
};

export default Homepage;