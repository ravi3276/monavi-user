import React from 'react'
import './ItemShopBuy.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import PersonIcon from '@material-ui/icons/Person';
import StarIcon from '@material-ui/icons/Star';
function ItemShopBuy() {
    return (
        <div className="itemShopBuy">
        <div className="itemShopBuy__header">
        <div className="itemShopBuy__sendpoints">
                <TelegramIcon />
            <p>Send random Game Point message</p>

            <p className="random">Randomly send 500,000 Game Point
            messages to 1,000 people.
            </p>

            <h4>
            <StarIcon />
            9 00 000 000
            </h4>

            <select className="select__count">
            <option value="1">1</option>
             <option value="2">2</option>
             <option  value="3">3</option>
             <option value="4">4</option>
            </select>

            <button>Buy</button>

        </div>

        <div className="itemShopBuy__profile">
        <PersonIcon />
        <p>Right to change profile picture</p>

        <p className="random">
        Profile picture can be changed.
        </p>

        <h4>
        <StarIcon />
        8 00 000 000
        </h4>

        <select className="select__count">
        <option value="1">1</option>
         <option value="2">2</option>
         <option  value="3">3</option>
         <option value="4">4</option>
        </select>

        <button>Buy</button>
        </div>
        </div>
        </div>
    )
}

export default ItemShopBuy
