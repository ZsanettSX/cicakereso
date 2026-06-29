import React from 'react';

/**
 * Toggleable filter chip — the selectable pills above the cat grid
 * (e.g. quick filters "Kölyök", "Vörös", "Sürgős"). Selected = sage fill.
 */
export function FilterChip({
  children,
  selected = false,
  onClick,
  icon = null,
  count = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-pressed={selected}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '8px 15px',
        fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-medium)',
        fontSize: 'var(--text-sm)',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        background: selected
          ? 'var(--forest-700)'
          : hover ? 'var(--sage-100)' : 'var(--white)',
        color: selected ? 'var(--cream-50)' : 'var(--cocoa-700)',
        border: `1.5px solid ${selected ? 'var(--forest-700)' : 'var(--sage-300)'}`,
        boxShadow: selected ? 'var(--shadow-sm)' : 'none',
        transition: 'all var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
      {count != null && (
        <span style={{
          fontSize: 'var(--text-2xs)',
          background: selected ? 'rgba(250,241,228,0.22)' : 'var(--cream-100)',
          color: selected ? 'var(--cream-50)' : 'var(--text-muted)',
          padding: '1px 7px', borderRadius: 'var(--radius-pill)', fontWeight: 'var(--fw-semibold)',
        }}>{count}</span>
      )}
    </button>
  );
}
