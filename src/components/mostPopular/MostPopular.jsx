import React from "react";
import "./MostPopular.css";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const MostPopular = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const db = getFirestore();
    const itemsCollection = collection(db, "brand-qwerty");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(docs);
    });
  }, []);

  return (
    <section className="section" id="mostPopular">
      <h1 className="subtitle">Most Popular Products.</h1>
      <div className="containerxl">
      <div className="container">
        <input type="radio" name="slider" id="s1" />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />
        <div className="cards">
          {products.map((prod, index) => {
            const slideId = `s${index + 1}`;
            return (
              <label key={prod.id} htmlFor={slideId} id={`slide${index + 1}`}>
                <div className="card">
                  <div className="infos">
                    <button className="btn-new">new</button>
                    <span className="name">{prod.name}.</span>
                    <span className="price">$ {prod.price}</span>
                    <button className="btn-details">
                    GO TO CATALOG
                    </button>
                    <div className="image">
                    <img src={prod.img} alt="qwerty-shoe" />
                  </div>
                    <div className="actions">
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                      
                      <span className="qwertybot">{prod.category}</span><span>shoes</span>
                     
                      <span className="material-symbols-outlined">
                        shopping_bag
                      </span>
                    </div>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default MostPopular;
