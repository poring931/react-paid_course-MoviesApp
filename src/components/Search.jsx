import React, { Component } from 'react'

export default class Search extends Component {

    state = {
        search: ''
    }


    render() {
        return (
            <div className="row">
                <div className="col s12">
                        <input 
                            placeholder="Search" 
                            id="email_inline" 
                            type="search" 
                            className="validate"
                            value ={this.state.search}
                            onChange ={(e) => {this.setState({search: e.target.value})}}
                        />
                </div>
            </div>
        )
    }
}
