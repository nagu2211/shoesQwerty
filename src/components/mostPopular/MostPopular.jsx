import React from "react";
import "./MostPopular.css";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

import { Link } from "react-scroll";

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
      <motion.h1
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="subtitle"
      >
        Most Popular Products.
      </motion.h1>
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="clickCard"
      >
        <span className="material-symbols-outlined">expand_more</span>
        <h5>Click the card for open</h5>
        <span className="material-symbols-outlined">expand_more</span>
      </motion.div>
      
        <motion.div 
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container">
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
                      <Link to="catalog" smooth={true} spy={true} isDynamic={true}>
                      <button className="btn-details">DETAILS</button>
                      </Link>
                      <div className="image">
                        <img src={prod.img} alt="qwerty-shoe" />
                      </div>
                      <div className="actions">
                        <span className="material-symbols-outlined">
                          favorite
                        </span>

                        <span className="qwertybot">{prod.category}</span>
                        <span>shoes</span>

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
        </motion.div>
      
    </section>
  );
};

export default MostPopular;
