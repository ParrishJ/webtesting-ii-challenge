import React from 'react'

import Dashboard from '../dashboard/Dashboard'

class Dashboard extends Component {
    state = {
        strike: 0,
        ball: 0,
        foul: 0,
        hit: 0
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

    strikeHandler = () => {
        if (this.state.strike < 3) {
            this.setState({ strike: this.state.strike++ })
        } if (this.state.strike >= 3) {

        } this.setState({ strike: 0 })
    }

    ballHandler = () => {
        if (this.state.strike < 4) {
            this.setState({ strike: this.ball.strike++ })
        } if (this.ball.strike >= 3) {

        } this.setState({ ball: 0 })
    }

    foulHandler = () => {
        if (this.state.strike < 3) {
            this.setState({ strike: this.state.strike++ })
        } if (this.ball.strike >= 3) {

        } this.setState({ strike: this.state.strike })
    }

    hitHandler = () => {
        this.setState({ hit: this.state.hit++ })
    }
}

export default Dashboard