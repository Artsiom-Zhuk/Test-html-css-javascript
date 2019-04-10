import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Button from '@material-ui/core/Button';

export default function Nav(){
    const linkMain = <div><Link to='/'>Главная</Link></div>;
    const linkTests = <div><Link to='/tests'>Тесты</Link></div>;
    return(
        <div className='nav__div-navbar'>
            <div className='nav__div-container-icons'>
                <img src='./images/icon-html.png' alt="html" />
                <img src='./images/icon-css.png' alt="css" />
                <img src='./images/icon-js.png' alt="js" />
            </div>
            <div className='nav__div-container-btns'>
                <Button children={linkMain} size='large' />   
                <Button children={linkTests} size='large'/>
            </div>
        </div>
    )
}