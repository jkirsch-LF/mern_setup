import React from 'react';
import axios from 'axios';

class ApiTest extends React.Component {

    getUserData() {
        axios.get('/api/get-user')
            .then((res) => console.log('Response from get-user: ', res.data))
            .catch((err) => console.log('An error has occured: ', err.message));
    }

    getArticleData(){
        axios.get('/api/get-article')
            .then((res)=> console.log('Response from get-article: ', res.data))
            .catch((err)=> console.log('An error has occured: ', err.message));
    }

    render() {
        return (
            <div>
                <h1>WELCOME TO THE MF API THUNDERDOME</h1>
                <button onClick={this.getUserData}>Get User Info</button>
                <br/>
                <button onClick={this.getArticleData}>Get Article Info</button>
            </div>  
        )
    }

}

export default ApiTest;