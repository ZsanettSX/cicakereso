import * as React from 'react';

/** Text input with label, optional leading icon, helper / error text. */
export interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  iconLeft?: React.ReactNode;
  helper?: string;
  /** Error message; turns the border terracotta and replaces helper. */
  error?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
