import React from 'react'
import './Rankings.css';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Rankings() {
    return (
        <div className="rankings">
            <div className="rankings__row1">

                <div className="rank1">
                    <h3 className="rank1__icon">
                    <StarIcon />
                    1st
                    </h3>

                    <div className="rank__profile">
                    <AccountCircleIcon />
                    <h6>
                    Dog Yanoljang
                    <p>9 wins 5 losses (64.3%)</p>
                    </h6>
                    </div>
                    <h6 className="amount">4060</h6>
                </div>

                <div className="rank2">
                <h4>
               2nd Place
                </h4>
                <div className="rank__profile">
                <AccountCircleIcon />
                <h6>
                6 Tower Captain
                <p>34 wins32 Loss (51.5%)</p>
                </h6>
                </div>
                <h6 className="amount">2460</h6>
            </div>
            </div>


            <div className="rankings__row2">
            <div className="rank3">
            <h4>3rd Place</h4>

            <div className="rank__profile">
            <AccountCircleIcon />
            <h6>
            Dog Yanoljang
            <p>9 wins 5 losses (64.3%)</p>
            </h6>
            </div>
            <h6 className="amount">4060</h6>
        </div>

        <div className="rank4">
        <h4>
       4th
        </h4>

        <div className="rank__profile">
        <AccountCircleIcon />
        <h6>
        6 Tower Captain
        <p>34 wins32 Loss (51.5%)</p>
        </h6>
        </div>
        <h6 className="amount">2460</h6>
         </div>
      </div>

            <div className="rankings__row3">

            <div className="rank5">
            <h4>5th</h4>

            <div className="rank__profile">
            <AccountCircleIcon />
            <h6>
            Dog Yanoljang
            <p>9 wins 5 losses (64.3%)</p>
            </h6>
            </div>
            <h6 className="amount">4060</h6>
        </div>

        <div className="rank6">
        <h4>
       6th
        </h4>

        <div className="rank__profile">
        <AccountCircleIcon />
        <h6>
        6 Tower Captain
        <p>34 wins32 Loss (51.5%)</p>
        </h6>
        </div>
        <h6 className="amount">2460</h6>
         </div>

            </div>

            <div className="ranking__btn">
                <button>
                View Remaining
                <ArrowDropDownIcon />
                </button>
                
            </div>
        </div>
    )
}

export default Rankings
