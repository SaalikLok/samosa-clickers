import React, {Component} from 'react';
import Leader from './Leader.js'
import './style/style.min.css';
 

class Leaderboard extends Component{
    
    
    render(){
        return(
            <div className="leaderboard">
                <h2>Who's winning?</h2>
                <br/>
                <Leader name={this.props.users.uname} score={this.props.users.score} />
                <button>Play Again</button>
            </div>
        );
    }
}

export default Leaderboard;