import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }


    render() {
        return (
            <div className="nav-button">
                {this.props.project_name}
            </div>
        );
    }
}

export default Button;