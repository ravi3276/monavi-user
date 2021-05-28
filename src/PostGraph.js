import React from 'react'
import './PostGraph.css';

function PostGraph() {
    return (
        <div className="postgraph">
            <img 
            src="https://www.stocktrader.com/wp-content/uploads/2013/03/doji-candle-example.gif"
            alt=""
            />

            <div className="postgraph__header">

                <div className="postgraph__headerleft">
                    <div className="postgraph__headerleftbtn">
                    <button>Sell ⬆ </button>
                    <button>Buy ⬇ </button>
                    </div>

                    <div className="postgraph__headerleftpoints">
                    <p>Today</p>
                    <p>0</p>
                    </div>

                    <div className="postgraph__headerleftpoints">
                    <p>Game Point</p>
                    <p>1500000</p>
                    </div>

                    <div className="postgraph__headerleftpoints">
                    <p>Purchase</p>
                    <p>0</p>
                    </div>
                </div>

                <div className="postgraph__headerright">
                    <button>Purchase History</button>
                    <p>
                    No purchase made in the last 24 hours .
                    </p>
                </div>

            </div>

            <div className="postgraph__footer">
            <p>Only Hundred</p>
            <p>Ten</p>
            <p>500</p>
            <p>Maximum</p>
            </div>

            <div className="postgraph__headerbtn">
                <button>Purchase</button>
            </div>
        </div>
    )
}

export default PostGraph
