import * as React from 'react';

/** Rounded pill label for cat attributes & metadata. */
export interface TagProps {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'sage' | 'forest' | 'camel' | 'cocoa';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** CSS colour for a leading swatch dot (e.g. a --cat-* token). */
  dot?: string;
  /** Leading icon node. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
