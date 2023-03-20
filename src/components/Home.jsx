import React from 'react'
import { Header } from "./Header";
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
  return (
    <main>
      <Header/>
      
        <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/woman.png"
                alt="First slide"
              />
              <Carousel.Caption>
               <h3></h3>
               <p></p>
              </Carousel.Caption>
            </Carousel.Item>
           <Carousel.Item>
               <img
               className="d-block w-100"
               src="./img/mujeres.png"
               alt="Second slide"
               />

              <Carousel.Caption>
              <h3></h3>
              <p></p>
              </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
              <img
               className="d-block w-100"
              src="./img/smart-watch-889639.jpg"
              alt="Third slide"
              />

             <Carousel.Caption>
               <h3></h3>
               <p></p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
              <img
               className="d-block w-100"
              src="./img/smart.jpg"
              alt="Third slide"
              />

             <Carousel.Caption>
               <h3></h3>
               <p></p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
              <img
               className="d-block w-100"
              src="./img/iphone.jpg"
              alt="Third slide"
              />

             <Carousel.Caption>
               <h3></h3>
               <p></p>
             </Carousel.Caption>
           </Carousel.Item>
        </Carousel> 
        <div>Home</div>
    </main>
    
  )
}
