import React from 'react';
import { Layers, Cpu, Database, BarChart } from 'lucide-react';

const ModelArchitecture: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Technical Details</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            YOLOv8 Model Architecture
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our implementation leverages the latest advancements in object detection technology.
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Layers className="h-5 w-5 mr-2 text-blue-500" />
                Network Architecture
              </h3>
              <div className="mt-4">
                <div className="w-full bg-white rounded-lg overflow-hidden shadow">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                        <p className="font-medium text-blue-800">Input Layer</p>
                        <p className="text-sm text-blue-600">640×640×3 RGB Image</p>
                      </div>
                      
                      <div className="flex justify-center">
                        <svg height="24" width="24" viewBox="0 0 24 24" className="text-gray-400">
                          <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </div>
                      
                      <div className="bg-indigo-50 p-3 rounded-md border border-indigo-100">
                        <p className="font-medium text-indigo-800">Backbone: CSPDarknet53</p>
                        <p className="text-sm text-indigo-600">Feature Extraction</p>
                      </div>
                      
                      <div className="flex justify-center">
                        <svg height="24" width="24" viewBox="0 0 24 24" className="text-gray-400">
                          <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-md border border-purple-100">
                        <p className="font-medium text-purple-800">Neck: PANet</p>
                        <p className="text-sm text-purple-600">Feature Fusion across Scales</p>
                      </div>
                      
                      <div className="flex justify-center">
                        <svg height="24" width="24" viewBox="0 0 24 24" className="text-gray-400">
                          <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </div>
                      
                      <div className="bg-red-50 p-3 rounded-md border border-red-100">
                        <p className="font-medium text-red-800">Detection Heads</p>
                        <p className="text-sm text-red-600">Multiple Scales (Small, Medium, Large Objects)</p>
                      </div>
                      
                      <div className="flex justify-center">
                        <svg height="24" width="24" viewBox="0 0 24 24" className="text-gray-400">
                          <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-md border border-green-100">
                        <p className="font-medium text-green-800">Output Layer</p>
                        <p className="text-sm text-green-600">Object Detection & Classification</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md h-fit">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Cpu className="h-5 w-5 mr-2 text-blue-500" />
                Model Specifications
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Architecture</span>
                  <span className="font-medium">YOLOv8-L</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Parameters</span>
                  <span className="font-medium">43.7M</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">FLOPs</span>
                  <span className="font-medium">165.2G</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Input Size</span>
                  <span className="font-medium">640×640</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Inference Speed</span>
                  <span className="font-medium">15ms/frame</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md h-fit">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <Database className="h-5 w-5 mr-2 text-blue-500" />
                Training Data
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Synthetic Images</span>
                  <span className="font-medium">50,000</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Validation Images</span>
                  <span className="font-medium">5,000</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Object Classes</span>
                  <span className="font-medium">2+</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Annotations</span>
                  <span className="font-medium">~200,000</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-md h-fit">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-blue-500" />
                Performance
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">mAP@0.5</span>
                  <span className="font-medium">98.2%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">mAP@0.5:0.95</span>
                  <span className="font-medium">87.5%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Precision</span>
                  <span className="font-medium">96.8%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Recall</span>
                  <span className="font-medium">95.3%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelArchitecture;