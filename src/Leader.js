import React, {Component} from 'react';
import './style/style.min.css';


class Leader extends Component{
    constructor(props){
        super(props);
        this.state = {
            key: '1',
            length: 0,
            name: '',
            score: 0
        }
    }
    
    setLength(){
        let bar = document.getElementById("lbar");
        bar.length = this.props.length;
    }

    render(){
        return(
            <div id="lbar">
                <p>{this.props.name} : {this.props.score}</p>
            </div>
        );
    }
}

export default Leader;