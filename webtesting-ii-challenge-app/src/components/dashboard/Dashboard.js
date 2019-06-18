import React, { Component } from 'react'

import Display from '../display/Display'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            strike: 0,
            ball: 0,
            foul: 0,
            hit: 0
        }
    }
    strikeHandler = () => {
        if (this.state.strike < 3) {
            this.setState({ strike: this.state.strike + 1 })
        } if (this.state.strike >= 3) {
            this.setState({ strike: 0 })
        }
    }

    ballHandler = () => {
        if (this.state.ball < 4) {
            this.setState({ ball: this.state.ball + 1 })
        } if (this.state.ball >= 3) {
            this.setState({ ball: 0 })
        }
    }

    foulHandler = () => {
        if (this.state.strike < 3) {
            this.setState({ strike: this.state.strike + 1 })
        } if (this.state.strike >= 3) {
            this.setState({ strike: this.state.strike })
        }
    }

    hitHandler = () => {
        this.setState({ hit: this.state.hit + 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.strikeHandler}>strike</button>
                <button onClick={this.ballHandler}>ball</button>
                <button onClick={this.foulHandler}>foul</button>
                <button onClick={this.hitHandler}>hit</button>
                <Display strike={this.state.strike} ball={this.state.ball} foul={this.state.foul} hit={this.state.hit} />
            </div>
        )
    }


}

export default Dashboard