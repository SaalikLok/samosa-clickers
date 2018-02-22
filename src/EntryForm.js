import React, {Component} from 'react';
import './style/style.min.css';


class EntryForm extends Component{
    constructor(props){
        super(props);

        this.playGame = this.playGame.bind(this);
    }

    playGame(){
        this.props.change("game", "Samosa Clickers");
    }

    render(){
        return(
            <div className="formArea">
                <h4>Play the game where you click on the samosa as many times as possible in a minute.</h4>
                <h3>Ready to play? Fill out the form and let's gooo!</h3>
                <p>Played before? Use the same email and your high score will update.</p>
                <input type="text" placeholder="Name"/>
                <br/>
                <input type="text" placeholder="Email"/>
                <br/>
                <button onClick={this.playGame}>Play</button>
            </div>
        );
    }   
}

export default EntryForm;