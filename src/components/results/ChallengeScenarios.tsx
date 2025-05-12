import React from 'react';
import { TestScenario } from '../../types';
import { AlertTriangle, Sun, EyeOff, RotateCcw, MoveHorizontal } from 'lucide-react';

const scenarios: TestScenario[] = [
  {
    id: '1',
    name: 'Extreme Low Light',
    description: 'Objects detected in minimal illumination conditions typical during power conservation modes.',
    challengeType: 'Lighting',
    imageUrl: 'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    accuracy: 93.2
  },
  {
    id: '2',
    name: 'Strong Backlighting',
    description: 'Objects detected against bright light sources such as exterior windows or powerful work lights.',
    challengeType: 'Lighting',
    imageUrl: 'https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    accuracy: 92.5
  },
  {
    id: '3',
    name: 'Partial Occlusion',
    description: 'Objects detected when partially hidden behind other equipment or structures (30-70% visible).',
    challengeType: 'Occlusion',
    imageUrl: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    accuracy: 91.8
  },
  {
    id: '4',
    name: 'Severe Occlusion',
    description: 'Objects detected when heavily occluded by other objects (only 10-30% visible).',
    challengeType: 'Occlusion',
    imageUrl: 'https://images.pexels.com/photos/2034373/pexels-photo-2034373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    accuracy: 84.2
  },
  {
    id: '5',
    name: 'Unusual Angle',
    description: 'Objects detected from non-standard viewing angles such as from below or extreme side views.',
    challengeType: 'Angle',
    imageUrl: 'https://images.pexels.com/photos/355906/pexels-photo-355906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    accuracy: 89.3
  },
  {
    id: '6',
    name: 'Long Distance',
    description: 'Objects detected at the maximum operational distance of 15 meters.',
    challengeType: 'Distance',
    imageUrl: 'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    accuracy: 86.7
  }
];

const ChallengeScenarios: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Lighting':
        return <Sun className="h-5 w-5 mr-2 text-yellow-500" />;
      case 'Occlusion':
        return <EyeOff className="h-5 w-5 mr-2 text-purple-500" />;
      case 'Angle':
        return <RotateCcw className="h-5 w-5 mr-2 text-blue-500" />;
      case 'Distance':
        return <MoveHorizontal className="h-5 w-5 mr-2 text-green-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />;
    }
  };

  const getAccuracyColorClass = (accuracy: number) => {
    if (accuracy >= 95) return 'bg-green-100 text-green-800';
    if (accuracy >= 90) return 'bg-blue-100 text-blue-800';
    if (accuracy >= 85) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Performance Testing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Challenging Scenario Results
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our model is tested under extreme conditions to ensure reliable performance in real space environments.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario) => (
            <div 
              key={scenario.id} 
              className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={scenario.imageUrl} 
                  alt={scenario.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center mb-2">
                  {getIcon(scenario.challengeType)}
                  <h3 className="text-lg font-medium text-gray-900">{scenario.name}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {scenario.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {scenario.challengeType}
                  </span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getAccuracyColorClass(scenario.accuracy)}`}>
                    Accuracy: {scenario.accuracy}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengeScenarios;