export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface DetectionObject {
  id: string;
  name: string;
  confidence: number;
  category: 'Toolbox' | 'Oxygen Tank' | 'Other';
  imageUrl: string;
}

export interface ModelMetric {
  name: string;
  value: number;
  description: string;
}

export interface TestScenario {
  id: string;
  name: string;
  description: string;
  challengeType: 'Lighting' | 'Occlusion' | 'Angle' | 'Distance';
  imageUrl: string;
  accuracy: number;
}