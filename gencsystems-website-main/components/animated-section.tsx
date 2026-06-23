'use client';

import { useEffect, useRef, ReactNode } from 'react';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'scale';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '-50px',
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animationClass = `fade-in-${direction}`;
  const staggerClass = delay > 0 ? `stagger-${Math.round(delay * 10)}` : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${staggerClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
