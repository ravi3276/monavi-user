import React from 'react'
import './ClubMember.css'
function ClubMember() {
    return (
        <div className="clubMember">
            <div className="clubMember__form">
            <h3>Invitation Code</h3>
            <input type="text"/>

            </div>
            <button className="submit">Submit</button>
            <button className="cancel">Cancel</button>

            <p>
            <strong>Note</strong>
            You need a invitation code through someone club manger to join the club
            </p>
        </div>
    )
}

export default ClubMember
