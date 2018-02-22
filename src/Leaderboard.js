import React, {Component} from 'react';
import Leader from './Leader.js'
import './style/style.min.css';
 

class Leaderboard extends Component{
    constructor(props){
        super(props);

    }
    
    render(){
        return(
            <div className="leaderboard">
                <h2>Who's winning?</h2>
                <br/>
                <Leader />
                <div className="lBar100">Saalik - 360</div>
                <div className="lBar75">Isaiah - 270</div>
                <div className="lBar50">Nishant - 180</div>

            </div>
        );
    }
}

export default Leaderboard;