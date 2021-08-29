import React, { Component } from 'react'

export default class Ccomponent extends Component {
    render() {
        return (
            <div>
                <h1>Class Component Hello {this.props.numbers.join(', ')}</h1>
            </div>
        )
    }
}

Ccomponent.defaultProps = { numbers: [15, 25] }