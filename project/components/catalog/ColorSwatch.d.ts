import * as React from 'react';

/** Coat-colour swatch (rounded square) with optional label, for filters/profiles. */
export interface ColorSwatchProps {
  /** CSS colour — typically a --cat-* token. */
  color?: string;
  label?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function ColorSwatch(props: ColorSwatchProps): JSX.Element;
