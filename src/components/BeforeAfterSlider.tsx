import React, { useState, useRef, useEffect, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  vehicleLabel?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Detailing (Swirls & Oxidation)',
  afterLabel = 'After GLOSSIFY Machine Polish',
  vehicleLabel = 'Porsche 911 Metallic Clear Coat',
  aspectRatio = 'aspect-[16/10]'
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-900 select-none">
      <div
        ref={containerRef}
        className={`relative w-full ${aspectRatio} overflow-hidden cursor-ew-resize select-none touch-none`}
        style={{ touchAction: 'none' }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* After Image (Full Background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Before Image (Clipped with inline style) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden select-none pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 h-full max-w-none object-cover filter contrast-75 brightness-90 grayscale-[20%]"
            style={{ width: containerWidth ? `${containerWidth}px` : '100%', maxWidth: 'none' }}
          />
          {/* Subtle simulated swirl overlay for realistic before comparison */}
          <div className="absolute inset-0 bg-neutral-900/15 pointer-events-none" />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Circular Drag Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#E52332] shadow-2xl flex items-center justify-center border-2 border-[#E52332]">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z M15.41 16.59L14 18l-6-6 6-6 1.41 1.41L10.83 12l4.58 4.59z" />
            </svg>
          </div>
        </div>

        {/* Badges / Labels */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md rounded border border-white/20">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-[#E52332]/90 backdrop-blur-md rounded border border-white/20">
            {afterLabel}
          </span>
        </div>

        {/* Bottom Vehicle Info */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-white/90 pointer-events-none bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 rounded">
          <span className="font-medium">{vehicleLabel}</span>
          <span className="text-[11px] opacity-75">Drag slider horizontally to compare</span>
        </div>
      </div>
    </div>
  );
};
