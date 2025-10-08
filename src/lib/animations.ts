
import { useEffect, useRef, useState } from 'react';

// Intersection Observer hook for reveal animations
export function useRevealAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);
}

// Mouse parallax effect hook
export function useMouseParallax(factor = 0.1) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) * factor;
      const moveY = (e.clientY - centerY) * factor;
      
      setPosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [factor]);

  return { ref, transform: `translate(${position.x}px, ${position.y}px)` };
}

// Scroll-based multi-layer parallax with requestAnimationFrame
export interface ParallaxLayerConfig {
  id: string;
  speed: number; // positive moves with scroll, negative against
  initialY?: number;
}

export function useScrollParallax(layers: ParallaxLayerConfig[]) {
  const refs = useRef(new Map<string, HTMLDivElement | null>());
  const latestScroll = useRef(0);
  const ticking = useRef(false);
  const layersRef = useRef<ParallaxLayerConfig[]>(layers);

  // Keep latest layers in a ref so we don't recreate listeners on every render
  useEffect(() => {
    layersRef.current = layers;
  }, [layers]);

  useEffect(() => {
    const handleScroll = () => {
      latestScroll.current = window.scrollY || window.pageYOffset;
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          const current = latestScroll.current;
          const activeLayers = layersRef.current;
          activeLayers.forEach(layer => {
            const node = refs.current.get(layer.id);
            if (!node) return;
            const translateY = (layer.initialY ?? 0) + current * layer.speed;
            node.style.transform = `translate3d(0, ${translateY}px, 0)`;
          });
          ticking.current = false;
        });
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll as EventListener);
  }, []);

  function setLayerRef(id: string) {
    return (el: HTMLDivElement | null) => {
      if (el) {
        refs.current.set(id, el);
      } else {
        refs.current.delete(id);
      }
    };
  }

  return { setLayerRef };
}

// Smooth scroll function
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: 'smooth'
    });
  }
}
