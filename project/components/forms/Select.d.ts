import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/** Styled native select for the browse filters. */
export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** String options or {value,label} objects. */
  options?: Array<string | SelectOption>;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export function Select(props: SelectProps): JSX.Element;
