import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import './index.css'
import DescriptionBigButton from '../DescriptionBigButton'

class BigButton extends Component{

    state = {
        isOpen: false
    }

    render() {
        const {value, title} = this.props;
        const description = this.state.isOpen &&  <DescriptionBigButton title={title}/>

        return(
            <div className='bigButton__div-main-container'>
                <Button className='bigButton__button'  variant="outlined" color="primary" onClick={this.handleClick}>
                    {value}
                </Button>
                {description}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}




export default BigButton;