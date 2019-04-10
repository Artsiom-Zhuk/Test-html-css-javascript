import React, {Component} from 'react'
import BigButton from '../BigButton'
import './index.css'
import data from '../../data/descriptionEachTest.js'

class Tests extends Component{

    render(){

        const buttons = data.map((button) => {
            return (
                <BigButton key={button.id} value={button.valueBtn} title={button.title}/>
            )
        })

        return(
            <div className='tests__div-main-container'>
                {buttons}
            </div>
        )
    }
}

export default Tests;

