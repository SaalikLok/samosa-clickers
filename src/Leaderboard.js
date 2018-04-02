import React from 'react';
import Leader from './Leader.js'
import './style/style.min.css';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
 
const GET_LEADERS = gql`
    {
        allUsers (
            first: 10
            orderBy: score_DESC
        ){
            id
            name
            score
        }
    }
`

const Leaderboard = (props, {onGetLeaders}) => (
        <Query query={GET_LEADERS}>
            {({ loading, error, data }) => {
                if(loading) return "Loading...";
                if(error) return `Error: ${error.message}`;

                return(
                    <div className="leaderboard" onLoad={onGetLeaders}>
                        <h2>Who's winning?</h2>
                        <br/>
                        {data.allUsers.map(user => (
                            <Leader key={user.id} name={user.name} score={user.score}/>
                        ))}
                        <button onClick={() => {window.location.reload()}}>Play Again</button>
                    </div>
                );
                
            }}
        </Query>
        
    );

export default Leaderboard;