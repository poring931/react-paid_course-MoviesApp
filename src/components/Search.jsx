import React, { Component } from 'react'

export default class Search extends Component {

    state = {
        search: '',
        type: 'all',
    }

    handleKey =(event) => {
        if (event.key === 'Enter'){
            if (!this.state.search) return;

            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFiler = (event) => {

        this.setState(()=>({type: event.target.dataset.type}), ()=>{
            if (!this.state.search) return;

            this.props.searchMovies(this.state.search, this.state.type)
        })

    }
    render() {
        return (
            <div className="row">
                <div className="col s12 flex_search">
                    <div className="col s9 ">

                        <input 
                            onKeyDown={this.handleKey}
                            placeholder="Search" 
                            id="email_inline" 
                            type="search" 
                            className="validate"
                            value ={this.state.search}
                            onChange ={(e) => {this.setState({search: e.target.value})}}
                        />
                    </div>
                    <div className="col s3 ">

                        <button onClick={()=>this.props.searchMovies(this.state.search)} className="waves-effect waves-light btn"><i className="material-icons right">search</i>Search</button>
                    </div>


                </div>
                <div className="col s12 flex_search mt-5 ">
                    <label className="col s4 ">
                        <input className="with-gap" name="type" type="radio" checked={this.state.type === 'all'}  data-type="all" onChange={this.handleFiler}/>
                        <span>All</span>
                    </label>
                    <label className="col s4 ">
                        <input className="with-gap" name="type" type="radio" checked={this.state.type === 'movie'}  data-type="movie" onChange={this.handleFiler}/>
                        <span>Movies only</span>
                    </label>
                    <label className="col s4 ">
                        <input className="with-gap" name="type" type="radio" checked={this.state.type === 'series'}  data-type="series" onChange={this.handleFiler}/>
                        <span>Series only</span>
                    </label>
                    <label className="col s4 ">
                        <input className="with-gap" name="type" type="radio" checked={this.state.type === 'game'}  data-type="game" onChange={this.handleFiler}/>
                        <span>Game</span>
                    </label>
                </div>
            </div>
        )
    }
}
