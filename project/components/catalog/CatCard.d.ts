import * as React from 'react';

/**
 * The marquee adoptable-cat listing card — photo, availability badge,
 * favourite heart, name, attribute tags and shelter/location.
 *
 * @startingPoint section="Catalog" subtitle="Adoptable-cat listing card" viewport="320x360"
 */
export interface CatCardProps {
  name?: string;
  photo?: string | null;
  /** Optional CSS filter applied to the photo (kit demo use). */
  photoFilter?: string;
  /** e.g. "2 éves" */
  age?: string;
  /** e.g. "nőstény" | "kandúr" */
  sex?: string;
  breed?: string;
  /** CSS colour for the coat dot (a --cat-* token). */
  coatColor?: string;
  coatLabel?: string;
  shelter?: string;
  location?: string;
  /** Availability state. @default "available" */
  status?: 'available' | 'reserved' | 'urgent';
  favorite?: boolean;
  onFavorite?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function CatCard(props: CatCardProps): JSX.Element;
