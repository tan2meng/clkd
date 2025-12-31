import React, { useState, useEffect } from 'react';
import { KNOWLEDGE_BASE, STAGES } from '../data';
import { Search, ChevronRight, Book, ArrowLeft, Star, X, ArrowUp } from 'lucide-react';
import { Article } from '../types';

const Wiki: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const pinnedArticles = KNOWLEDGE_BASE.filter(a => a.isPinned);
  
  // Group articles by category based on STAGES order
  const getCategoryGroups = () => {
    if (searchTerm) {
        // If searching, just return empty groups as we use searchResults
        return [];
    }
    
    return STAGES.map(stage => ({
        stageTitle: stage.title,
        articles: KNOWLEDGE_BASE.filter(a => a.category === stage.title && !a.isPinned)
    })).filter(group => group.articles.length > 0);
  };

  const categoryGroups = getCategoryGroups();
  
  const searchResults = searchTerm 
    ? KNOWLEDGE_BASE.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const selectedArticle = KNOWLEDGE_BASE.find(a => a.id === selectedArticleId);

  // Lock body scroll when article is open
  useEffect(() => {
    if (selectedArticleId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedArticleId]);

  // Handle scroll for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pb-24 space-y-6 relative">
      
      {/* Back to Top Button */}
      {!selectedArticleId && showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 right-6 z-40 w-12 h-12 bg-white/80 backdrop-blur-md text-primary rounded-full shadow-glow border border-white/50 flex items-center justify-center hover:scale-110 transition-all duration-300 animate-fade-in"
          aria-label="回到顶部"
        >
          <ArrowUp size={24} strokeWidth={3} />
        </button>
      )}

      {/* Article Detail Overlay */}
      {selectedArticleId && selectedArticle && (
        <div className="fixed inset-0 z-50 bg-[#F3E8FF] overflow-y-auto animate-slide-up">
           <div className="min-h-screen pb-32">
             <div className="sticky top-0 bg-[#F3E8FF]/90 backdrop-blur-md border-b border-primary/10 p-4 flex items-center justify-between z-10 shadow-sm">
                <button 
                  onClick={() => setSelectedArticleId(null)}
                  className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-secondary hover:text-primary transition-all active:scale-95"
                >
                  <ArrowLeft size={22} strokeWidth={2.5} />
                </button>
                <span className="font-bold text-secondary text-base truncate px-4 opacity-80">详情</span>
                <div className="w-10"></div> {/* Spacer for balance */}
             </div>

             <div className="p-6 max-w-3xl mx-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg uppercase tracking-wider">
                      {selectedArticle.category}
                  </span>
                  {selectedArticle.isPinned && (
                      <span className="inline-block px-3 py-1 bg-accentPink/10 text-accentPink text-xs font-bold rounded-lg uppercase tracking-wider flex items-center">
                          <Star size={12} className="mr-1 fill-current" /> 精选
                      </span>
                  )}
                </div>
                
                <h1 className="text-2xl font-black text-secondary mb-8 leading-snug">{selectedArticle.title}</h1>
                
                <div 
                  className="prose prose-purple max-w-none text-secondary/80 leading-relaxed font-medium"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />

                <div className="mt-12 pt-8 border-t border-secondary/10 text-center">
                    <button 
                        onClick={() => setSelectedArticleId(null)}
                        className="px-8 py-3 bg-white text-secondary font-bold rounded-full shadow-glow-sm hover:scale-105 transition-transform"
                    >
                        返回列表
                    </button>
                </div>
             </div>
           </div>
        </div>
      )}

      {/* --- Main List View --- */}

      {/* Search Bar */}
      <div className="sticky top-4 z-20">
        <div className="relative shadow-glow-sm rounded-[24px]">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="text-primary/50" size={20} />
            </div>
            <input 
            type="text" 
            placeholder="搜索知识库..." 
            className="w-full pl-12 pr-6 py-4 glass-panel rounded-[24px] text-secondary font-bold focus:ring-4 focus:ring-primary/10 focus:border-white transition-all placeholder-secondary/30 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="space-y-4 animate-fade-in">
            <h3 className="font-bold text-secondary/50 ml-2 mb-2">搜索结果 ({searchResults.length})</h3>
            {searchResults.map(article => (
                <ArticleCard key={article.id} article={article} onClick={() => setSelectedArticleId(article.id)} />
            ))}
            {searchResults.length === 0 && (
                <div className="text-center py-20 opacity-50">
                    <p className="text-secondary font-bold">未找到相关内容</p>
                </div>
            )}
        </div>
      )}

      {/* Default View */}
      {!searchTerm && (
        <>
            {/* Pinned Section */}
            {pinnedArticles.length > 0 && (
                <div className="space-y-4">
                    <div className="flex items-center ml-2">
                        <Star size={18} className="text-accentPink fill-accentPink mr-2" />
                        <h3 className="font-bold text-secondary text-lg">精选必读</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {pinnedArticles.map(article => (
                            <div 
                                key={article.id}
                                onClick={() => setSelectedArticleId(article.id)}
                                className="glass-card p-6 rounded-[24px] relative overflow-hidden group cursor-pointer border-l-4 border-l-accentPink transition-all hover:scale-[1.02]"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Book size={64} className="text-primary" />
                                </div>
                                <span className="inline-block px-2 py-1 bg-white/50 text-secondary/50 text-[10px] font-bold rounded mb-2">
                                    {article.category}
                                </span>
                                <h3 className="text-xl font-black text-secondary mb-2 pr-8">{article.title}</h3>
                                <p className="text-sm text-secondary/60 line-clamp-2">{article.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Categories Section */}
            <div className="space-y-8 mt-8">
                {categoryGroups.map((group, index) => (
                    <div key={group.stageTitle} className="space-y-3">
                        <div className="sticky top-[80px] z-10 bg-gradient-to-b from-[#E0E7FF]/95 via-[#E0E7FF]/95 to-transparent pb-2 pt-2 -mx-2 px-4 backdrop-blur-sm rounded-xl">
                             <h3 className="font-bold text-secondary text-base flex items-center opacity-80">
                                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs mr-2 font-black">{index + 1}</span>
                                {group.stageTitle}
                            </h3>
                        </div>
                       
                        <div className="space-y-3">
                            {group.articles.map(article => (
                                <ArticleCard key={article.id} article={article} onClick={() => setSelectedArticleId(article.id)} simple />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
      )}
    </div>
  );
};

const ArticleCard = ({ article, onClick, simple }: { article: Article, onClick: () => void, simple?: boolean }) => (
    <div 
    onClick={onClick}
    className={`glass-card p-5 rounded-[20px] hover:shadow-glow-sm transition-all cursor-pointer flex justify-between items-center group relative overflow-hidden ${simple ? 'bg-white/40 border-white/40 shadow-none' : 'shadow-sm'}`}
    >
      <div className="flex items-center flex-1 min-w-0 mr-4">
        {!simple && (
            <div className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Book size={18} />
            </div>
        )}
        <div className="truncate w-full">
            <h4 className={`font-bold text-secondary truncate ${simple ? 'text-sm' : 'text-base'}`}>{article.title}</h4>
            {!simple && <p className="text-xs text-secondary/50 truncate mt-0.5">{article.summary}</p>}
        </div>
      </div>
      <div className="text-secondary/20 group-hover:text-primary transition-colors flex-shrink-0">
        <ChevronRight size={20} />
      </div>
    </div>
);

export default Wiki;