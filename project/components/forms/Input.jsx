import React from 'react';

/**
 * Text input with optional label, leading icon and helper/error text.
 * Rounded 16px, soft cream border, sage focus ring.
 */
export function Input({
  label = '',
  value,
  onChange,
  placeholder = '',
  type = 'text',
  iconLeft = null,
  helper = '',
  error = '',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `ck-input-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--sage-500)' : 'var(--cream-200)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)',
          fontSize: 'var(--text-sm)', color: 'var(--cocoa-700)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: disabled ? 'var(--cream-100)' : 'var(--white)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        padding: '0 14px',
        boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
        transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        opacity: disabled ? 0.6 : 1,
      }}>
        {iconLeft && <span style={{ color: 'var(--text-muted)', display: 'flex' }}>{iconLeft}</span>}
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            padding: '12px 0', fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)', color: 'var(--cocoa-800)',
          }}
          {...rest}
        />
      </div>
      {(helper || error) && (
        <span style={{
          fontSize: 'var(--text-xs)', fontFamily: 'var(--font-body)',
          color: error ? 'var(--danger)' : 'var(--text-muted)',
        }}>{error || helper}</span>
      )}
    </div>
  );
}
