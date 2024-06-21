import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';
import img1 from '../img/box_wadiz.jpg'
import img2 from '../img/line_wadiz.jpg'
import img3 from '../img/tech_wadiz.png'


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [img1,img2,img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
