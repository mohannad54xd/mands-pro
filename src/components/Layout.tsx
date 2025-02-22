import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [scrollStartY, setScrollStartY] = useState(0);

  const updateScrollThumb = () => {
    if (!thumbRef.current || !trackRef.current) return;
    
    const trackRect = trackRef.current.getBoundingClientRect();
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const maxScrollDistance = trackRect.height - thumbRef.current.offsetHeight;
    const currentScrollDistance = maxScrollDistance * scrollPercentage;
    
    thumbRef.current.style.transform = `translateY(${currentScrollDistance}px)`;
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;

    const trackRect = track.getBoundingClientRect();
    const clickPosition = (e.clientY - trackRect.top - thumb.offsetHeight / 2) / trackRect.height;
    const scrollTarget = clickPosition * (document.documentElement.scrollHeight - window.innerHeight);
    
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
    setScrollStartY(window.scrollY);
  };

  const handleDrag = (e: MouseEvent) => {
    if (!isDragging || !trackRef.current) return;

    const trackHeight = trackRef.current.clientHeight;
    const dragDelta = e.clientY - dragStartY;
    const dragPercentage = dragDelta / trackHeight;
    
    const scrollAmount = dragPercentage * (document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: scrollStartY + scrollAmount });
  };

  useEffect(() => {
    const handleDragEnd = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging, dragStartY, scrollStartY]);

  useEffect(() => {
    updateScrollThumb();
    window.addEventListener('scroll', updateScrollThumb);
    window.addEventListener('resize', updateScrollThumb);

    return () => {
      window.removeEventListener('scroll', updateScrollThumb);
      window.removeEventListener('resize', updateScrollThumb);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>{children}</main>
      <div 
        ref={trackRef}
        onClick={handleTrackClick}
        className="fixed right-4 top-1/2 -translate-y-1/2 w-2 h-[60vh] bg-slate-800/50 backdrop-blur-sm rounded-full z-[9999] cursor-pointer hover:bg-slate-700/50 transition-colors" 
      />
      <div 
        ref={thumbRef}
        onMouseDown={handleDragStart}
        className="fixed right-4 w-2 h-20 min-h-[80px] bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full z-[9999] cursor-grab active:cursor-grabbing transition-all hover:w-3 hover:right-3.5"
      />
    </div>
  );
};

export default Layout;
