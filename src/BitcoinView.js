import React from 'react'
import './BitcoinView.css'
function BitcoinView() {
    return (
        <div className="bitcoinView">
        <h4>
        Source of result data and delivery time
        </h4>
        <p>
        Investing.com Bitcoin real-time price BTC/USD based (select exchange: investing.com) 
        24/7 data 
        </p>
       
        <h4>
        How to calculate the result value 
        </h4>

        <p>
        <a href="#">Odd</a>
        <a href="#">Even</a>
         Select 1 
         <a href="#">Under</a>
          <a href="#">Over</a>
         Select 1 bundle possible
        </p>
       
        <p>
        If the sum of all the numbers at the closing price every 5 minutes is odd 
        <a href="#">Odd</a>
        If even
        <a href="#">Even</a>
        </p>

        <p>
        If the last digit of the number is 0~4 plus all the numbers of the closing price every 5 minutes 
        <a href="#">Under</a>
        , if it is 5~9 
        <a href="#">Over</a>
        </p>

        <h4>
        How to check the closing price on'Investing.com'
        </h4>
       
        <p>
        1.Access Investing.com ( https://kr.investing.com/indices/investing.com-btc-usd )
        </p>

        <p>
        2. Chart Streaming chart-5 divisions 
        </p>

        <p>
        3. Check the closing price at the top when hovering over the stick (candle) (see image below)
        </p>
        </div>
    )
}

export default BitcoinView
