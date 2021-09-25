// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
// import { getMovieDeteilsPage } from '../../services/api';
// import MovieInfoCard from './MovieInfo';

// function MovieDetailsPage() {
//     const [movie, setMovie] = useState(null);
//     const { id } = useParams;
//     useEffect(() => {
//         getMovieDeteilsPage(id).then(setMovie)

//      }, [id])
//     return (
//         <div>
//             {movie && <MovieInfoCard movie={movie}/>}
//         </div>
// )
//  }

// export default MovieDetailsPage;





import React, { Component } from 'react';
import axios from 'axios';

class MovieDetailsPage extends Component {
    state = {
        book: null,
        // poster_path: null,
        // title: null,
        // genres: null,
        // id: null,
        // popularity: null,

    };
    async componentDidMount() {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=a97a44bb2f674ee3272cc719c5c287d9&language=en-US`);
        console.log(response.data)
        this.setState({book: response.data})
    }
    render() {
        return <>
        <h1>Страница одной книги {this.props.match.params.movieId} </h1>
            <img src={`https://image.tmdb.org/t/p/original${this.state.poster_path}`} alt="" />
            <h2>{this.state.title}</h2>
            <p>{ this.state.genres}</p>
           
        </>
    
    }
    
}

export default MovieDetailsPage;