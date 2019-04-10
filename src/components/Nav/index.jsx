import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import Button from '@material-ui/core/Button';

export default function Nav(){
    return(
        <div className='nav__div-navbar'>
            <div className='nav__div-container-icons'>
                <img src='./images/icon-html.png' alt="html" />
                <img src='./images/icon-css.png' alt="css" />
                <img src='./images/icon-js.png' alt="js" />
            </div>
            <div className='nav__div-container-btns'>
                <Button size='large'>
                    <div>
                        <Link to='/'>Главная</Link>
                    </div>
                </Button>
                <Button size='large'>
                    <div>
                        <Link to='/tests'>Тесты</Link>
                    </div>
                </Button>
            </div>
        </div>
    )
}