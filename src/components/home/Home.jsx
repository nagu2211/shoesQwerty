import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
//motion & variants
import { motion } from 'framer-motion'
import {fadeIn} from '../../Variants'

const Home = () => {
  return (
    <section className="section bg" id="home">
      <div className="contHome">
        <motion.h1
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        >Brand Qwerty</motion.h1>
        <motion.p
         variants={fadeIn("down", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }}
        >
          Your ideal website, where you can acquire the latest in Shoes
          <br /> faster, safer, and above all, more economical. What are you
          waiting for?
        </motion.p>
        <div>
          <Link to="qwerty" smooth={true} spy={true} isDynamic={true}>
            <motion.button 
             variants={fadeIn("up", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="cta">
              <span>Ver mas</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
