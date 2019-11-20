import React, { Component } from 'react';
import { ContextUser, userData } from '../utils/ContextUser';
import Nav from './nav';

class App extends Component {


    render() {
        return (

            <div className="App">
                <ContextUser.Provider value={userData}>
                    <Nav />
                </ContextUser.Provider>
            </div >

        );
    }
}

export default App;
