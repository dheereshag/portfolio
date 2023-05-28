import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonials.scss";

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "brands"]';
    client.fetch(query).then((data) => {
      setBrands(data);
    });
  }, []);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <motion.div
            className="app__testimonials-item app__flex"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <img
              src={urlFor(testimonials[currentIndex].image)}
              alt="testimonial"
            />
            <div className="app__testimonials-content">
              <p className="">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="">{testimonials[currentIndex].name}</h4>
                <h5 className="">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </motion.div>
          <div className="app__testimonials-btns app__flex">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </motion.div>
          </div>
        </>
      )}
      <div className="app__testimonials-brands app__flex">
        {brands?.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <motion.img
              src={urlFor(brand.image)}
              alt={brand.name}
              whileHover={{
                scale: [1, 1.1, 1, 1.1, 1],
                rotate: [0, -2, 0, 2, 0],
                transition: { duration: 0.15, loop: Infinity },
              }}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "testimonials"),
  "testimonials",
  "bg-blue-50"
);
