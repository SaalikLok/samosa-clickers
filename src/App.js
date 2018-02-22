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
          uname: '',
          email: '',
          comp: 'game'
        }

        this.renderComp = this.renderComp(this);
        //this.changeComp = this.changeComp(this);
        //this.addScore = this.addScore(this);
    }

    renderComp = () => {
        if(this.state.comp === 'start'){
            return(<EntryForm change = {this.changeComp} render = {this.renderComp}/>);
        }
        else if(this.state.comp === 'game'){
            return(<Game />);
        }
        else{
            return(<Leaderboard/>);
        }
    }

    changeComp = (comp, head) => {
        this.setState({
            comp: comp,
            heading:  head
        });
        this.renderComp();
    }
    
    render(){
        return(
        <div className="App" ref="myRef">
            <h1>{this.state.heading}</h1>
            {this.renderComp}
        </div>
        );
    }
}

export default App;