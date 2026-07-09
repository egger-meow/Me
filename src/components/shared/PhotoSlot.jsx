import { useState } from 'react';
import { Camera } from 'lucide-react';

// Renders the image if it loads, otherwise an intentional-looking placeholder
// (dashed frame + label) so unfilled photo areas read as "reserved", not broken.
const PhotoSlot = ({
  src,
  alt,
  isDark,
  label,
  className = '',
  imgClassName = '',
  rounded = 'rounded-2xl',
  onClick,
}) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`${rounded} ${className} flex flex-col items-center justify-center gap-2 border-2 border-dashed select-none ${
          isDark
            ? 'border-slate-600/70 bg-slate-800/40 text-slate-400'
            : 'border-gray-300 bg-gray-50 text-gray-400'
        }`}
        role="img"
        aria-label={label || alt || 'Photo placeholder'}
      >
        <Camera size={26} strokeWidth={1.5} />
        {label && (
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-center px-2">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      onClick={onClick}
      className={`${rounded} ${className} ${imgClassName} ${onClick ? 'cursor-pointer' : ''}`}
    />
  );
};

export default PhotoSlot;
