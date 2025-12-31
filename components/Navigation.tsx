import React from 'react';
import { ListTodo, Calculator, BookOpen } from 'lucide-react';

interface NavigationProps {
  activeTab: 'roadmap' | 'calculator' | 'wiki';
  onTabChange: (tab: 'roadmap' | 'calculator' | 'wiki') => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'roadmap', label: '进度', icon: ListTodo },
    { id: 'calculator', label: '测算', icon: Calculator },
    { id: 'wiki', label: '百科', icon: BookOpen },
  ] as const;

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="glass-panel rounded-[32px] shadow-glow-sm flex items-center p-2 pointer-events-auto space-x-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-16 h-16 rounded-[24px] flex items-center justify-center transition-all duration-300 ${
                isActive 
                  ? 'bg-primary text-white shadow-lg shadow-primary/40 scale-105' 
                  : 'text-secondary/40 hover:text-primary hover:bg-white/50'
              }`}
            >
              <item.icon size={26} strokeWidth={2.5} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;