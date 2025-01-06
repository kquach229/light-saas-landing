'use client';
import CheckIcon from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const pricingTiers = [
  {
    title: 'Free',
    monthlyPrice: 0,
    buttonText: 'Get started for free',
    popular: false,
    inverse: false,
    features: [
      'Manage up to 5 plants',
      'Personalized care reminders (watering, pruning, etc.)',
      'Basic plant database access',
      'Track tasks like watering and fertilizing',
      'Community support',
    ],
  },
  {
    title: 'Pro',
    monthlyPrice: 9,
    buttonText: 'Sign up now',
    popular: true,
    inverse: true,
    features: [
      'Manage up to 50 plants',
      'Advanced care reminders with custom schedules',
      'In-depth plant database access with detailed care tips',
      'Track unlimited tasks and maintenance logs',
      'Priority support',
      'Exclusive features like plant health tracking and growth stats',
    ],
  },
  // sfsfhsfs
  {
    title: 'Business',
    monthlyPrice: 25,
    buttonText: 'Sign up now',
    popular: false,
    inverse: false,
    features: [
      'Manage unlimited plants',
      'Team collaboration tools for shared plant care',
      'Full plant database access with exotic plant profiles',
      'Customizable reminders and care plans',
      'Detailed analytics for plant health and growth tracking',
      '5GB storage for plant photos and notes',
      'Premium support with dedicated assistance',
    ],
  },
];

export const Pricing = () => {
  return (
    <section className='py-24 bg-white'>
      <div className='container'>
        <div className='section-heading'>
          <h2 className='section-title'>Pricing</h2>
          <p className='section-description mt-5'>
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={twMerge(
                  'card',
                  inverse === true && 'border-black bg-[#97b399] text-white'
                )}>
                <div className='flex justify-between items-center'>
                  <h3
                    className={twMerge(
                      'text-lg font-bold text-black/50',
                      inverse === true && 'text-white/80'
                    )}>
                    {title}
                  </h3>
                  {popular && <div className='text-xs'>Popular</div>}
                </div>
                <div className='flex items-baseline gap-1 mt-[30px]'>
                  <span className='text-4xl font-bold tracking-tighter leading-none'>
                    ${monthlyPrice}
                  </span>
                  <span className='tracking-tight font-bold text-black/50'>
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    'btn btn-primary w-full mt-[30px]',
                    inverse === true && 'bg-white text-black'
                  )}>
                  {buttonText}
                </button>
                <ul className='flex flex-col gap-5 mt-8'>
                  {features.map((feature) => (
                    <li className='text-sm flex items-center gap-4'>
                      <CheckIcon className='h-6 w-6' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
