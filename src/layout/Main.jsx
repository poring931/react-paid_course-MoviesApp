import React, { Component } from 'react'
import MoviesList from '../components/MoviesList'
import { Preloader } from '../components/Preloader';
import Search from '../components/Search';

export default class Main extends Component {
    state = {
        movies_list: []
    }

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=df855818&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies_list: data.Search}))
    }

    render() {


        const {movies_list} = this.state;

        return (
            <main className="content container">
                <Search/>
                {
                    movies_list ? 
                        (<MoviesList movies_list={this.state.movies_list}/>
                    ) : <Preloader/>
                }
                
            </main>
        )
    }
}
