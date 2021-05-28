import React from 'react'
import './InfoGame.css';
import StarIcon from '@material-ui/icons/Star';

function InfoGame() {
    return (
        <div className="infoGame">
        <div className="infoGame__body">
        
        <div className="infoGame__left">
            <StarIcon />
            <div className="infoGame__leftpoints">
                <h4>Holding Game Point</h4>
                <h3>1,500,000</h3>
            </div>
        </div>

        <div className="infoGame__right">
            <p>Game Point Earned Today</p>
            <button>Gifting Game Point</button>
        </div>

        <p>0</p>
        </div>
            </div>
    )
}

export default InfoGame
