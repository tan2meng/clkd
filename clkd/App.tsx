import React, { useState, useEffect } from 'react';
import { STAGES } from './data';
import { Stage } from './types';
import Navigation from './components/Navigation';
import StageCard from './components/StageCard';
import ProgressBar from './components/ProgressBar';
import Calculator from './components/Calculator';
import Wiki from './components/Wiki';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'calculator' | 'wiki'>('roadmap');
  const [stages, setStages] = useState<Stage[]>(STAGES);
  const [expandedStageId, setExpandedStageId] = useState<string | null>('1');

  // Load state from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('restaurant-productism-stages');
    if (saved) {
      try {
        setStages(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load progress', e);
      }
    }
  }, []);

  // Save state
  useEffect(() => {
    localStorage.setItem('restaurant-productism-stages', JSON.stringify(stages));
  }, [stages]);

  const handleToggleTask = (taskId: string) => {
    setStages(prevStages => 
      prevStages.map(stage => ({
        ...stage,
        tasks: stage.tasks.map(task => 
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      }))
    );
  };

  const calculateTotalProgress = () => {
    let totalTasks = 0;
    let completedTasks = 0;
    stages.forEach(stage => {
      stage.tasks.forEach(task => {
        totalTasks++;
        if (task.completed) completedTasks++;
      });
    });
    return { completed: completedTasks, total: totalTasks };
  };

  const progress = calculateTotalProgress();

  return (
    <div className="min-h-screen relative overflow-x-hidden pb-28">
      
      {/* 3D Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="fixed top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-[-20%] left-[20%] w-[80vw] h-[80vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Header Section */}
      <header className="px-6 pt-12 pb-6 relative z-10 text-center">
        
        {activeTab === 'roadmap' && (
          <div className="animate-fade-in relative">
            <h1 className="text-4xl font-black text-secondary mb-2 tracking-tight">
              <span className="text-primary">从零</span>开店
            </h1>
            <p className="text-secondary/60 text-base font-medium max-w-[80%] mx-auto leading-relaxed">
              基于《从零开始做餐饮》
            </p>
          </div>
        )}
         {activeTab === 'calculator' && (
          <div className="animate-fade-in relative">
            <h1 className="text-4xl font-black text-secondary mb-2 tracking-tight">
              <span className="text-primary">数据</span>经营
            </h1>
            <p className="text-secondary/60 text-base font-medium max-w-[80%] mx-auto leading-relaxed">
              用数据预测未来，拒绝盲目投入
            </p>
          </div>
        )}
         {activeTab === 'wiki' && (
          <div className="animate-fade-in relative">
            <h1 className="text-4xl font-black text-secondary mb-2 tracking-tight">
              <span className="text-primary">餐饮</span>百科
            </h1>
            <p className="text-secondary/60 text-base font-medium max-w-[80%] mx-auto leading-relaxed">
              避坑指南与行业经验
            </p>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="px-6 relative z-10">
        
        {activeTab === 'roadmap' && (
          <div className="animate-fade-in space-y-8">
            {/* Glass Progress Card */}
            <div className="glass-panel p-6 rounded-[32px] shadow-glow relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-primarySoft to-primary rounded-full opacity-10 blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
              
              <div className="flex justify-between items-end mb-4 relative">
                <div>
                  <h2 className="text-xl font-bold text-secondary">创业进度</h2>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accentPink">
                    {Math.round((progress.completed / progress.total) * 100)}%
                  </span>
                </div>
              </div>
              <ProgressBar current={progress.completed} total={progress.total} />
            </div>

            {/* Stages List */}
            <div className="space-y-6">
              {stages.map((stage, index) => (
                <StageCard 
                  key={stage.id} 
                  stage={stage} 
                  index={index}
                  onToggleTask={handleToggleTask}
                  isExpanded={expandedStageId === stage.id}
                  onToggleExpand={() => setExpandedStageId(expandedStageId === stage.id ? null : stage.id)}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'calculator' && (
           <div className="animate-fade-in">
             <Calculator />
           </div>
        )}

        {activeTab === 'wiki' && (
           <div className="animate-fade-in">
             <Wiki />
           </div>
        )}

      </main>

      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;