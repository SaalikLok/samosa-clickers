import React, {Component} from 'react';
import './style/style.min.css';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

const startTime = new Date(Date.now()).toISOString();

const CREATE_USER = gql`
    mutation createUser($email: String!, $name: String!, $startTime: DateTime!, $score: Int!){
        createUser(email: $email, name: $name, lastUpdated: $startTime, score: $score){
            id
            email
            name
            score
            lastUpdated
        }
    }`

class Game extends Component{

    state= {
        'time': 30,
        'gameScore': 0,
        'isPlaying': true
    }

    componentDidMount(){
        setInterval(this.increase, 1000)
    }

    addScore = () => {
        if(this.state.isPlaying){
            this.setState({
                'gameScore': this.state.gameScore + 1
            })
            this.props.setScore(this.state.gameScore);
        }
        else{
            alert("You're out of time! Click the 'done' button below.")
        }
        
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
            this.setState({
                'time': 0,
                'isPlaying': false
            });
            //Make samosa unclickable
        }
    }

    createUserFunc = (createUser) => {
        createUser({variables: {email: this.props.users.email, name: this.props.users.uname, startTime: startTime, score: this.state.gameScore}});             
    }

    render(){
        return(
            <Mutation mutation={CREATE_USER}>
                {(createUser, {data}) => (
                <div id="gameForm" className="gameComp">
                    <p className="score">{this.state.gameScore}</p>
                    <p className="time"> Samosas Made</p>
                    <div className="samosaContainer">
                        <div className="samosa" onClick={this.addScore}/>
                    </div>
                    <p className="time">{this.state.time} secs</p>    
                    <button onClick={() => {
                        this.createUserFunc(createUser);
                        this.goToLeader();
                    }}>Done</button>    
                </div>
            )}
            </Mutation>
        );
    }
}

export default Game;
