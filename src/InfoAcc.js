import React from 'react'
import './InfoAcc.css'
function InfoAcc() {
    return (
        <div className="infoAcc">
            <p>Account Information</p>

            <div className="acc__info">
                <p>ID</p>
                <p>Yong123</p>
                <small className="date">202.03.01 Tue 06:59:59</small>
            </div>

            <div className="acc__info">
            <p>Name</p>
            <p>Yong Lee</p>
            <a href="#">Change Name</a>
             </div>

             <div className="acc__info">
                <p>Password</p>
                <p>**********</p>
                <a href="#">Change Password</a>
                </div>

            <div className="acc__info">
            <p>Email</p>
            <p>YongLee@yahoo.com</p>
            <a href="#">Email Change</a>
        </div>
        </div>
    )
}

export default InfoAcc
