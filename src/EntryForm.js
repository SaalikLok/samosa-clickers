import React, {Component} from 'react';
import './style/style.min.css';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

const startTime = new Date(Date.now()).toISOString();

const CREATE_USER = gql`
    mutation createUser($email: String!, $name: String!, $startTime: DateTime!){
        createUser(email: $email, name: $name, lastUpdated: $startTime, score: 0){
            id
            email
            name
            score
            lastUpdated
        }
    }`

class EntryForm extends Component{
    playGame = () => {
        this.props.change("game", "Samosa Clickers");
    }

    createUserFunc = (event, createUser) => {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(this.email.value) && this.uname.value.length > 0){
            const user = {
                uname: this.uname.value.trim(),
                email: this.email.value.trim(),
                score: 0
            };
            this.props.addUser(user);
            createUser({variables: {email: this.email.value.trim(), name: this.uname.value.trim(), startTime: startTime}})
            this.playGame(user);
        }
        else if(this.email.value === "" && this.uname.value.length > 0){
            const user = {
                uname: this.uname.value.trim(),
                email: "none",
                score: 0
            };
            
            this.props.addUser(user);
            createUser({variables: {email: "none", name: this.uname.value.trim(), startTime: startTime}})            
            this.playGame(user);
        }
        else{
            alert("You might be missing your name or have an incorrect email.")
        }
    }

    render(){
        return(
            <Mutation mutation={CREATE_USER}>
            {(createUser, {data}) => (
                <div className="formArea" onSubmit={(e) => {
                 e.preventDefault();
                 this.createUserFunc(e, createUser);   
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
            </div>
            )}
            </Mutation>
        );
    }   
}

export default EntryForm;