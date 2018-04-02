import React from 'react';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

//TODO: Onclick of the button in the form, run the mutation.

const startTime = new Date(Date.now()).toISOString();

const CREATE_USER = gql`
    mutation createUser($email: String!, $name: String!){
        createUser(email: $email, name: $name, lastUpdated: startTime, score: 0){
            id
            email
            name
            score
            lastUpdated
        }
    }`

const CreateUserForm = () => {
    let emailInput;
    let nameInput;

    return(
        <Mutation mutation={CREATE_USER}>
            {(createUser, {data}) => (
                <form onSubmit={e => {
                    e.preventDefault();
                    createUser({variables: {email: emailInput.value, name: nameInput.value}});
                }}>
                    <input ref={(nameInput) => {this.name = nameInput}}  type="text" placeholder="Name"/>
                    <br/>
                    <input ref={(emailInput) => {this.email = emailInput}} type="text" placeholder="Email (optional)"/>
                    <br/>
                    <button type="submit">Play</button>
                </form>
            )}
        </Mutation>
    )
}

export default CreateUse