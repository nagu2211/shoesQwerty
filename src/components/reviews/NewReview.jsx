import React, { useState } from "react";
import "./NewReview.css";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const NewReview = ({ onSubmit }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (avatar === "" || name === "" || review === "") {
      toast.error("Please fill in all the fields.");
    } else {
      const db = getFirestore();
      const orderCollection = collection(db, "reviews");

      const order = {
        avatar,
        name,
        review,
      };

      addDoc(orderCollection, order)
        .then(() => {
          toast.success("Review submitted successfully!");
          setAvatar("");
          setName("");
          setReview("");
          setTimeout(() => {
            onSubmit();
          }, 3000);
          
        })
        .catch((error) => {
          toast.error("An error occurred while submitting the review.");
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <section className="section" id="newReview">
      <div className="container-form">
        <div className="card">
        <div className="card2">
            <form className="form" onSubmit={handleSubmit}>
            <p id="heading">Review</p>
              <div className="field">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="48"
                  className="input-icon"
                >
                  <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z" />
                </svg>
                <input
                  type="text"
                  className="input-field"
                  placeholder="image URL"
                  autoComplete="off"
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </div>
              <div className="field">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="48"
                  className="input-icon"
                >
                  <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
                </svg>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Name"
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="field">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="48"
                  className="input-icon"
                >
                  <path d="M80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240L80-80Zm134-220h606v-520H140v600l74-80Zm-74 0v-520 520Z" />
                </svg>
                <textarea
                  type="textarea"
                  className="input-textarea"
                  placeholder="(max-character:220)"
                  maxLength={200}
                  onChange={(e) => setReview(e.target.value)}
                />
              </div>
              <button className="button3" type="submit">Send Review</button>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default NewReview;

         
              
                
              
              
              