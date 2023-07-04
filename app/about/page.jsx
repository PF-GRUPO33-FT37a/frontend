'use client';
import Image from 'next/image';
import about from '../../public/aboutBanner.png';
import egPage1 from '../../public/react.png';
import egPage4 from '../../public/js.png';
import egPage5 from '../../public/nextlogo.svg';
import { motion } from 'framer-motion';
import Map from '@/components/Map';
import FormContactUs from '@/components/FormContactUs';

export default function About() {
  const images = [egPage1, egPage4, egPage5];

  return (
    <main className='min-h-[100vh]'>
      <section className='flex w-[100%] mx-[auto] justify-center py-[5rem]'>
        <Image
          className='w-[100%] object-cover h-[60vh]'
          src={about}
          alt='img-header'
          width={1500}
          height={1500}
        />
      </section>
      <section className='flex w-[80%] mx-[auto] justify-center pb-[5rem]'>
        <div className='flex flex-col'>
          <motion.h2
            className='text-[3.4rem] font-semibold text-center pb-[2rem]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>
          <motion.div
            className='bg-white rounded-lg shadow-lg p-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className='text-[1.4rem]'>
            We are a group of students with previous knowledge in previous projects and we are looking forward to develop this new digital product
              where we can offer a wide variety of reliable and high quality items. This project was created thinking in making an
              e-commerce on a global scale where users can find variety and quality in different brands of clothing at more affordable prices.
              affordable prices. Our goal is to provide a unique user experience and satisfy their needs with products that are relevant to them, without losing sight of their satisfaction.
              them, without losing sight of the end customer's satisfaction.
            </p>
            <p className='text-[1.4rem]'>
            We focus on innovation, quality and customer service. We work closely with our suppliers and customers to ensure that
              customers to ensure that all products meet the highest standards. We also strive to keep abreast of the latest trends in fashion and technology so that we can always
              the latest trends in fashion and technology so that we can always offer up-to-date and attractive products.
            </p>
      
            <p className='text-[1.4rem]'>
            Thank you for visiting our website and being part of our history! We hope you enjoy your shopping experience with us and that you find products that make you feel special and fashionable.
              and that you find products that make you feel special and fashionable.
            </p>
          </motion.div>
        </div>
      </section>
      <section className='w-[80%] mx-[auto] justify-center pb-[5rem]'>
        <h2 className='text-[3.4rem] font-semibold text-center pb-[3rem]'>
          Technologies Used
        </h2>
        <div className='flex flex-row justify-around'>
          {images.map((image, index) => (
            <motion.div key={index} whileHover={{ opacity: 0.5 }}>
              <Image
                className='object-cover w-[20.5rem] h-[18.5rem] rounded-[1rem] border shadow-lg'
                src={image}
                alt={`page-${index}`}
              />
            </motion.div>
          ))}
        </div>
        <Map />
      </section>
      <section className='w-[80%] mx-[auto] justify-center pb-[5rem]'>
        <h2 className='text-[3.4rem] font-semibold text-center pb-[2rem]'>
          Contact Us
        </h2>
        <FormContactUs />
      </section>
    </main>
  );
}
