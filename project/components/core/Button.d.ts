import * as React from 'react';

/**
 * CicaKereső primary button — pill-shaped, warm, with a gentle press-shrink.
 *
 * @startingPoint section="Core" subtitle="Pill button — forest / camel / sage / ghost" viewport="700x150"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Element rendered before the label (e.g. a Lucide icon). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
