import React from 'react'
import './ClubBtns.css';
import {useHistory} from 'react-router-dom';

function ClubBtns() {

    const history=useHistory();

    const member=()=>{
        history.push('/clubmember/member')
    }

    const benifits=()=>{
        history.push('/clubmember/benefits')
    }

    return (
        <div className="clubBtns">
        <div className="clubBtns__header">
        <h2 className="clubBtns__btn1" onClick={member}>Become A Club Member</h2>
        <h2 className="clubBtns__btn2" onClick={benifits}>Benefits</h2>
        </div>
        </div>
    )
}

export default ClubBtns
