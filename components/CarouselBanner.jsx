'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import offerts from '../public/accesories.jpg';
import hombres from '../public/hombresbanner.png';
import women from '../public/header.jpg';
import children from  '../public/kids.jpg';
import { motion, AnimatePresence } from "framer-motion";

export default function CarouselBanner() {
  const images = [hombres, women ,children, offerts];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia el valor "5000" para ajustar la duración de cambio de imagen

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    setSelectedImage(images[currentIndex]);
  }, [currentIndex]);

  const styles = {
    carouselContainer: {
      position: "relative",
      width: "100%",
      height: "0",
      paddingBottom: "56.25%", // Aspect ratio of 16:9 (Change as per your desired aspect ratio)
    },
    slideItem: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: isImageLoaded ? 1 : 0,
      transition: "opacity 0.5s",
    },
  };

  return (
    <section style={styles.carouselContainer}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: isImageLoaded ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.slideItem}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              onLoad={handleImageLoad}
              className="absolute inset-0 w-full h-full object-cover bottom-0"
              src={selectedImage}
              alt="image"
              layout="fill"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}   





