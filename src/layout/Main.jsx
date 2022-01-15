import React, { Component } from 'react'
import MoviesList from '../components/MoviesList'
import { Preloader } from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY
export default class Main extends Component {
    state = {
        movies_list: [],
        loading: true
    }

    componentDidMount(){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies_list: data.Search, loading: false}))
            .catch(err => {
                console.log(err)
                this.setState({ loading: false})
            })
    }


    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        if (str !=''){
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}`: ''}`)
                .then(response => response.json())
                .then(data => this.setState({movies_list: data.Search, loading: false}))
                .catch(err => {
                console.log(err)
                this.setState({ loading: false})
            })
                
        }
      
    }

    render() {


        const {movies_list} = this.state;

        return (
            <main className="content container">
                <Search searchMovies={this.searchMovies}/>
                {
                    !this.state.loading ? (<MoviesList movies_list={this.state.movies_list}/> ) : <Preloader/>
                }
                
            </main>
        )
    }
}
