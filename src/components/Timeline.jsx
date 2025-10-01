import React, { useState } from 'react';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const TimelineItem = ({ item, isLast, isDark, language, type, onImageClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-start group">
      {/* Timeline line */}
      {!isLast && (
        <div className={`absolute left-6 top-16 w-0.5 h-full transition-all duration-500 ${
          isDark 
            ? isHovered 
              ? 'bg-gradient-to-b from-emerald-400 via-purple-400 to-blue-400' 
              : 'bg-gradient-to-b from-emerald-400/40 via-purple-400/40 to-blue-400/40'
            : isHovered
              ? 'bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500'
              : 'bg-gradient-to-b from-blue-300 via-indigo-300 to-purple-300'
        }`} />
      )}

      {/* Timeline dot */}
      <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-4 transition-all duration-500 transform ${
        isHovered ? 'scale-110' : 'scale-100'
      } ${
        isDark
          ? isHovered
            ? 'bg-gradient-to-br from-emerald-400 to-purple-500 border-white shadow-lg shadow-emerald-400/50'
            : 'bg-gradient-to-br from-emerald-400/80 to-purple-500/80 border-emerald-300/50'
          : isHovered
            ? 'bg-gradient-to-br from-blue-500 to-indigo-600 border-white shadow-lg shadow-blue-400/50'
            : 'bg-gradient-to-br from-blue-400 to-indigo-500 border-blue-200'
      }`}>
        <div className="w-full h-full flex items-center justify-center">
          {type === 'education' ? (
            <Award size={20} className="text-white" />
          ) : (
            <Calendar size={20} className="text-white" />
          )}
        </div>
      </div>

      {/* Content */}
      <div 
        className={`ml-6 flex-1 transition-all duration-500 transform ${
          isHovered ? 'translate-x-2' : 'translate-x-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative overflow-hidden rounded-xl p-6 transition-all duration-500 ${
          isDark
            ? isHovered
              ? 'bg-gradient-to-br from-slate-800/90 via-purple-900/50 to-emerald-900/40 border-emerald-500/30 shadow-xl shadow-emerald-500/20'
              : 'bg-gradient-to-br from-slate-800/70 via-purple-900/30 to-emerald-900/20 border-purple-800/20'
            : isHovered
              ? 'bg-gradient-to-br from-white to-blue-50/50 border-blue-300 shadow-xl shadow-blue-200/30'
              : 'bg-gradient-to-br from-white/90 to-gray-50/30 border-gray-200'
        } border backdrop-blur-sm`}>
          
          {/* Period badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 transition-all duration-300 ${
            isDark
              ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/30'
              : 'bg-blue-100 text-blue-800 border border-blue-200'
          }`}>
            <Calendar size={14} />
            {item.period}
          </div>

          {/* Title and subtitle */}
          <div className="mb-3">
            <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {type === 'education' ? item.school : item.company}
            </h3>
            <p className={`text-lg transition-colors duration-300 ${
              isDark ? 'text-emerald-200' : 'text-blue-700'
            }`}>
              {type === 'education' ? item.degree : item.position}
            </p>
          </div>

          {/* Details/Achievements */}
          {type === 'education' && item.details && (
            <ul className={`space-y-2 mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {item.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-300 ${
                    isDark ? 'bg-emerald-400' : 'bg-blue-500'
                  }`} />
                  {detail}
                </li>
              ))}
            </ul>
          )}

          {type === 'experience' && item.achievements && (
            <ul className={`space-y-2 mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {item.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-300 ${
                    isDark ? 'bg-emerald-400' : 'bg-blue-500'
                  }`} />
                  {achievement}
                </li>
              ))}
            </ul>
          )}

          {/* Links */}
          {item.transcript && (
            <div className="mt-4">
              <a 
                href={item.transcript} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 transform ${
                  isDark
                    ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/30'
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-700 border border-blue-200'
                }`}
              >
                <ExternalLink size={16} />
                {language === 'zh' ? '歷年成績單' : 'Transcript'}
              </a>
            </div>
          )}

          {/* Image */}
          {item.image && (
            <div className="mt-4">
              <img
                src={item.image}
                alt={type === 'education' ? item.school : item.company}
                className="max-w-sm h-auto rounded-lg cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-105"
                onClick={() => onImageClick({ url: item.image, alt: type === 'education' ? item.school : item.company })}
              />
            </div>
          )}

          {/* Hover effect overlay */}
          {isDark && (
            <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-purple-500/0 rounded-xl transition-opacity duration-500 pointer-events-none ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`} />
          )}
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ items, isDark, language, type, onImageClick }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          isLast={index === items.length - 1}
          isDark={isDark}
          language={language}
          type={type}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
};

export default Timeline;
