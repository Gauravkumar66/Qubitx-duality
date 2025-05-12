import React from 'react';
import Layout from '../components/layout/Layout';
import ResultsOverview from '../components/results/ResultsOverview';
import ChallengeScenarios from '../components/results/ChallengeScenarios';

const ResultsPage: React.FC = () => {
  return (
    <Layout currentPath="/results">
      <div className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold">Performance Results</h1>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive evaluation metrics and test scenario performance
          </p>
        </div>
      </div>
      <ResultsOverview />
      <ChallengeScenarios />
    </Layout>
  );
};

export default ResultsPage;