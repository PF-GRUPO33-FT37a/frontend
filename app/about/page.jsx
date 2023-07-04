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
          <motion.h3
            className='text-[1.4rem]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Somos un grupo de estudiantes con conocimientos previos en anteriores proyectos que buscamos desarrollar este nuevo producto digital
            donde podamos ofrecer una gran variedad de artículos confiables y de excelente calidad. Este proyecto fue creado pensando en hacer un
            e-commerce a escala global donde los usuarios puedan encontrar variedad y calidad en diferentes marcas de ropa a precios más
            accesibles. Nuestro objetivo es brindar una experiencia única al usuario y satisfacer sus necesidades con productos relevantes para
            ellos, sin perder de vista la satisfacción del cliente final.
          </motion.h3>
          <motion.h3
            className='text-[1.4rem]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nos enfocamos en la innovación, la calidad y el servicio al cliente. Trabajamos en estrecha colaboración con nuestros proveedores y
            clientes para garantizar que todos los productos cumplan con los estándares más altos. Además, nos esforzamos por mantenernos al tanto
            de las últimas tendencias en moda y tecnología para poder ofrecer siempre productos actualizados y atractivos.
          </motion.h3>
          <motion.h3
            className='text-[1.4rem]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Estamos comprometidos con la satisfacción del cliente y nos esforzamos por brindar un excelente servicio en cada interacción. Siempre
            estamos abiertos a comentarios y sugerencias de nuestros clientes, ya que creemos en la importancia de escuchar y mejorar
            constantemente.
          </motion.h3>
          <motion.h3
            className='text-[1.4rem]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            ¡Gracias por visitar nuestra página y ser parte de nuestra historia! Esperamos que disfrutes de tu experiencia de compra con nosotros
            y que encuentres productos que te hagan sentir especial y a la moda.
          </motion.h3>
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
                className='object-cover w-[16rem] h-[12rem] rounded-[1rem] border shadow-lg'
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
