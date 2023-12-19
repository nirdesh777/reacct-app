import React, { useState, useEffect } from 'react';
import '/Users/nirdeshjungpandey/react-auth-starter/front-end/src//css/Home.css';


function Homepage() {
 const [products, setProducts] = useState([]);

 useEffect(() => {
    fetchProducts();
 }, []);

 const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const json = await response.json();
      setProducts(json);
    } catch (err) {
      console.log(err);
    }
 };
 return (
    <div className="App">
      <header className="App-header">
        <h1>Product Page</h1>
      </header>
      <main className="App-main">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </main>
    </div>
 );
}

export default Homepage;