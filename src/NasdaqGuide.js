import React from 'react';
import {useHistory} from 'react-router-dom';
import './NasdaqGuide.css'
function NasdaqGuide() {
    const history=useHistory();
    const mockGuide=()=>{
        history.push('/nasdaq/mockinvestment')
    }

    const investmentGuide=()=>{
        history.push('/nasdaq/guide')
    }

    return (
        <div className="nasdaqguide">
        <div className="nasdaqguide__header">
        <h2 onClick={mockGuide} className="mockinvestment">NASDAQ Mock Investment</h2>
        
        <h2 onClick={investmentGuide} className="investmentguide">NASDAQ Mock Investment Guide</h2>
        
        </div>
        </div>
    )
}

export default NasdaqGuide
