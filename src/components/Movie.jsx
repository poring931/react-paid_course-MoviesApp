import React, { Component } from 'react'
import { Preloader } from './Preloader';

export default class Movie extends Component {

    state = {
        data: [],
    }
    
    getMoreInfo = () =>{

        let keys = Object.keys(this.state.data)

        if (!this.state.data[keys[0]]){
             fetch(`http://www.omdbapi.com/?apikey=df855818&plot=short&i=${this.props.imdbID}`)
            .then(response => response.json())
            .then(data =>this.setState({data: data}))
            this.forceUpdate()
        }
    }
  
    render() {

    let keys = Object.keys(this.state.data)



        return (
            <div id={this.props.imdbID} className="card movie_item ">
                <div className="card-image waves-effect waves-block waves-light">
                {
                    this.props.Poster === 'N/A' ? (
                        <img loading="lazy" decoding="async" onClick={this.getMoreInfo}  className="activator" src='https://dummyimage.com/300x300.png/99cccc/0b0b0b&text=%D0%91%D0%B5%D0%B7+%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F!'/>
                    ) : (
                        <img loading="lazy" decoding="async" onClick={this.getMoreInfo}  className="activator" src={this.props.Poster}/>
                    )
                
                }
                </div>
                <div className="card-content">
                <span onClick={this.getMoreInfo} className="card-title activator grey-text text-darken-4">{this.props.Title} <i className="material-icons right">more_vert</i> </span>
                    <p><b>{this.props.Year}</b> <span className="right">{this.props.Type}</span></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.Title} - {this.props.Year}<i className="material-icons right">close</i></span>

                    
                {
                    this.state.data[keys[0]] ? (
                        <div className="about_movie_">
                            <div >
                                <b>Actors: </b>
                                <span>{this.state.data.Actors}</span>
                            </div>
                            <div >
                                <b>Country: </b>
                                <span>{this.state.data.Country}</span>
                            </div>
                            <div >
                                <b>Awards: </b>
                                <span>{this.state.data.Awards}</span>
                            </div>
                            <div >
                                <b>BoxOffice: </b>
                                <span>{this.state.data.BoxOffice}</span>
                            </div>
                            <div >
                                <b>Country: </b>
                                <span>{this.state.data.Country}</span>
                            </div>
                            <div >
                                <b>Runtime: </b>
                                <span>{this.state.data.Runtime}</span>
                            </div>
                            <div >
                                <b>imdbRating: </b>
                                <span>{this.state.data.imdbRating}</span>
                            </div>
                            <div >
                                <b>imdbVotes: </b>
                                <span>{this.state.data.imdbVotes}</span>
                            </div>
                            <div >
                                <b>Genre: </b>
                                <span>{this.state.data.Genre}</span>
                            </div>
                            <div >
                                <b>Plot: </b>
                                <span>{this.state.data.Plot}</span>
                            </div>
                        </div>
                        
                    ) :
                    ( <Preloader/>)
                }
                </div>
       
            </div>
        )
    }
}
