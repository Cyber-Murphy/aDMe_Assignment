import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; 
import './App.css'; 

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        setImages(prevImages => [...prevImages, ...response.data]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [page]);

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Navbar /> {}
      <div className="container">
        <h1>Image Gallery</h1>
        <div className="heading"> {}
          <h2>Welcome to Our Image Gallery!</h2>
          <p>Discover stunning images from around the world.</p>
        </div>
        <div className="image-grid">
          {images.map(image => (
            <img key={image.id} src={image.download_url} alt={image.author} />
          ))}
        </div>
        <button onClick={loadMoreImages}>Load More</button>
      </div>
    </div>
  );
}

export default App;
