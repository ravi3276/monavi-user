import React from 'react'
import './BitcoinGuide.css';
import {useHistory} from 'react-router-dom'
function BitcoinGuide() {
    const history = useHistory();

    const investment=()=>{
        history.push('/bitcoin/mockinvestment')
    }

    const guide=()=>{
        history.push('/bitcoin/guide')
    }

    return (
        <div className="bitcoinGuide">
        <div className="bitcoinGuide__header">
        <h2 onClick={investment} className="mockinvestment">Bitcoin simulated investment</h2>
        
        <h2 onClick={guide} className="investmentguide">Bitcoin mock investment usage guide</h2>
        
        </div>

        </div>
    )
}

export default BitcoinGuide
