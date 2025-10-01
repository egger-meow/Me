import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Award, Calendar, User, Globe } from 'lucide-react';

const IELTSViewer = ({ isOpen, onClose, imageUrl, isDark, language }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // IELTS score data (based on the image you showed me)
  const ieltsData = {
    overall: 6.5,
    listening: 6.0,
    reading: 7.0,
    writing: 5.5,
    speaking: 6.5,
    cefrLevel: 'B2',
    testDate: '28/DEC/2024',
    candidateName: language === 'zh' ? '侯均頲' : 'CHUN-TING HOU',
    candidateNumber: '500633'
  };

  const getScoreColor = (score) => {
    if (score >= 7.0) return isDark ? 'text-emerald-400' : 'text-green-600';
    if (score >= 6.0) return isDark ? 'text-blue-400' : 'text-blue-600';
    if (score >= 5.0) return isDark ? 'text-yellow-400' : 'text-yellow-600';
    return isDark ? 'text-red-400' : 'text-red-600';
  };

  const getScoreBg = (score) => {
    if (score >= 7.0) return isDark ? 'bg-emerald-500/20 border-emerald-500/30' : 'bg-green-100 border-green-300';
    if (score >= 6.0) return isDark ? 'bg-blue-500/20 border-blue-500/30' : 'bg-blue-100 border-blue-300';
    if (score >= 5.0) return isDark ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-yellow-100 border-yellow-300';
    return isDark ? 'bg-red-500/20 border-red-500/30' : 'bg-red-100 border-red-300';
  };

  return createPortal(
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900/95 via-purple-900/80 to-emerald-900/80 backdrop-blur-md' 
          : 'bg-black/75 backdrop-blur-sm'
      }`}
      onClick={onClose}
    >
      <div 
        className={`relative max-w-6xl max-h-[90vh] w-full rounded-2xl overflow-hidden transition-all duration-500 transform ${
          isDark
            ? 'bg-gradient-to-br from-slate-800/95 via-purple-900/40 to-emerald-900/30 border border-purple-800/30 shadow-2xl shadow-emerald-500/20'
            : 'bg-white border border-gray-200 shadow-2xl'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 border-b transition-colors duration-300 ${
          isDark ? 'border-purple-800/30' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full transition-colors duration-300 ${
                isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-100 text-blue-600'
              }`}>
                <Award size={24} />
              </div>
              <div>
                <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {language === 'zh' ? 'IELTS 成績單' : 'IELTS Test Report'}
                </h2>
                <p className={`transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  International English Language Testing System
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 transform ${
                isDark 
                  ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-100px)] overflow-hidden">
          {/* Left Panel - Score Analysis */}
          <div className={`flex-1 p-6 overflow-y-auto transition-colors duration-300 ${
            isDark ? 'bg-slate-800/50' : 'bg-gray-50/50'
          }`}>
            {/* Candidate Info */}
            <div className={`mb-6 p-4 rounded-xl transition-all duration-300 ${
              isDark 
                ? 'bg-gradient-to-r from-purple-900/30 via-emerald-900/20 to-purple-900/30 border border-purple-800/30' 
                : 'bg-white border border-gray-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <User size={20} className={isDark ? 'text-emerald-400' : 'text-blue-600'} />
                <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {language === 'zh' ? '考生資訊' : 'Candidate Information'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {language === 'zh' ? '姓名' : 'Name'}
                  </p>
                  <p className={`font-medium transition-colors duration-300 ${
                    isDark ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    {ieltsData.candidateName}
                  </p>
                </div>
                <div>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {language === 'zh' ? '考生號碼' : 'Candidate Number'}
                  </p>
                  <p className={`font-medium transition-colors duration-300 ${
                    isDark ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    {ieltsData.candidateNumber}
                  </p>
                </div>
                <div>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {language === 'zh' ? '考試日期' : 'Test Date'}
                  </p>
                  <p className={`font-medium transition-colors duration-300 ${
                    isDark ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    {ieltsData.testDate}
                  </p>
                </div>
                <div>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    CEFR Level
                  </p>
                  <p className={`font-medium transition-colors duration-300 ${
                    isDark ? 'text-emerald-400' : 'text-blue-600'
                  }`}>
                    {ieltsData.cefrLevel}
                  </p>
                </div>
              </div>
            </div>

            {/* Overall Score */}
            <div className={`mb-6 p-6 rounded-xl text-center transition-all duration-300 ${
              isDark 
                ? 'bg-gradient-to-br from-emerald-500/20 via-purple-500/10 to-emerald-500/20 border border-emerald-500/30' 
                : 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {language === 'zh' ? '總分' : 'Overall Band Score'}
              </h3>
              <div className={`text-6xl font-bold mb-2 transition-colors duration-300 ${
                getScoreColor(ieltsData.overall)
              }`}>
                {ieltsData.overall}
              </div>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {language === 'zh' ? '滿分 9.0' : 'Out of 9.0'}
              </p>
            </div>

            {/* Individual Scores */}
            <div>
              <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {language === 'zh' ? '各項技能成績' : 'Individual Skills Scores'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: 'listening', label: language === 'zh' ? '聽力' : 'Listening', score: ieltsData.listening },
                  { key: 'reading', label: language === 'zh' ? '閱讀' : 'Reading', score: ieltsData.reading },
                  { key: 'writing', label: language === 'zh' ? '寫作' : 'Writing', score: ieltsData.writing },
                  { key: 'speaking', label: language === 'zh' ? '口說' : 'Speaking', score: ieltsData.speaking }
                ].map((skill) => (
                  <div 
                    key={skill.key}
                    className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 transform ${
                      getScoreBg(skill.score)
                    }`}
                  >
                    <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {skill.label}
                    </p>
                    <p className={`text-2xl font-bold transition-colors duration-300 ${
                      getScoreColor(skill.score)
                    }`}>
                      {skill.score}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Certificate Image */}
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="relative max-w-full max-h-full">
              <img
                src={imageUrl}
                alt="IELTS Certificate"
                className={`max-w-full max-h-full object-contain rounded-lg transition-all duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                } hover:scale-105 transform shadow-lg`}
                onLoad={() => setIsLoading(false)}
              />
              {isLoading && (
                <div className={`absolute inset-0 flex items-center justify-center rounded-lg transition-colors duration-300 ${
                  isDark ? 'bg-slate-800' : 'bg-gray-100'
                }`}>
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default IELTSViewer;
