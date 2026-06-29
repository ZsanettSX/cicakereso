import React from 'react';

/**
 * Status / count badge. Use `status` for semantic states (örökbe fogadható,
 * foglalt, sürgős…) or `count` for numeric notification bubbles.
 */
export function Badge({
  children,
  status = 'available',
  size = 'md',
  style = {},
  ...rest
}) {
  const map = {
    available: { bg: 'var(--success-bg)', fg: '#3f5a31', label: '●' },
    reserved:  { bg: 'var(--warning-bg)', fg: '#8a5a1c', label: '●' },
    urgent:    { bg: 'var(--danger-bg)',  fg: '#8a4030', label: '●' },
    info:      { bg: 'var(--info-bg)',    fg: '#3f5666', label: '●' },
    neutral:   { bg: 'var(--cream-100)',  fg: 'var(--cocoa-700)', label: '●' },
  };
  const s = map[status] || map.neutral;
  const pad = size === 'sm' ? '2px 9px' : '4px 12px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: s.bg, color: s.fg,
        padding: pad, fontSize: fs,
        fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)',
        borderRadius: 'var(--radius-pill)', lineHeight: 1.3,
        letterSpacing: '0.01em', whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      <span style={{ fontSize: '0.6em', lineHeight: 1 }}>{s.label}</span>
      {children}
    </span>
  );
}
