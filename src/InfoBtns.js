import React from 'react'
import './InfoBtns.css';
import {useHistory} from 'react-router-dom'
function InfoBtns() {
    const history = useHistory();

    const info=()=>{
        history.push('/myinfo/info')
    }

    const gamepoint=()=>{
        history.push('/myinfo/gamepoint')
    }

    const items=()=>{
        history.push('/myinfo/myitems')
    }
    return (
        <div className="infoBtns">
        <div className="infoBtns__header">
        <h2 className="infoBtns__btn1" onClick={info}>My Info</h2>
        <h2 className="infoBtns__btn2" onClick={gamepoint}>Game Point</h2>
        <h2 className="infoBtns__btn3" onClick={items}>My item</h2>
        <h2 className="infoBtns__btn4">Cache</h2>
        <h2 className="infoBtns__btn5">Item Shop</h2>
        </div>
        </div>
    )
}

export default InfoBtns
