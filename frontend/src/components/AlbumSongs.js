import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';
import SongList from './SongList';
import { useParams } from 'react-router-dom';
import './AlbumSongs.css'
import { Link } from 'react-router-dom';

const AlbumSongs = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState({});

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const res = await fetch(`${API_URL}/albums/by_id/${encodeURIComponent(albumId)}`); 
        const data = await res.json();
        data.songs.sort((a, b) => a.title.localeCompare(b.title));
        console.log(data)

        setAlbum(data);
      } catch (err) {
        console.error('Error fetching songs:', err);
      }
    };

    fetchAlbum();
  }, [albumId]);

  return (
    <div>
      <h1 className='page-title'>{album.name}</h1>
      {album.art_filepath && (
        <img 
          src={`${API_URL}/album_art/${encodeURIComponent(album.art_filepath)}`}
          alt="Album Art"
          className="main-album-art"
        />
      )}
      <p className='page-title'>
        By 
        {album.artist &&
          <Link
            to={`/artist/${album.artist?.id}`}
            className='album-artist-link'
          >
            {" " + album.artist?.name}
          </Link>        
        }
      </p>
      {album.songs && <SongList songs={album.songs} showArtist={false} showAlbumArt={false} />}
    </div>
  );
};

export default AlbumSongs;
