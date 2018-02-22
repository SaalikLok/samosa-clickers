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
        return 1;
    }

    render(){
        return(
            <div id="lbar">

            </div>
        );
    }
}

export default Leader;