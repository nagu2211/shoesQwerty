import React, { useState, useEffect } from "react";
import "./Reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import NewReview from "./NewReview";

const Reviews = () => {
  const [showNewReview, setShowNewReview] = useState(false);
  const [customerRev, setCustomerRev] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "reviews");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCustomerRev(docs);
    });
  }, []);

  const handleFormSubmit = () => {
    const db = getFirestore();
    const itemsCollection = collection(db, "reviews");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCustomerRev(docs);
    });

    setShowNewReview(false);
  };

  const handleClick = () => {
    setShowNewReview(true);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (showNewReview) {
    return <NewReview onSubmit={handleFormSubmit} />;
  } else {
    return (
      <section className="section" id="reviews">
        <h1 className="subtitleRev">Customer Reviews.</h1>
        <div className="btnRev">
          <button className="shadow__btn" onClick={handleClick}>
            New Review
          </button>
        </div>
        <div className="carousel">
          <Slider {...settings}>
            {customerRev.map((customer) => (
              <div className="box" key={customer.id}>
                <div className="caja">
                  <div className="user">
                    <img src={customer.avatar} alt="user" />
                    <i className="fa-sharp fa-solid fa-comment"></i>
                    <h3>{customer.name}</h3>
                    <div className="comentarios">
                      <p>{customer.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
};

export default Reviews;
