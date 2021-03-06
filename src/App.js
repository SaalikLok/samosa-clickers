import React, {Component} from 'react';
import EntryForm from './EntryForm';
import Game from './Game';
import Leaderboard from './Leaderboard';
import './style/style.min.css';


class App extends Component {
    state = {
        heading: 'Samosa Clickers',
        users: {},
        comp: 'start',
    }

    addUser = (users) => {
        //const users = {...this.state.users};
        this.setState({ users });
    }

    setScore = (gameScore) => {
        this.setState(prevState => ({
            users:{
                ...prevState.users,
                score: gameScore
            }
        }))
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
            compToRender = <EntryForm change={this.changeComp} addUser={this.addUser}/>; 
        }
        else if(this.state.comp === 'game'){
           compToRender = <Game setScore={this.setScore} change={this.changeComp} users={this.state.users}/>;
        }
        else if(this.state.comp === 'leaderboard'){
            compToRender = <Leaderboard />;
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
