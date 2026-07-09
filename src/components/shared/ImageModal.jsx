import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
};

// Canonical gallery modal: multi-image navigation, keyboard support,
// animated backdrop/panel, and directional slide between images.
const ImageModal = ({ isOpen, onClose, imageUrls = [], altText, titles = [] }) => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  // Lock background scroll while open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  // Reset to first image on open
  useEffect(() => {
    if (isOpen) setPage([0, 0]);
  }, [isOpen]);

  // Keyboard: Escape closes, arrows navigate
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, imageUrls.length]);

  const paginate = (dir) => {
    setPage(([idx]) => {
      const next = (idx + dir + imageUrls.length) % imageUrls.length;
      return [next, dir];
    });
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && imageUrls.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-4 z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {imageUrls.length > 1 && (
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium font-mono">
                    {currentIndex + 1} / {imageUrls.length}
                  </div>
                )}
                {titles[currentIndex] && (
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {titles[currentIndex]}
                  </div>
                )}
              </div>
              <button
                onClick={onClose}
                className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={20} className="text-gray-800" />
              </button>
            </div>

            {/* Image container */}
            <div className="relative w-full h-full flex items-center justify-center p-12 min-h-[300px]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  src={imageUrls[currentIndex]}
                  alt={`${altText || ''} ${imageUrls.length > 1 ? `(${currentIndex + 1}/${imageUrls.length})` : ''}`}
                  className="max-w-full max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23999"%3EImage not found%3C/text%3E%3C/svg%3E';
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Navigation */}
            {imageUrls.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 transition-colors shadow-lg cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} className="text-gray-800" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); paginate(1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 transition-colors shadow-lg cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight size={24} className="text-gray-800" />
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ImageModal;
