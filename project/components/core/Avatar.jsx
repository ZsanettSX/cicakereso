import React from 'react';

/**
 * Round avatar for shelters, providers and users. Shows an image, or
 * initials on a warm tinted background as fallback. Optional ring.
 */
export function Avatar({
  src = null,
  alt = '',
  name = '',
  size = 48,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = (name || alt || '?')
    .split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, minWidth: size,
        borderRadius: '50%',
        overflow: 'hidden',
        background: 'var(--camel-300)',
        color: 'var(--cocoa-800)',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-bold)',
        fontSize: size * 0.38,
        boxShadow: ring ? '0 0 0 3px var(--cream-50), 0 0 0 5px var(--camel-500)' : 'var(--shadow-xs)',
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials}
    </span>
  );
}
