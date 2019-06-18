import React, { Component } from 'react'

import Dashboard from '../dashboard/Dashboard'

class Display extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Strikes: {this.props.strike}</h1>
                <h1>Balls: {this.props.ball}</h1>
                <h1>Hits: {this.props.hit}</h1>
            </div>
        )
    }


}

export default Display