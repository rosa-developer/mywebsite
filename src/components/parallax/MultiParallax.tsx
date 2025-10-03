import React from 'react';
import { useScrollParallax, ParallaxLayerConfig } from '@/lib/animations';
import { cn } from '@/lib/utils';

export interface MultiParallaxLayer extends ParallaxLayerConfig {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface MultiParallaxProps {
  layers: MultiParallaxLayer[];
  className?: string;
}

export function MultiParallax({ layers, className }: MultiParallaxProps) {
  const { setLayerRef } = useScrollParallax(layers.map(l => ({ id: l.id, speed: l.speed, initialY: l.initialY })));

  return (
    <div className={cn('absolute inset-0 pointer-events-none', className)} aria-hidden>
      {layers.map(layer => (
        <div
          key={layer.id}
          ref={setLayerRef(layer.id)}
          className={cn('absolute will-change-transform', layer.className)}
          style={layer.style}
        >
          {layer.children}
        </div>
      ))}
    </div>
  );
}

export interface ParallaxLayerProps extends Omit<MultiParallaxLayer, 'id'> {
  id: string;
}

export function ParallaxLayer(_: ParallaxLayerProps) {
  // This component is a placeholder for potential future context-driven API.
  // For now, prefer using MultiParallax with a layers prop.
  return null;
}



