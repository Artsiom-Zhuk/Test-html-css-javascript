// import React, { Component } from 'react'
// import './index.css'
// // import RadioButton from '../RadioButton'

// class QuestionCard extends Component {

//     state = {
//         radio: null
//     }

//     render() {
//         const {question, value} = this.props;
//         return (
//                 <div className='question-card__div-main-container'>

//                     <h3>{question}</h3>

//                     <input type='radio'
//                     value={value}
//                     checked={this.state.radio === value}
//                     onChange={this.onRadioChange} />{value}<br />

//                     <input type='radio'
//                     value={value}
//                     checked={this.state.radio === value}
//                     onChange={this.onRadioChange} />{value}<br />

//                     <h3>{question}</h3>
//                     <input type='radio'
//                     value={value}
//                     checked={this.state.radio === {value}}
//                     onChange={this.onRadioChange} />{value}<br />
//                 </div>
//         )
//     }

//     onRadioChange = (e) => {
//         this.setState({
//             radio:e.target.value
//         })
//     }
// }

// export default QuestionCard;

