import React from 'react'
import './RoundBody.css';
function RoundBody() {
    return (
        <div className="roundBody">
        <p className="roundBody__p1">148 Round Progress</p>
        
        <div className="roundBody__table">
        <div className="roundBody__date">
        <h5>2021.03.01</h5>
        <h5>2021.03.01</h5>
        </div>

        <div className="roundBody__dates">
        <p></p>
        </div>

        <div className="roundBody__purchase">
             <p>Buy 0%</p>
             <p>Sell 0%</p>
        </div>

        <div className="roundBody__purchase">
        <p>Under 0%</p>
        <p>Over 0%</p>
        </div>
        </div>
        
        <div className="roundBody__purchasecontainer">
        <p className="roundBody__purchasebtn">149 Real Round</p>
            <button>13052.00</button>

            <div className="roundBody__indexrange">
            <p>
            -Purchase is available until 60
             seconds before the deadline
            • sipping, frozen-over
            redundancy available
            -Win 1.95 times
            </p>
            </div>
        </div>
        </div>
    )
}

export default RoundBody
