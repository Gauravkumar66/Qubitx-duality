import React from 'react';
import Layout from '../components/layout/Layout';
import DeploymentPlan from '../components/deployment/DeploymentPlan';
import BenefitsSection from '../components/deployment/BenefitsSection';

const DeploymentPage: React.FC = () => {
  return (
    <Layout currentPath="/deployment">
      <div className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold">Deployment Strategy</h1>
          <p className="mt-4 text-xl text-gray-300">
            Implementation plan and practical benefits for space station operations
          </p>
        </div>
      </div>
      <DeploymentPlan />
      <BenefitsSection />
    </Layout>
  );
};

export default DeploymentPage;