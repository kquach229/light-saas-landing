'use client';
import productImage from '@/assets/product-image.png';
import reduction from '@/assets/reduction.png';
import air from '@/assets/air.png';
import Image from 'next/image';
import showcaseImage from '@/assets/showcase.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className='bg-gradient-to-b from-[#FFFFFF] to-[#97b399]/20 py-24 overflow-x-clip'>
      <div className='container'>
        <div className='section-heading'>
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className='section-title mt-5'>
            A more effective way to track and maintain your plants
          </h2>
          <p className='section-description mt-5'>
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className='relative'>
          <Image
            src={showcaseImage}
            alt='Product Image'
            className='mt-10 rounded-lg'
          />
          <motion.img
            src={air.src}
            alt='Pyramid Image'
            height={262}
            width={262}
            className='hidden md:block absolute -right-36 -top-32'
            style={{
              translateY,
            }}
          />
          <motion.img
            src={reduction.src}
            alt='Tube image'
            height={248}
            width={248}
            className='hidden md:block absolute bottom-24 -left-36'
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
