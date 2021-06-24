import React from 'react';
import dice1 from '../imgs/dice1.png';
import dice2 from '../imgs/dice2.png';
import dice3 from '../imgs/dice3.png';
import dice4 from '../imgs/dice4.png';
import dice5 from '../imgs/dice5.png';
import dice6 from '../imgs/dice6.png';
import diceEmpty from '../imgs/dice-empty.png';


class Dice extends React.Component {
    state = {
        dices: [dice1, dice2, dice3, dice4, dice5, dice6]
    };

    increment = () => {
        let arr = [dice1, dice2, dice3, dice4, dice5, dice6];
        let random = Math.floor(Math.random() * arr.length);
        this.setState({dices : arr[random]});
    };

    render() {
        return (
            <div>
                <button>
                    <img src={`${this.state.dices}`} onClick={this.increment}/>
                </button>
            </div>
        )
    };


};

export default Dice