import * as React from 'react';

/** Round avatar with image or initials fallback. */
export interface AvatarProps {
  src?: string | null;
  alt?: string;
  /** Name used to derive initials when no image. */
  name?: string;
  /** Pixel diameter. @default 48 */
  size?: number;
  /** Camel ring around the avatar. @default false */
  ring?: boolean;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
