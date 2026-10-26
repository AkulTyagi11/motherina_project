import React from 'react';

interface FemaleAvatarProps {
  className?: string;
}

const FemaleAvatar: React.FC<FemaleAvatarProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div
      className={`${className} rounded-full bg-gradient-to-br from-peach via-soft-pink/60 to-motherina-pink/20 border-2 border-motherina-pink/30 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden select-none`}
      title="Mother Feedback"
    >
      <svg
        viewBox="0 0 48 48"
        className="w-4/5 h-4/5 text-motherina-pink"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft head & bun */}
        <circle cx="24" cy="18" r="8" fill="currentColor" fillOpacity="0.85" />
        <circle cx="24" cy="8.5" r="3.5" fill="currentColor" fillOpacity="0.95" />
        {/* Curved shoulders / bust */}
        <path
          d="M10 42 C10 32, 17 28, 24 28 C31 28, 38 32, 38 42"
          fill="currentColor"
          fillOpacity="0.85"
        />
        {/* Delicate hair swoop */}
        <path
          d="M16 18 C16 12, 19.5 9, 24 9 C28.5 9, 32 12, 32 18 C32 14, 28 11.5, 24 11.5 C20 11.5, 16 14, 16 18 Z"
          fill="currentColor"
          fillOpacity="0.95"
        />
      </svg>
    </div>
  );
};

export default FemaleAvatar;
