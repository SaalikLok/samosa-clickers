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
    }
    
    render(){
        let compToRender = null;

        if(this.state.comp === 'start'){
            compToRender = <EntryForm change ={this.changeComp} render ={this.renderComp}/>; 
        }
        else if(this.state.comp === 'game'){
           compToRender = <Game setScore={this.setScore} change ={this.changeComp}/>;
        }
        else{
            compToRender =  <Leaderboard/>;
        }

        return(
        <div className="App" ref="myRef">
            <h1>{this.state.heading}</h1>
            {compToRender}
        </div>
        );
    }
}

export default App;