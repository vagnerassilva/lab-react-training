import React from "react";

class LikeButton extends React.Component {
  state = {
    count: 0,
    color: ['purple','blue','green','yellow','orange','red']
  };

  increment = () => {
    let arr = ['purple','blue','green','yellow','orange','red']
    let random = Math.floor(Math.random() * arr.length);
    this.setState({count : this.state.count +1})
    this.setState({color : arr[random]})

}

    render(){
        let likeOrLikes = '';
        if (this.state.count === 1){
            likeOrLikes = "Like"
        } else {
            likeOrLikes = "Likes"
        }
        return (
            <button style ={{backgroundColor : `${this.state.color}`}} onClick={this.increment} >
                {this.state.count} {likeOrLikes}
            </button>
        )}
    }
    export default LikeButton