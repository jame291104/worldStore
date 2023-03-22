import React from 'react'
import '../styles/home.css'
import { useEffect, useState } from 'react';
import { Header } from "./Header";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Footer } from "./Footer";


export const Home = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  const getApi = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();

        setProducts(data)
      } catch (error) {
        console.log("uy parce")
      }
  }
  //Capturando valor

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //Filtrado

  let results = []
  if (!search) {
    results = products
  }else{
    results = products.filter( (dato) =>
    dato.title.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }


  useEffect(() => {
   getApi()
  }, [])
  
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
        <div className='my-5 row justify-content-center  mx-0'>
          <div className="input-group mb-5 my-5">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
                <input value={search} onChange={searcher} type="text" className="form-control" placeholder="Buscar producto" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          {
            results.map((product)=>
            <Card className='m-4 px-0' key={product.id} style={{ width: '18rem' }}>
            <Card.Img  className='py-3 px-3' variant="top" src={product.image} 
            width={200}
            height={300}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>Stock disponible</Card.Text>
              <Card.Text className='h3 price'>${product.price}</Card.Text>
            </Card.Body>
            <button className='buy'>Comprar <i class="bi bi-cart-check-fill"></i></button>
          </Card>
               )
          }
           
        </div>
        <Footer/>
    </main>
    
  )
}
