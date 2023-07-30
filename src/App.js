import React, { useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';
import Cardcontent from './layout/Cardcontent';
import Footer from './layout/Footer';

function App() {
  const[wishlist,setWishlist] =useState([]);

   const addedToWishlist = (item) => {
    setWishlist([...wishlist,item]);
   }

   const removedFromWishlist = (item) =>{
    setWishlist(wishlist.filter((wishItem) => wishItem !== item));
   }

  return (
    <div className="App">
       <Header  wishCount={wishlist.length}/>
       <Content />
       <Cardcontent addedToWishlist={addedToWishlist}
       removedFromWishlist={removedFromWishlist}/>
       <Footer />
    </div>
  );
}

export default App;
