import React from 'react';

const DatasetInfo: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Training Data</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Synthetic Dataset Generation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our approach leverages synthetic data to overcome the limitations of real-world data collection in space environments.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Space station environment" 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Environment Modeling</h3>
              <p className="mt-2 text-sm text-gray-500">
                Detailed 3D modeling of space station interiors with accurate lighting, materials, and physics properties.
                Multiple environment variations to ensure model generalization.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/23049/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Synthetic object models" 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Object Modeling</h3>
              <p className="mt-2 text-sm text-gray-500">
                High-fidelity 3D models of target objects (toolboxes, oxygen tanks) with physically accurate properties.
                Multiple variations in appearance, size, and condition to improve detection robustness.
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Data augmentation" 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Data Augmentation</h3>
              <p className="mt-2 text-sm text-gray-500">
                Extensive augmentation pipeline including varied lighting conditions, occlusions, camera perspectives, and image quality degradation to simulate real-world challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Dataset Statistics</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Training Images
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Validation Images
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Instances
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Variations
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Toolbox
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      25,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2,500
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      100,000+
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      12 different models
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Oxygen Tank
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      25,000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2,500
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      100,000+
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      8 different models
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatasetInfo;