import React from 'react'
import './RoundGraph.css'
function RoundGraph() {
    return (
        <div className="roundGraph">
        <img 
        src="https://www.stocktrader.com/wp-content/uploads/2013/03/doji-candle-example.gif"
        alt=""
        />

        <div className="roundGraph__header">

            <div className="roundGraph__headerleft">
                <div className="roundGraph__headerleftbtn">
                <button>Even ✔</button>
                <button>Odd ✔ </button>
                </div>

                <div className="roundGraph__headerleftbtn">
                <button>Under ✔</button>
                <button>Over ✔</button>
                </div>

                <div className="roundGraph__headerleftpoints">
                <p>Today</p>
                <p>0</p>
                </div>

                <div className="roundGraph__headerleftpoints">
                <p>Game Point</p>
                <p>1500000</p>
                </div>

                <div className="roundGraph__headerleftpoints">
                <p>Purchase</p>
                <p>0</p>
                </div>

            <div className="roundGraph__headerfooter">
            <p>Only Hundred</p>
            <p>Ten</p>
            <p>500</p>
            <p>Maximum</p>
            </div>
    
            <div className="roundGraph__headerbtn">
                <button>Purchase</button>
            </div>
            </div>

            <div className="roundGraph__right">
                <button>Purchase History</button>
                <p>
                No purchase made in the last 24 hours .
                </p>
            </div>

            
        </div>

        </div>
    )
}

export default RoundGraph
