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

    createUser(event){
        event.preventDefault();
        console.log("user is created.");
        const user = {
            uname: this.uname.value,
            email: this.email.value,
            score: 0,
        }
        console.log(user);
    }

    render(){
        return(
            <div className="formArea" onSubmit={(e) => this.createUser(e)}>
                <h4>Play the game where you click on the samosa as many times as possible in a minute.</h4>
                <h3>Ready to play? Fill out the form and let's gooo!</h3>
                <p>Played before? Use the same email and your high score will update.</p>
                <form>
                    <input ref={(input) => this.uname = input}  type="text" placeholder="Name"/>
                    <br/>
                    <input ref={(input) => this.email = input} type="text" placeholder="Email"/>
                    <br/>
                    <button type="submit">Play</button>
                </form>
                
            </div>
        );
    }   
}

export default EntryForm;