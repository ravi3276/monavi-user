import React,{useState} from 'react'
import './Header.css';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Post from './Post';
import Message from './Message';
import {useHistory} from 'react-router-dom';
import Dropdown from 'react-dropdown';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Login from './Login';

function Header() {
    const [user,setUser]=useState(null)
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const history=useHistory();

    const nasdaqClick=()=>{
        history.push('/nasdaq')
    }

    const homePage=()=>{
        history.push('/');
    }

    const bitcoinClick=()=>{
        history.push('/bitcoin');
    }

    const ranking=()=>{
        history.push('/ranking')
    }

    const itemshop=()=>{
        history.push('/itemshop')
    }

    const community=()=>{
        history.push('/community')
    }

    const servicecenter=()=>{
        history.push('/servicecenter')
    }

    const aboutUs=()=>{
        alert('this is my about link')
    }
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const myinfo=()=>{
        history.push('/myinfo')
        handleClose();
    }
  
    const Logout=()=>{
        setUser(user+"")
        history.push('/')
    }

    const Clubmember=()=>{
        history.push('/clubmember')
    }

    const register=()=>{
        history.push('/register')
    }

    return (

        <div className="header">
            {
                user ? (

                    <div className="header__top">
                    <h1 onClick={homePage}>Monavi</h1>
                    <div className="header__right">
                       <input type="text" placeholder="User Name"/>
                       <input type="text" placeholder="Password"/>
                       <button className="btn1">Login</button>
                       <button className="btn2" onClick={register}>Register</button>
                       <p>Don't have account...</p>
        
                    </div>
                    </div>
                ):(
                    <div className="header__top">
                    <h1 onClick={homePage}>Monavi</h1>
                    <div className="header__right">
                      <div className="profile">
                      <h4>
                      <StarIcon />
                      GP <small>1,500,000</small>
                      </h4>

                      <h4>
                       <PersonIcon onClick={Logout}/>
                       Ravi Teja
                       </h4>
                       
                       
                       <div className="dropdown">
                         <ArrowDropDownIcon 
                         className="dropdown__icon"
                         aria-controls="fade-menu"
                          aria-haspopup="true" 
                          onClick={handleClick}
                          />

                         <Menu
                            className="dropdown__menu"
                           id="fade-menu"
                           anchorEl={anchorEl}
                           keepMounted
                           open={open}
                           onClose={handleClose}
                           TransitionComponent={Fade}
                         >
                           <MenuItem onClick={Clubmember}>
                           <PersonIcon className="dropdown__logo"/>
                           Become a Club Member
                           </MenuItem>
                           <MenuItem onClick={myinfo}>
                           <InfoIcon className="dropdown__logo"/>
                           My Info
                           </MenuItem>
                           <MenuItem onClick={Logout}>
                           <ExitToAppIcon className="dropdown__logo"/>
                           Log Out
                           </MenuItem>
                         </Menu>
                       </div>
                       </div>


        
                  </div>
                    </div>
                )
            }

            <div className="header__headings">
                <div className="heading">
                <h3 onClick={nasdaqClick}>NASDAQ Mock Investment</h3>
                </div>
                <div className="heading">
                <h3 onClick={bitcoinClick}>Bitcoin simulated investment</h3>
                </div>
                <div className="heading">
                <h3 onClick={ranking}>Ranking</h3>
                </div>
                <div className="heading">
                <h3 onClick={itemshop}>Item Shop</h3>
                </div>
                <div className="heading">
                <h3 onClick={community}>Community</h3>
                </div>
                <div className="heading">
                <h3 onClick={servicecenter}>Service center</h3>
                </div>
                <div className="heading1">
                <h3 onClick={aboutUs}>About us</h3>
                </div>

            </div>
            
               
            
        </div>
    )
}

export default Header
