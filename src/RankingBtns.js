import React from 'react'
import './RankingBtns.css';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function RankingBtns() {
    return (
        <div className="rankingBtns">
            <div className="rankingBtns__header">
            <h2 className="gamepoint">Game Point Ranking</h2>
            <h2 className="score">Score Ranking</h2>
            <h2 className="help">
            Help
            <HelpOutlineIcon />
            </h2>
            </div>

        </div>
    )
}

export default RankingBtns
