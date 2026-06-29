import React from 'react';

/**
 * Coat-colour swatch used in filters and on cat profiles. A soft rounded
 * square of the coat colour with an optional label below.
 */
export function ColorSwatch({
  color = 'var(--cat-orange)',
  label = '',
  size = 'md',
  selected = false,
  onClick,
  style = {},
  ...rest
}) {
  const dim = size === 'sm' ? 28 : size === 'lg' ? 52 : 38;
  const clickable = !!onClick;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!clickable}
      title={label}
      style={{
        display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 5,
        background: 'transparent', border: 'none', padding: 0,
        cursor: clickable ? 'pointer' : 'default', ...style,
      }}
      {...rest}
    >
      <span style={{
        width: dim, height: dim, borderRadius: 'var(--radius-md)',
        background: color,
        boxShadow: selected
          ? '0 0 0 2px var(--cream-50), 0 0 0 4px var(--forest-700)'
          : 'inset 0 0 0 1px rgba(104,66,48,0.12), var(--shadow-xs)',
        transition: 'box-shadow var(--dur-fast) var(--ease-out)',
      }} />
      {label && (
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xs)',
          color: selected ? 'var(--forest-700)' : 'var(--text-muted)',
          fontWeight: selected ? 'var(--fw-semibold)' : 'var(--fw-regular)',
        }}>{label}</span>
      )}
    </button>
  );
}
