import React from 'react';

/** Rounded checkbox with warm sage check fill. */
export function Checkbox({
  label = '',
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || `ck-cb-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label
      htmlFor={cbId}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.55 : 1,
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
        color: 'var(--cocoa-700)', ...style,
      }}
    >
      <span style={{
        width: 22, height: 22, borderRadius: 'var(--radius-xs)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: checked ? 'var(--forest-700)' : 'var(--white)',
        border: `1.5px solid ${checked ? 'var(--forest-700)' : 'var(--sage-300)'}`,
        boxShadow: 'var(--shadow-xs)',
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        flexShrink: 0,
      }}>
        {checked && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="var(--cream-50)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      <input
        id={cbId} type="checkbox" checked={checked}
        onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      {label}
    </label>
  );
}
