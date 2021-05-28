import React from 'react'
import './Message.css';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Message() {
    return (
        <div className="message">
        <div className="message__container">
        <div className="message__containerheader">
            <h5>Message</h5>
            <button>Member Search</button>
        </div>
        <div className="message__containerbody">
            <p className="message__bodymessage">
            Sign-up note-[Online Friends sv747] ▶ Gold purchase/sale 24 hour
            inquiry Telegram sv747 ◀
            </p>

            <p className="message__date">
            20.12.06 16:05 confirmed
            </p>
        </div>
        </div>

        <div className="message__chatarea">

        <div className="message__chatheader">
        <h4>Monavi Chat Area</h4>
        <div className="message__chatheaderright">
            <button>Member Search</button>
            <SettingsIcon />
        </div>
        </div>

        <div className="message__chatbody">
                <div className="message__chatbodyheader">
                <h5>Hoi Chat it has earned today's first Game point.</h5>
                <p>
                The results of 58 bitcoin simulated investments is 34 
                <a href="">Hole Under</a>
                </p>

                <p>
                The results of 54 bitcoin simulated investments is 26 
                <a href="">pair over</a>
                </p>

                <p>
                The results of 58 bitcoin simulated investments is 23 
                <a href="">Hole Under</a>
                </p>
                </div>

                <div className="message__chatbodyheader">
                <h5>Why Hapil has won 13057.25 copies.</h5>
                <p>
                The results of 58 bitcoin simulated investments is 23 
                <a href="">Hole Under</a>
                </p>
                
                </div>

                <div className="message__chatbodyheader">
                <h5>Hoi Chait has earned today's first writing Game Point.</h5>
                <p>
                The results of 58 bitcoin simulated investments is 34 
                <a href="">Hole Under</a>
                </p>

                <p>
                The results of 54 bitcoin simulated investments is 26 
                <a href="">pair over</a>
                </p>

                <p>
                The results of 58 bitcoin simulated investments is 23 
                <a href="">Hole Under</a>
                </p>
                </div>

                <div className="message__chatbodyheader1">
                <h5>Why Hapil has won 13057.25 copies.</h5>
                <p>
                The results of 58 bitcoin simulated investments is 23 
                <a href="">Hole Under</a>
                </p>

                </div>

                <div className="message__chatbodyinput">
                <input type="text" placeholder="Available after login"/>  
                <ArrowUpwardIcon />                  
                </div>
        </div>

        </div>
        </div>
    )
}

export default Message
