import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import images from "@/images";

const Slider = () => {
//   console.log(images);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth((carousel.current?.scrollWidth ?? 0 ) - (carousel.current?.offsetWidth ?? 0));
  }, []);

  return (
    <motion.div className="carousel" ref={carousel} whileTap={{cursor:"grabbing"}}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0 , left:-width }}
        className="inner-carousel"
      >
        {images.map((image) => {
          return (
            <motion.div className="item" key={image.src}>
              <Image
                src={image}
                alt=""
                style={{ height: "100%", width: "100%", borderRadius: "2rem" }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
