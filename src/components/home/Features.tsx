import React from 'react';
import { Database, Eye, Zap, Shield } from 'lucide-react';

const features = [
  {
    name: 'Synthetic Data Training',
    description:
      'Train object detection models using synthetic data generated from Falcon, eliminating the need for costly real-world data collection.',
    icon: Database,
  },
  {
    name: 'Advanced Detection',
    description:
      'Precisely detect and classify critical objects like toolboxes and oxygen tanks in challenging space station environments.',
    icon: Eye,
  },
  {
    name: 'Optimized Performance',
    description:
      'Designed to handle varied lighting conditions, occlusions, and other real-world challenges with high accuracy.',
    icon: Zap,
  },
  {
    name: 'Deployment Ready',
    description:
      'Built for reliable real-world deployment with high efficiency and minimal computational requirements.',
    icon: Shield,
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Capabilities</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Advanced Space Station Object Detection
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our YOLOv8-based detection model offers unprecedented accuracy for critical space station environments.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;