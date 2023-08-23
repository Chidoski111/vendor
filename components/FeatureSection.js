import React from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const featureSection = () => {
    const features = [
        {
          name: 'Bank-Grade Security',
          description:
            'We manage your digital assets using piedra proprietary offline cold storage systems, meaning your funds are protected',
          icon: CloudArrowUpIcon,
        },
        {
          name: 'User-Centered Design',
          description:
          'Intuitive experiences are rooted in user-centered design principles.',
            icon: LockClosedIcon,
        },
        {
          name: '24/7 Support',
          description:
          'We provide bi-lingual support around the clock and guarantee you will always talk to a human, whether in live-chat or emails. ',
          icon: ArrowPathIcon,
        },
        {
          name: 'Advanced security',
          description:
          'Advanced security measures include continuous monitoring and auditing of systems and networks to identify security vulnerabilities, anomalies, or breaches.',          icon: FingerPrintIcon,
        },
      ]
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">The most trusted cryptocurrency platform</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Intuitive experience managing your personal budgets.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 font-[400]">
        Piedra is a cryptocurrency brokerage that allows you to buy, sell, swap and store Bitcoin, Ethereum,
And <span className='text-[#6366F1] font-[400]'>70+</span>
  other cryptocurrencies online.
With offices across the North America, Piedra provides its services at financial institution standard.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>  )
}

export default featureSection