import * as React from 'react';

/**
 * Toggleable filter chip used above the cat grid.
 *
 * @startingPoint section="Forms" subtitle="Selectable filter pills with counts" viewport="700x150"
 */
export interface FilterChipProps {
  children?: React.ReactNode;
  /** Selected = forest fill. @default false */
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  /** Optional trailing count bubble. */
  count?: number | null;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function FilterChip(props: FilterChipProps): JSX.Element;
