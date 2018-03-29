import React, {Component} from 'react';
//import ProgressBar from 'react-progressbar.js';
import './style/style.min.css';


//const semiCircle = ProgressBar.SemiCircle; 

class Game extends Component{

    state= {
        'time': 5,
        'gameScore': 0
    }

    componentDidMount(){
        setInterval(this.increase, 1000)
    }

    addScore = () => {
        this.setState({
            'gameScore': this.state.gameScore + 1
        })

        this.props.setScore(this.state.gameScore);
      }
    
    goToLeader = () => {
        this.props.change("leaderboard", "Leaderboard");
    }

    increase = () => {
        if (this.state.time > 0){
            this.setState({
                'time': this.state.time - 1
            });
        }
        else{
            this.goToLeader();
        }
    }

    render(){
        return(
            <div className="gameComp">
                <p className="score">{this.state.gameScore}</p>
                <p className="time"> Samosas Made</p>
                <div className="samosa" onClick={this.addScore}/>
                <p className="time">{this.state.time} secs</p>        
            </div>
        );
    }
}

export default Game;
