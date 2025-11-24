export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  badge?: string;
  icon?: React.ReactNode;
  color?: string;
  buttonText?: string;
  onClick?: () => void;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum AppRoute {
  HOME = '/',
  COUNSELING = '/counseling',
  SELFCARE = '/selfcare',
  TEST = '/tests',
  WORKBOOK = '/workbooks',
  COMMUNITY = '/community'
}

export interface Workbook {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  imageColor: string;
  category: string;
  tag?: string;
}

export interface PsychTest {
  id: string;
  title: string;
  description: string;
  questions: number;
  time: string;
  participants: number;
  color: string;
  iconType: 'heart' | 'brain' | 'shield' | 'zap' | 'activity';
}

export interface Counselor {
  id: string;
  name: string;
  title: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  image: string;
  isAvailable: boolean;
}