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

        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(this.email.value)){
            const user = {
                uname: this.uname.value.trim(),
                email: this.email.value.trim(),
                score: 0,
            };
            this.props.addUser(user);
            this.playGame(user);
        }
        else{
            alert("incorrect email.")
        }
    }

    render(){
        return(
            <div className="formArea" onSubmit={(e) => this.createUser(e)}>
                <h3>Click on the samosa as many times as possible in a minute!</h3>
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