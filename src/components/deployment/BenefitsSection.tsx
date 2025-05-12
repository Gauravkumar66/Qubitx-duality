import React from 'react';
import { CheckCircle, Clock, Shield, RefreshCw } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Advantages</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Key Benefits & Impact
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our object detection system provides numerous advantages for space station operations and safety.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <CheckCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Enhanced Safety</h3>
                <p className="mt-2 text-base text-gray-500">
                  Real-time tracking of critical equipment ensures crew members always have access to necessary safety items. Immediate alerts for misplaced or depleted oxygen supplies can prevent emergency situations.
                </p>
                <div className="mt-5 text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Learn more about safety improvements <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Clock className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Time Efficiency</h3>
                <p className="mt-2 text-base text-gray-500">
                  Automated inventory tracking reduces time spent searching for tools and equipment by up to 80%. Crew members can locate needed items instantly through the station's interface, maximizing productive work time.
                </p>
                <div className="mt-5 text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    View efficiency metrics <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Shield className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Mission Reliability</h3>
                <p className="mt-2 text-base text-gray-500">
                  Continuous monitoring ensures critical tools are always ready for planned operations and maintenance. Automated inventory verification before critical mission activities reduces the risk of delays.
                </p>
                <div className="mt-5 text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Explore mission impact <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <RefreshCw className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Adaptability</h3>
                <p className="mt-2 text-base text-gray-500">
                  The system continually improves through on-site learning, adapting to new equipment and station configurations. Modular design allows for expansion to detect additional object types as mission needs evolve.
                </p>
                <div className="mt-5 text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    See the adaptive capabilities <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-blue-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Return on Investment
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Quantifiable benefits of implementing the object detection system.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="border-r border-gray-200 pr-4">
                <p className="text-2xl font-bold text-blue-600">80%</p>
                <p className="text-sm text-gray-500">Reduction in time spent locating equipment</p>
              </div>
              <div className="border-r border-gray-200 px-4">
                <p className="text-2xl font-bold text-blue-600">95%</p>
                <p className="text-sm text-gray-500">Accuracy in critical equipment tracking</p>
              </div>
              <div className="pl-4">
                <p className="text-2xl font-bold text-blue-600">40hrs</p>
                <p className="text-sm text-gray-500">Monthly crew time saved for mission-critical tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;