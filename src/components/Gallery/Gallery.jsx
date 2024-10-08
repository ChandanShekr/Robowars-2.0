import React, { useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Gallery.css";
import pub4 from "../../assets/publication4.jpg";
import pub3 from "../../assets/publication3.jpg";
import pub2 from "../../assets/publication2.jpg";
import pub1 from "../../assets/publication1.jpg";

const images = [pub1, pub2, pub3, pub4, pub1];

const Gallery = () => {
  const [positions, setPositions] = useState([0, 1, 2, 3, 4]);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  if (inView) {
    controls.start("visible");
  }

  const handleClick = (index) => {
    const newPositions = [...positions];
    const heroIndex = newPositions.indexOf(0);
    [newPositions[heroIndex], newPositions[index]] = [
      newPositions[index],
      newPositions[heroIndex],
    ];
    setPositions(newPositions);
  };

  return (
    <>
      <h1 className="mediaText">Publications and Media</h1>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0.8, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <div className="gallery">
          {positions.map((pos, index) => (
            <div
              key={index}
              className="item"
              data-pos={pos}
              onClick={() => handleClick(index)}
            >
              <img src={images[index]} alt={`Gallery item ${index}`} />
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Gallery;
