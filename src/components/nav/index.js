import React, { Component } from 'react';
import Button from './button'
import { ContextUser } from '../../utils/ContextUser';



class Nav extends Component {

    render() {

        return (
            <nav className="navigation">
                <ContextUser.Consumer>
                    {({ user }) => (
                        < Button project_name={user} />
                    )}

                </ContextUser.Consumer>
            </nav >
        );
    }
}

export default Nav;