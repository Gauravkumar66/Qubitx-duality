import React from 'react';
import { Rocket, Server, Shield, Clock } from 'lucide-react';

const DeploymentPlan: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Implementation</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Deployment Strategy
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our comprehensive plan for real-world deployment in space station environments.
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Hardware Integration</dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-600">1</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Testing Phase</dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-600">2</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Crew Training</dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-600">3</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Full Deployment</dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-600">4</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative">
            <div className="h-full bg-gray-50 rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <Server className="h-8 w-8 text-blue-500" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">Hardware Requirements</h3>
              </div>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Edge Computing Device</p>
                    <p className="mt-1 text-sm text-gray-500">NVIDIA Jetson Xavier NX or equivalent space-certified hardware</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Camera Systems</p>
                    <p className="mt-1 text-sm text-gray-500">Multiple HD cameras (min. 1080p) with wide dynamic range</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Storage</p>
                    <p className="mt-1 text-sm text-gray-500">Minimum 500GB SSD for model and detection logs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Power Requirements</p>
                    <p className="mt-1 text-sm text-gray-500">10-15W continuous operation with surge protection</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="h-full bg-gray-50 rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-blue-500" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">Integration Process</h3>
              </div>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs font-bold">
                      1
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Hardware Installation</p>
                    <p className="mt-1 text-sm text-gray-500">Camera placement in key monitoring locations and edge computing device installation in a central server bay.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs font-bold">
                      2
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Software Deployment</p>
                    <p className="mt-1 text-sm text-gray-500">Model installation and optimization for the target hardware with onboard calibration system.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs font-bold">
                      3
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">System Integration</p>
                    <p className="mt-1 text-sm text-gray-500">Connection to station inventory management system and crew notification protocols.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-500 text-white text-xs font-bold">
                      4
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-900">Testing & Validation</p>
                    <p className="mt-1 text-sm text-gray-500">Rigorous in-situ testing with multiple object configurations and environmental conditions.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-blue-500" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">Deployment Timeline</h3>
              </div>
              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-between">
                  <div>
                    <span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800">
                      Phase 1
                    </span>
                  </div>
                  <div>
                    <span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800">
                      Phase 2
                    </span>
                  </div>
                  <div>
                    <span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800">
                      Phase 3
                    </span>
                  </div>
                  <div>
                    <span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-medium text-blue-800">
                      Launch
                    </span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Q3 2025</p>
                    <p className="text-gray-500">Hardware prep & testing</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Q4 2025</p>
                    <p className="text-gray-500">Earth-based simulation</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Q1 2026</p>
                    <p className="text-gray-500">Crew training</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Q2 2026</p>
                    <p className="text-gray-500">Full deployment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentPlan;