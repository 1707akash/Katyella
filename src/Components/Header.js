

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import LogoImg from '../LogoImg.png';
import './Header.css';
import Button from './Button';

const Header =()=>{
    return(
        <div className='header'>
        <nav className="navbar">
        <div className="logoContainer">
            <div className="imageContainer">
                <img className="logoImg" src={LogoImg} alt="" />
            </div>
            <div className="linklists">
                <ul>
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="http://localhost:3000/articles">Articles</a></li>
                    <li><a href="http://localhost:3000/services">Services</a></li>
                    <li><a href="http://localhost:3000/contact">Contact</a></li>
                    <li><a href="">Ebook</a></li>
                </ul>
            </div>
        </div>


        <div className='rightNav'>
            <div className="searchDiv"><FontAwesomeIcon className='icon' icon={faMagnifyingGlass} /></div>
            <Button height={"3.5rem"} width={"12rem"} borderRadius={"0.5rem"} fontColor={"#FFF"} backgroundColor={"#ffa949"} padding={"0.6rem 1rem"} fontSize={"1.3rem"} fontWeight={"600"} >Schedule a Call</Button>
        </div>
        </nav>
        </div>
    )
}


export default Header;