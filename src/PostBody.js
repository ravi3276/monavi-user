import React from 'react'
import './PostBody.css'
function PostBody() {
    return (
        <div className="postbody">
        <div className="postbody__detail">
        <p className="postbody__p1">Last Closing Price</p>
        <p className="postbody__p2">View Details</p>
        </div>
        
        <div className="postbody__table">
        <div className="postbody__date">
        <h5>2021.03.01</h5>
        <h5>2021.03.01</h5>
        </div>

        <div className="postbody__dates">
             <p>06:59:59</p>
             <p>13055.00</p>
        </div>

        <div className="postbody__dates">
        <p>06:59:59</p>
        <p>13055.00</p>
        </div>

        <div className="postbody__dates">
        <p>06:59:59</p>
        <p>13055.00</p>
        </div>

        <div className="postbody__dates">
        <p>06:59:59</p>
        <p>13055.00</p>
         </div>
        </div>
        
        <div className="postbody__index">
            <button>13052.00</button>

            <div className="postbody__indexrange">
            <p>
            -The result is determined by the entered
            index ±2.5 index .
            </p>

            <p className="postbody__indexrangep2">
            After purchasing entering five minutes
            has passed an invalid handle
            </p>
            </div>
        </div>
        </div>
    )
}

export default PostBody
