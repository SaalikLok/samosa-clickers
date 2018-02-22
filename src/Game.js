import React, {Component} from 'react';
//import ProgressBar from 'react-progressbar.js';
import './style/style.min.css';


//const semiCircle = ProgressBar.SemiCircle; 

class Game extends Component{
    constructor(props){
        super(props);

        this.addScore = this.addScore.bind(this);
        this.increase = this.increase.bind(this);

        this.state= {
            'score': 0,
            'time': 60
        }
    }

    componentDidMount(){
        setInterval(this.increase, 1000)
    }

    addScore = () => {
        this.setState({
            score: this.state.score + 1
        });
      }

    increase = () => {
        if (this.state.time > 0){
            this.setState({
                time: this.state.time - 1
            });
        }
        else{
            alert("TIME UP!");
        }
    }

    render(){
        return(
            <div className="gameComp">
                <p className="score">{this.state.score}</p>
                <p className="time"> Samosas Made</p>
                <div className="samosa" onClick={this.addScore}/>
                <p className="time">{this.state.time} secs</p>        
            </div>
        );
    }
}

export default Game;
