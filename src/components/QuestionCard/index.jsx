import React, { Component } from 'react'


class QuestionCard extends Component {

    state = {
        radio1: null
    }

    render() {
        return (
            <div className='question-card__div-main-container'>
                <h3>1. Как расшифровывается HTML?</h3>

                <input type='radio'
                value='apple' 
                checked={this.state.radio1 === 'apple'}
                onChange={this.onRadioChange} /> Hypertext Markdown Link <br />

                <input type='radio'
                value='orange' 
                checked={this.state.radio1 === 'orange'}
                onChange={this.onRadioChange} /> Hypertext Markup Link <br />

                <input type='radio'
                value='banana' 
                checked={this.state.radio1 === 'banana'}
                onChange={this.onRadioChange} /> Hypertext Markdown Language <br />

                <input type='radio'
                value='lemon' 
                checked={this.state.radio1 === 'lemon'}
                onChange={this.onRadioChange} /> Hypertext Markup Language <br />
            </div>
        )
    }

    onRadioChange = (e) => {
        this.setState({
            radio1:e.target.value
        })
    }
}

export default QuestionCard;