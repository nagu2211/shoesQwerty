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
    <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- popular Delivery -</h3>
        <h1 className="text-center section-heading">Trending food</h1>
      </div>
      <div className="container">
        <div className="swiper tranding-slider">
          <div className="swiper-wraper">
            {/* Slide-start */}
            {products.map((prod) => {
              return (
                <div key={prod.id} className="swiper-slide tranding-slide">
                  <div className="tranding-slide-img">
                    <img src={prod.img} alt="qwertyShoe" />
                  </div>
                  <div className="tranding-slide-content">
                    <h1 className="food-price">{prod.price}</h1>
                    <div className="tranding-slide-content-bottom">
                      <h2 className="food-name">{prod.name}</h2>
                      <h3 className="food-rating">
                        <span>4.5</span>
                        <div className="rating">
                          <span className="material-symbols-outlined">
                            star_rate
                          </span>
                          <span className="material-symbols-outlined">
                            star_rate
                          </span>
                          <span className="material-symbols-outlined">
                            star_rate
                          </span>
                          <span className="material-symbols-outlined">
                            star_rate
                          </span>
                          <span className="material-symbols-outlined">
                            star_rate
                          </span>
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Slide-end */}
          </div>
          <div className="tranding-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default MostPopular;
