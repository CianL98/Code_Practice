import React, { Component } from 'react';
import logo from './logo.svg';

import Posts from './components/Posts';
import Postsform from './components/Postform';

class App extends Componenet{
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Postsform>
                    <hr/>
                </Postsform>
                <Posts/>
            </div>
        );
    }
}