'use client';
import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';
import avatar3 from '@/assets/avatar-3.png';
import avatar4 from '@/assets/avatar-4.png';
import avatar5 from '@/assets/avatar-5.png';
import avatar6 from '@/assets/avatar-6.png';
import avatar7 from '@/assets/avatar-7.png';
import avatar8 from '@/assets/avatar-8.png';
import avatar9 from '@/assets/avatar-9.png';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    text: 'As a seasoned plant enthusiast, PlantWise has completely revolutionized how I care for my collection.',
    imageSrc: avatar1.src,
    name: 'Jamie Rivera',
    username: '@jamiegreenery',
  },
  {
    text: 'Our office plants have never looked better! The team loves how easy PlantWise makes it to keep them thriving.',
    imageSrc: avatar2.src,
    name: 'Josh Smith',
    username: '@plantprosmith',
  },
  {
    text: 'PlantWise helped me save my struggling fiddle leaf fig! The personalized reminders are a game-changer.',
    imageSrc: avatar3.src,
    name: 'Morgan Lee',
    username: '@morganplantparent',
  },
  {
    text: 'I was amazed at how intuitive and user-friendly PlantWise is. It made managing my plants so much easier.',
    imageSrc: avatar4.src,
    name: 'Casey Jordan',
    username: '@plantlovercj',
  },
  {
    text: 'Keeping my indoor jungle alive used to be a challenge. With PlantWise, I always know exactly what my plants need.',
    imageSrc: avatar5.src,
    name: 'Taylor Kim',
    username: '@taylorkeepsgreen',
  },
  {
    text: 'The detailed care tips and advanced reminders make PlantWise a must-have for anyone serious about their plants.',
    imageSrc: avatar6.src,
    name: 'Riley Smith',
    username: '@rileysprouts',
  },
  {
    text: 'Adopting PlantWise has made plant care simple and stress-free for our family. Even the kids love helping out!',
    imageSrc: avatar7.src,
    name: 'Jordan Patel',
    username: '@jordangrows',
  },
  {
    text: 'With PlantWise, I’ve finally stopped overwatering my plants. My succulents have never looked happier!',
    imageSrc: avatar8.src,
    name: 'Sam Dawson',
    username: '@succulent_sam',
  },
  {
    text: 'The reminders and care insights are spot-on. PlantWise makes keeping my plants healthy effortless.',
    imageSrc: avatar9.src,
    name: 'Casey Harper',
    username: '@caseygreenthumb',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: '-50%',
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className='flex flex-col gap-6 pb-6'>
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div key={text} className='card'>
              <div>{text}</div>
              <div className='flex items-center gap-2 mt-5'>
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className='h-10 w-10 rounded-full'
                />
                <div className='flex flex-col'>
                  <div className='font-medium tracking-tight leading-5'>
                    {name}
                  </div>
                  <div className='leading-5 tracking-tight'>{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className='bg-white'>
      <div className='container'>
        <div className='section-heading'>
          <div className='flex justify-center'>
            <div className='tag'>Testimonials</div>
          </div>
          <h2 className='section-title mt-5'>What our users say</h2>
          <p className='section-description mt-5'>
            From its intuitive design to powerful features, PlantWise has become
            the go-to app for plant lovers everywhere, helping them care for
            their greenery with confidence and ease.
          </p>
        </div>
        <div className='flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden'>
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className='hidden md:block'
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className='hidden lg:block'
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
