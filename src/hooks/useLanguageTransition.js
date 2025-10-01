import { useState, useEffect } from 'react';

export const useLanguageTransition = (initialLanguage = 'zh') => {
  const [language, setLanguage] = useState(initialLanguage);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextLanguage, setNextLanguage] = useState(null);

  const toggleLanguage = () => {
    const newLanguage = language === 'zh' ? 'en' : 'zh';
    setNextLanguage(newLanguage);
    setIsTransitioning(true);

    // Start transition
    setTimeout(() => {
      setLanguage(newLanguage);
      setTimeout(() => {
        setIsTransitioning(false);
        setNextLanguage(null);
      }, 300); // Half of the transition duration
    }, 300);
  };

  return {
    language,
    toggleLanguage,
    isTransitioning,
    nextLanguage
  };
};

export const useTypingEffect = (text, options = {}) => {
  const { speed = 100, delay = 0, startOnMount = true } = options;
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = () => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(true);
    setIsComplete(false);
  };

  const resetTyping = () => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(false);
    setIsComplete(false);
  };

  useEffect(() => {
    if (startOnMount) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, startOnMount]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (currentIndex >= text.length && isTyping) {
        setIsComplete(true);
        setIsTyping(false);
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, isTyping]);

  return {
    displayedText,
    isTyping,
    isComplete,
    startTyping,
    resetTyping
  };
};
