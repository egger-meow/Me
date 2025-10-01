import React, { useState, useEffect } from 'react';
import { Eye, Users, Clock, TrendingUp } from 'lucide-react';

const VisitorCounter = ({ isDark, language }) => {
  const [stats, setStats] = useState({
    totalVisitors: 0,
    todayVisitors: 0,
    currentOnline: 0,
    lastVisit: null
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load stats from localStorage or initialize
    const loadStats = () => {
      const saved = localStorage.getItem('cvVisitorStats');
      if (saved) {
        const parsedStats = JSON.parse(saved);
        setStats(parsedStats);
      }
    };

    // Update visitor count
    const updateVisitorCount = () => {
      const today = new Date().toDateString();
      const currentTime = new Date().toISOString();
      
      const saved = localStorage.getItem('cvVisitorStats');
      const existingStats = saved ? JSON.parse(saved) : {
        totalVisitors: 0,
        todayVisitors: 0,
        currentOnline: 1,
        lastVisit: null,
        lastVisitDate: null
      };

      // Check if this is a new day
      const isNewDay = existingStats.lastVisitDate !== today;
      
      // Check if this is a new visitor (simple check based on session)
      const isNewVisitor = !sessionStorage.getItem('cvVisited');
      
      if (isNewVisitor) {
        sessionStorage.setItem('cvVisited', 'true');
        existingStats.totalVisitors += 1;
        
        if (isNewDay) {
          existingStats.todayVisitors = 1;
          existingStats.lastVisitDate = today;
        } else {
          existingStats.todayVisitors += 1;
        }
      } else if (isNewDay) {
        existingStats.lastVisitDate = today;
        // Reset today's count if it's a new day and this visitor already visited today
        if (existingStats.todayVisitors === 0) {
          existingStats.todayVisitors = 1;
        }
      }
      
      existingStats.lastVisit = currentTime;
      existingStats.currentOnline = Math.max(1, Math.floor(Math.random() * 5) + 1); // Simulate online users
      
      localStorage.setItem('cvVisitorStats', JSON.stringify(existingStats));
      setStats(existingStats);
    };

    loadStats();
    updateVisitorCount();

    // Show counter after a delay
    const timer = setTimeout(() => setIsVisible(true), 2000);

    // Update online count periodically
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        currentOnline: Math.max(1, Math.floor(Math.random() * 5) + 1)
      }));
    }, 30000); // Update every 30 seconds

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const formatLastVisit = (lastVisit) => {
    if (!lastVisit) return language === 'zh' ? '剛剛' : 'Just now';
    
    const diff = new Date() - new Date(lastVisit);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (minutes < 1) return language === 'zh' ? '剛剛' : 'Just now';
    if (minutes < 60) return language === 'zh' ? `${minutes} 分鐘前` : `${minutes}m ago`;
    if (hours < 24) return language === 'zh' ? `${hours} 小時前` : `${hours}h ago`;
    return language === 'zh' ? `${days} 天前` : `${days}d ago`;
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-1000 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className={`relative overflow-hidden rounded-2xl p-4 transition-all duration-500 hover:scale-105 transform group ${
        isDark
          ? 'bg-gradient-to-br from-slate-800/95 via-purple-900/40 to-emerald-900/30 backdrop-blur-md border border-purple-800/30 shadow-xl shadow-emerald-500/20'
          : 'bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl shadow-gray-200/50'
      }`}>
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-full transition-colors duration-300 ${
            isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-100 text-blue-600'
          }`}>
            <TrendingUp size={16} />
          </div>
          <h3 className={`text-sm font-semibold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {language === 'zh' ? '訪客統計' : 'Visitor Stats'}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Total Visitors */}
          <div className={`p-3 rounded-lg transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-br from-emerald-500/10 to-purple-500/10 border border-emerald-500/20' 
              : 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200'
          }`}>
            <div className="flex items-center gap-2 mb-1">
              <Users size={14} className={isDark ? 'text-emerald-400' : 'text-blue-600'} />
              <span className={`text-xs transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'zh' ? '總訪客' : 'Total'}
              </span>
            </div>
            <p className={`text-lg font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {stats.totalVisitors.toLocaleString()}
            </p>
          </div>

          {/* Today's Visitors */}
          <div className={`p-3 rounded-lg transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-br from-purple-500/10 to-emerald-500/10 border border-purple-500/20' 
              : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200'
          }`}>
            <div className="flex items-center gap-2 mb-1">
              <Eye size={14} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
              <span className={`text-xs transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'zh' ? '今日' : 'Today'}
              </span>
            </div>
            <p className={`text-lg font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {stats.todayVisitors}
            </p>
          </div>

          {/* Online Now */}
          <div className={`p-3 rounded-lg transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20' 
              : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200'
          }`}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className={`text-xs transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'zh' ? '在線' : 'Online'}
              </span>
            </div>
            <p className={`text-lg font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {stats.currentOnline}
            </p>
          </div>

          {/* Last Visit */}
          <div className={`p-3 rounded-lg transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20' 
              : 'bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200'
          }`}>
            <div className="flex items-center gap-2 mb-1">
              <Clock size={14} className={isDark ? 'text-yellow-400' : 'text-yellow-600'} />
              <span className={`text-xs transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'zh' ? '最近' : 'Last'}
              </span>
            </div>
            <p className={`text-sm font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {formatLastVisit(stats.lastVisit)}
            </p>
          </div>
        </div>

        {/* Hover effect */}
        {isDark && (
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default VisitorCounter;
