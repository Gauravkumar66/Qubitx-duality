import React from 'react';
import Layout from '../components/layout/Layout';
import ModelArchitecture from '../components/model/ModelArchitecture';
import DatasetInfo from '../components/model/DatasetInfo';
import ModelUpload from '../components/model/ModelUpload';

const ModelPage: React.FC = () => {
  return (
    <Layout currentPath="/model">
      <div className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold">YOLOv8 Object Detection Model</h1>
          <p className="mt-4 text-xl text-gray-300">
            Advanced deep learning model architecture optimized for space station environments
          </p>
        </div>
      </div>
      <ModelUpload />
      <ModelArchitecture />
      <DatasetInfo />
    </Layout>
  );
};

export default ModelPage;