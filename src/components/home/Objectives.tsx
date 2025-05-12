import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

const Objectives: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Project Objectives</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Key Outcomes & Deliverables
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg divide-y divide-gray-200">
          <div className="px-6 py-5 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Fully Trained YOLOv8 Model</h3>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <CheckCircle className="h-4 w-4 mr-1" /> Primary Goal
            </span>
          </div>
          <div className="px-6 py-5">
            <p className="text-gray-600">
              Develop a fully trained YOLOv8-based object detection model capable of accurately identifying and classifying critical objects in space station environments:
            </p>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>Toolboxes with various configurations</li>
              <li>Oxygen tanks of different sizes and orientations</li>
              <li>Additional critical mission equipment</li>
            </ul>
          </div>

          <div className="px-6 py-5 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Model Optimization</h3>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <CheckCircle className="h-4 w-4 mr-1" /> Secondary Goal
            </span>
          </div>
          <div className="px-6 py-5">
            <p className="text-gray-600">
              Test and optimize the model for performance under challenging scenarios that simulate real space station conditions:
            </p>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>Varied lighting conditions (bright, dim, high contrast)</li>
              <li>Partial occlusions from other equipment</li>
              <li>Different viewing angles and distances</li>
              <li>Motion blur and other image quality factors</li>
            </ul>
          </div>

          <div className="px-6 py-5 sm:flex sm:items-center sm:justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Real-World Deployment</h3>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              <CheckCircle className="h-4 w-4 mr-1" /> Final Goal
            </span>
          </div>
          <div className="px-6 py-5">
            <p className="text-gray-600">
              Prepare the model for real-world deployment with the following characteristics:
            </p>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>High accuracy (&gt;95%) and reliability in object identification</li>
              <li>Fast inference time suitable for real-time applications</li>
              <li>Low computational requirements for space-based hardware</li>
              <li>Adaptability to new objects with minimal retraining</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;