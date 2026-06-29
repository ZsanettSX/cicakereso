import React from 'react';

/**
 * Small rounded label for cat attributes (age, breed, sex…) and metadata.
 * Tones map to the warm palette. Optional leading colour dot or icon.
 */
export function Tag({
  children,
  tone = 'neutral',
  size = 'md',
  dot = null,
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: { bg: 'var(--cream-100)', fg: 'var(--cocoa-700)', bd: 'var(--cream-200)' },
    sage:    { bg: 'var(--sage-200)', fg: 'var(--forest-800)', bd: 'var(--sage-300)' },
    forest:  { bg: 'var(--forest-700)', fg: 'var(--cream-50)', bd: 'transparent' },
    camel:   { bg: 'var(--camel-300)', fg: 'var(--cocoa-800)', bd: 'var(--camel-500)' },
    cocoa:   { bg: 'var(--cocoa-700)', fg: 'var(--cream-50)', bd: 'transparent' },
  };
  const sizes = {
    sm: { padding: '2px 8px', fontSize: 'var(--text-2xs)' },
    md: { padding: '4px 11px', fontSize: 'var(--text-xs)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        padding: sizes[size].padding,
        fontSize: sizes[size].fontSize,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-medium)',
        lineHeight: 1.4,
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{
          width: 8, height: 8, borderRadius: '50%',
          background: dot, display: 'inline-block',
          boxShadow: 'inset 0 0 0 1px rgba(104,66,48,0.15)',
        }} />
      )}
      {icon}
      {children}
    </span>
  );
}
