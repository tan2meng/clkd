import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Circle, BookOpen, Lock } from 'lucide-react';
import { Stage } from '../types';

interface StageCardProps {
  stage: Stage;
  index: number;
  onToggleTask: (taskId: string) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const StageCard: React.FC<StageCardProps> = ({ stage, index, onToggleTask, isExpanded, onToggleExpand }) => {
  const [showGuide, setShowGuide] = useState(false);
  const completedCount = stage.tasks.filter(t => t.completed).length;
  
  // Vibrant gradients for the icon backgrounds
  const gradients = [
    'from-orange-400 to-pink-500',
    'from-purple-500 to-indigo-600',
    'from-cyan-400 to-blue-500',
    'from-emerald-400 to-teal-500',
    'from-rose-400 to-red-500',
    'from-amber-400 to-orange-500',
    'from-blue-400 to-indigo-500',
  ];
  const bgGradient = gradients[index % gradients.length];

  return (
    <div 
        className={`glass-card rounded-[32px] overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'shadow-glow ring-2 ring-white/50' : 'hover:scale-[1.02] shadow-sm'}`}
    >
      
      {/* Header */}
      <div 
        className="p-6 cursor-pointer relative"
        onClick={onToggleExpand}
      >
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-5">
                {/* Icon Container with Gradient & Shadow */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${bgGradient} flex items-center justify-center text-white shadow-lg`}>
                    <stage.icon size={26} strokeWidth={2.5} />
                </div>
                
                <div>
                    <h3 className="font-bold text-xl text-secondary">{stage.title}</h3>
                    <p className="text-sm font-medium text-secondary/50 mt-1">
                        {stage.description}
                    </p>
                </div>
            </div>
            
            <div className="flex items-center">
                 {!isExpanded && (
                    <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-primary font-bold text-xs border border-white">
                        {completedCount}/{stage.tasks.length}
                    </div>
                 )}
                 {isExpanded && (
                     <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ChevronUp size={22} />
                     </div>
                 )}
            </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 pt-2">
          {/* Guide Button */}
          <div className="mb-6">
             <button 
                onClick={(e) => { e.stopPropagation(); setShowGuide(!showGuide); }}
                className={`w-full py-3 rounded-2xl text-sm font-bold flex items-center justify-center transition-all ${showGuide ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-white/50 text-primary border border-white hover:bg-white'}`}
             >
                <BookOpen size={16} className="mr-2" />
                {showGuide ? '收起避坑指南' : '查看专家避坑指南'}
             </button>
          </div>

          {/* Guide Content */}
          {showGuide && (
            <div className="p-6 mb-6 bg-white/40 rounded-[24px] border border-white/60 backdrop-blur-sm animate-fade-in">
               <div className="flex items-center mb-3 text-primary font-bold text-sm uppercase tracking-wider">
                  <span className="text-lg mr-2">💡</span> 实战经验
               </div>
               <div 
                 className="text-sm text-secondary/80 leading-relaxed space-y-2"
                 dangerouslySetInnerHTML={{ __html: stage.guideContent }}
               />
            </div>
          )}

          {/* Task List */}
          <div className="space-y-3">
            {stage.tasks.map(task => (
              <div 
                key={task.id}
                onClick={() => onToggleTask(task.id)}
                className={`group flex items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${task.completed ? 'bg-primary/5 border-primary/10' : 'bg-white/60 border-white hover:bg-white hover:shadow-sm'}`}
              >
                <div className={`mr-4 transition-all duration-300 ${task.completed ? 'text-primary scale-110' : 'text-gray-300 group-hover:text-primary/50'}`}>
                  {task.completed ? <CheckCircle size={24} className="fill-current" /> : <Circle size={24} strokeWidth={2} />}
                </div>
                <span className={`text-sm font-semibold transition-colors ${task.completed ? 'text-secondary/40 line-through decoration-2' : 'text-secondary'}`}>
                  {task.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StageCard;