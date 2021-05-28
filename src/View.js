import React from 'react'
import './View.css';

function View() {
    return (
        <div className="view">
        <h4>
        What is the NASDAQ ?
        </h4>

        <p>
        The NASDAQ 100 is an index consisting of 100 stocks with a large market capitalization and high trading volume among listed
        stocks on the NASDAQ market in the United States.
        Companies listed on the NASDAQ 100 include Microsoft, Amazon, and Apple.
        </p>
       
        <h4>
        Nasdaq mock investment data source and provision time information
        </h4>

        <p>
        Based on Nasdaq 100 futures index data, the largest securities company in Korea
        Data provision time: 08:20 ~ 06:00
        Weekend (Sat, Sun): Closed
        </p>
       
        <h4>
        How to participate in the NASDAQ mock investment
        </h4>
       
        <p>
        Select buy/sell for real-time index at any time without waiting time
        </p>

            <h4>
            Nasdaq mock investment result processing guide
            </h4>
        </div>
    )
}

export default View
