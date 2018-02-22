import React, {Component} from 'react';
import EntryForm from './EntryForm';
import Game from './Game';
import Leaderboard from './Leaderboard';
import './style/style.min.css';

class App extends Component {
    constructor(){
        super();
    
        this.state = {
          heading: 'Samosa Clickers',
          users: {},
          comp: 'start',
          score: 0,
        }

        this.compRender = this.compRender.bind(this);
        this.addUser = this.addUser.bind(this);
        //this.changeComp = this.changeComp(this);
        //this.addScore = this.addScore(this);
    }

    addUser(user){
        const users = {...this.state.users};
        this.setState({ users });
    }


    setScore = (gameScore) => {
        this.setState({
            score: gameScore
        })
    }

    changeComp = (comp, head) => {
        this.setState({
            comp: comp,
            heading:  head
        });
        this.renderComp();
    }

//TODO: FIX THE WAY THAT THESE COMPONENTS RENDER
    compRender = () => {
        if(this.state.comp === 'start'){
            <EntryForm change = {this.changeComp} render = {this.renderComp}/>
        }
        else if(this.state.comp === 'game'){
            <Game setScore={this.setScore} />
        }
        else{
            <Leaderboard/>
        }
    }
    
    render(){
        return(
        <div className="App" ref="myRef">
            <h1>{this.state.heading}</h1>
            {this.compRender}
        </div>
        );
    }
}

export default App;