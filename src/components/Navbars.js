import React, {useState, useEffect} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {FaBars, FaGoodreads, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Avatar, Card, Dropdown, Modal} from "antd";
import Login from "./pages/signin/Login";
import {LogoutOutlined} from "@ant-design/icons";

function Navbars() {
    const [click, setClick] = useState(false);
    const [loginDialog, setLoginDialog] = useState(false);
    const [isLogin, setLogin] = useState(!!JSON.parse(localStorage.getItem('userData')));
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userData')));
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return {
            // window.removeEventListener('resize', showButton)
        }
    }, []);


    return (
        <>
            <IconContext.Provider value={{color: '#f00946'}}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <FaGoodreads className='navbar-icon'/>
                            GUIDEME
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/services'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Services
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link
                                    to='/destinations'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Destinations
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link
                                    to='/aboutus'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    About us
                                </Link>
                            </li>
                            {isLogin?<li className='nav-item'>
                                <Link
                                    to='/sign-in'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Register as guide
                                </Link>
                            </li>:''}
                            {isLogin ?
                                <Dropdown trigger="click" overlay={
                                            <Card style={{display:"grid"}}>
                                                <button style={{background:"#ccc",color:"#fff",width:"100%",whiteSpace:"pre"}} onClick={() => {
                                                    localStorage.clear();
                                                    window.location.href = "/";
                                                }}>
                                                    <span>Logout</span>
                                                </button>
                                                <button style={{background:"#ccc",color:"#fff",width:"100%",whiteSpace:"pre"}} onClick={() => {
                                                    window.location.href = "/dashboard";
                                                }}>
                                                    <span>Admin dashboard</span>
                                                </button>
                                            </Card>

                                    } title={null}>
                                    <div style={{cursor:"pointer",display: "flex"}}>
                                        <Avatar src={userInfo.picture}/>
                                        <div style={{
                                            marginLeft: 10,
                                            color: "#fff",
                                            fontSize: 15,
                                            display: "flex",
                                            alignItems: "center"
                                        }}>Welcome, {userInfo.name}</div>

                                    </div>
                                </Dropdown> :
                                <Button onClick={() => setLoginDialog(true)} buttonStyle='btn--outline'>SIGN
                                    IN</Button>}


                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
            <Modal style={{padding: 0}} footer={null} onCancel={() => setLoginDialog(false)} visible={loginDialog}>
                <Login/>
            </Modal>
        </>
    );
}

export default Navbars;