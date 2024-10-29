import React from 'react';
import './MovieCard.css';

interface MovieCardProps {
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, overview, release_date, poster_path }) => {
    return (
        <div className="movie-card">
            <div className="movie-image-container">
                <img src={poster_path} alt={title} className="movie-image" />
            </div>
            <div className="movie-details">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-description">{overview}</p>
                <p className="movie-release-date">Data de lançamento: {release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;
