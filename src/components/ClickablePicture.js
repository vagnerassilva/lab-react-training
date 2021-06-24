import React from 'react';
import man from '../imgs/maxence.png';
import manGlasses from '../imgs/maxence-glasses.png';

class ClickablePicture extends React.Component {
    state = {
        man: man,
        manGlasses: manGlasses
    }

    change = () => {

        this.setState({man : this.state.manGlasses})
        this.setState({manGlasses : this.state.man})
    }


    render () {
        return (
            <div>
                <button>
                    <img src={`${this.state.man}`} onClick={this.change}/>
                </button>
            </div>
        )
    }


}

export default ClickablePicture