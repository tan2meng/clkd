export interface Task {
  id: string;
  title: string;
  completed: boolean;
  description?: string;
}

export interface Stage {
  id: string;
  title: string;
  icon: any; // Lucide icon component
  description: string;
  tasks: Task[];
  guideContent: string; // Markdown or HTML string for the "Pitfall Guide"
}

export interface CalculatorState {
  rent: number;
  labor: number;
  utilities: number;
  marketing: number;
  avgTicket: number;
  foodCostPercent: number; // 0-100
}

export interface Article {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  isPinned?: boolean;
}