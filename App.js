import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Gagal ambil data:', err));
  }, []);
  
  console.log("Data produk:", products);

  return (
    <div className="App">
      <h1>Daftar Produk</h1>
      <div className="produk-container">
        {products.map((product) => (
          <div key={product.id} className="produk">
            <img src={product.image_url} alt={product.name} width="200" />
            <h2>{product.name}</h2>
            <p>Rp {product.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
