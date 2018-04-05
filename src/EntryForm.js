import React, {Component} from 'react';
import './style/style.min.css';


class EntryForm extends Component{
    playGame = () => {
        this.props.change("game", "Samosa Clickers");
    }

    createUserFunc = (event) => {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(this.email.value) && this.uname.value.length > 0){
            const user = {
                uname: this.uname.value.trim(),
                email: this.email.value.trim(),
                score: 0
            };
            this.props.addUser(user);
            this.playGame(user);
        }
        else if(this.email.value === "" && this.uname.value.length > 0){
            const user = {
                uname: this.uname.value.trim(),
                email: "none",
                score: 0
            };
            
            this.props.addUser(user);
            this.playGame(user);
        }
        else{
            alert("You might be missing your name or have an incorrect email.")
        }
    }

    render(){
        return(
            <div className="formArea" onSubmit={(e) => {
                    e.preventDefault();
                    this.createUserFunc(e);   
                }}>
                <h3>Click on the samosa as many times as possible in a minute!</h3>
                <p>Your email is used to let you know that you've won something cool!</p>
                <form>
                    <input ref={(input) => this.uname = input}  type="text" placeholder="Name"/>
                    <br/>
                    <input ref={(input) => this.email = input} type="text" placeholder="Email (optional)"/>
                    <br/>
                    <button type="submit">Play</button>
                </form>
                <footer>
                    <p className="tinyText">Brought to you by <a target="blank" href="http://bit.ly/samosa-slingers">The Samosa Slingers</a> 
                    <br/>Made by <a target="blank" href="https://www.saaliklok.com">Saalik Lokhandwala</a> &copy; 2018</p>
                </footer>
            </div>
            
        );
    }   
}

export default EntryForm;