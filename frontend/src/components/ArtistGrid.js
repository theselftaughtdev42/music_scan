import React from 'react';
import './ArtistGrid.css';
import { Link } from 'react-router-dom';

const ArtistGrid = ({ artists }) => {
  return (
    <div className='artist-container'>
      {artists.length === 0
      ?
        <p className="nothing-found-message">No artists found 🤨</p>
      :
      
      artists.map((artist, i) => (
        <Link
          to={`/artist/${artist.id}`}
          key={artist.id}
          className='artist-link'
        >
          <div key={artist.id} className='artist-tile'>
          {artist.name}
          </div>        
        </Link>
      ))}
    </div>
  );
};

export default ArtistGrid;
