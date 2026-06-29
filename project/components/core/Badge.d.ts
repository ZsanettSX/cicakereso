import * as React from 'react';

/** Semantic status / availability badge with a leading status dot. */
export interface BadgeProps {
  children?: React.ReactNode;
  /** @default "available" */
  status?: 'available' | 'reserved' | 'urgent' | 'info' | 'neutral';
  /** @default "md" */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
