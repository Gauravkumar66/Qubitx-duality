import React from 'react';
import { ModelMetric } from '../../types';

const metrics: ModelMetric[] = [
  {
    name: 'Mean Average Precision (mAP@0.5)',
    value: 98.2,
    description: 'Accuracy of object detection at 50% IoU threshold'
  },
  {
    name: 'mAP@0.5:0.95',
    value: 87.5,
    description: 'Average mAP across multiple IoU thresholds'
  },
  {
    name: 'Precision',
    value: 96.8,
    description: 'Percentage of correct positive predictions'
  },
  {
    name: 'Recall',
    value: 95.3,
    description: 'Percentage of actual positives correctly identified'
  },
  {
    name: 'F1 Score',
    value: 96.0,
    description: 'Harmonic mean of precision and recall'
  },
  {
    name: 'Inference Time',
    value: 15,
    description: 'Processing time per frame in milliseconds'
  }
];

const ResultsOverview: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Performance Analysis</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Model Evaluation Results
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Comprehensive performance metrics from testing across various scenarios and conditions.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.name} className="bg-gray-50 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {metric.name}
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {metric.name === 'Inference Time' ? `${metric.value} ms` : `${metric.value}%`}
                  </dd>
                  <p className="mt-2 text-sm text-gray-600">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Class-wise Performance
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Object Class
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Precision
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Recall
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        F1 Score
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        AP@0.5
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Toolbox
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        97.2%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        96.8%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        97.0%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        98.5%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Oxygen Tank
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        96.5%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        93.9%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        95.2%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        97.9%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsOverview;