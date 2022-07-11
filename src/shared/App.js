import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Book } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/book" component={Book}/>
            </div>
        );
    }
}

export default App;