import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './TechTicker.css';

const Ticker = ({ items, direction = 'horizontal', velocity = 50, dragEnabled = true }) => {
  const containerRef = useRef(null);
  const tickerRef = useRef(null);
  const dragX = useMotionValue(0);
  const [tickerWidth, setTickerWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const springX = useSpring(dragX, {
    damping: 40,
    stiffness: 200
  });

  useEffect(() => {
    if (tickerRef.current && containerRef.current) {
      const tickerWidth = tickerRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      
      setTickerWidth(tickerWidth);
      setContainerWidth(containerWidth);
    }
  }, [items]);

  useEffect(() => {
    if (!dragEnabled || isDragging || tickerWidth === 0) return;

    let animation;
    const animate = () => {
      const currentX = dragX.get();
      const newX = currentX - (velocity / 100);
      
      if (Math.abs(newX) >= tickerWidth) {
        dragX.set(0);
      } else {
        dragX.set(newX);
      }
      
      animation = requestAnimationFrame(animate);
    };

    animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, [dragX, tickerWidth, velocity, dragEnabled, isDragging]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const requiredClones = tickerWidth > 0 && containerWidth > 0 
    ? Math.ceil(containerWidth / tickerWidth) + 1 
    : 1;
  
  const clonedItems = Array(requiredClones).fill().flatMap(() => items);

  return (
    <div 
      className={`ticker-container ${direction}`}
      ref={containerRef}
    >
      <motion.div
        className="ticker-track"
        drag={dragEnabled ? direction === 'horizontal' ? 'x' : 'y' : false}
        dragConstraints={containerRef}
        dragElastic={0.1}
        style={{
          x: direction === 'horizontal' ? springX : 0,
          y: direction === 'vertical' ? springX : 0
        }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        ref={tickerRef}
      >
        {clonedItems.map((item, index) => (
          <TickerItem key={`${item.id}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

// Separate component to handle image loading state
const TickerItem = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      className="ticker-item"
      style={{ '--logo-color': item.color }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {!imageError ? (
        <img 
          src={item.icon} 
          alt={item.name} 
          className="ticker-icon-img"
          onError={handleImageError}
        />
      ) : (
        <span className="ticker-icon-fallback">
          {item.fallbackIcon}
        </span>
      )}
      <span className="ticker-text">{item.name}</span>
    </motion.div>
  );
};

const TechTicker = () => {
  // Using CDN URLs with specific logo colors
  const techItems = [
    { id: 1, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', fallbackIcon: '⚛️', color: '#61DAFB' },
    { id: 2, name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', fallbackIcon: '▲', color: '#000000' },
    { id: 3, name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', fallbackIcon: '📘', color: '#3178C6' },
    { id: 4, name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', fallbackIcon: '⬢', color: '#339933' },
    { id: 5, name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', fallbackIcon: '🍃', color: '#47A248' },
    { id: 6, name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', fallbackIcon: '🐘', color: '#4169E1' },
    { id: 7, name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', fallbackIcon: '🐳', color: '#2496ED' },
    { id: 8, name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', fallbackIcon: '☸️', color: '#326CE5' },
    { id: 9, name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', fallbackIcon: '☁️', color: '#FF9900' },
    { id: 10, name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', fallbackIcon: '🐍', color: '#3776AB' },
    { id: 11, name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', fallbackIcon: '📡', color: '#E10098' },
    { id: 12, name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', fallbackIcon: '💨', color: '#06B6D4' }
  ];

  return (
    <div className="tech-ticker-app">
      <h1>Digital Gravity Tech Stack</h1>
      <p>Drag to explore our technologies</p>
      
      <Ticker 
        items={techItems} 
        direction="horizontal" 
        velocity={30} 
        dragEnabled={true} 
      />
      
      <div className="ticker-instructions">
        <span className="drag-hint">← Drag to explore →</span>
      </div>
    </div>
  );
};

export default TechTicker;