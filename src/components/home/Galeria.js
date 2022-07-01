import { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../img/slider-image-1.jpg";
import img2 from "../../img/slider-image-2.jpg";
import img3 from "../../img/slider-image-3.jpg";
import img4 from "../../img/slider-image-4.jpg";

export const Galeria = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="w-100" style={{height: '30vh'}} src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>Imagen de Galería</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="w-100" style={{height: '30vh'}} src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Imagen de Galería</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="w-100" style={{height: '30vh'}} src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Imagen de Galería</h3>

          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="w-100" style={{height: '30vh'}} src={img4} alt="Third slide" />

        <Carousel.Caption>
          <h3>Imagen de Galería</h3>

          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
