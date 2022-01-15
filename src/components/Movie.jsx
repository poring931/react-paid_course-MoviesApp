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
                        <img loading="lazy" decoding="async" onClick={this.getMoreInfo}  className="activator" src='https://via.placeholder.com/150/0000FF/808080 ?Text=Image not found'/>
                    ) : (
                        <img loading="lazy" decoding="async" onClick={this.getMoreInfo}  className="activator" src={this.props.Poster}/>
                    )
                
                }

                </div>
                <div className="card-content">
                <span onClick={this.getMoreInfo} className="card-title activator grey-text text-darken-4">{this.props.Title} <i className="material-icons right">more_vert</i> </span>
                    <p>{this.props.Year} <span className="right">{this.props.Type}</span></p>
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
                                <b>Awards: </b>
                                <span>{this.state.data.Awards}</span>
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
                                <b>Plot: </b>
                                <span>{this.state.data.Plot}</span>
                            </div>
                        </div>
                        
                    ) :
                    ( <Preloader/>)
                }
                </div>s
       
            </div>
        )
    }
}
