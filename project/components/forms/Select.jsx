import React from 'react';

/**
 * Styled native select used across the cat-browse filters
 * (kor, szín, fajta, nem, helyszín). Rounded, cream border, chevron.
 */
export function Select({
  label = '',
  value,
  onChange,
  options = [],
  placeholder = '',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || `ck-select-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={selId} style={{
          fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-semibold)',
          fontSize: 'var(--text-sm)', color: 'var(--cocoa-700)',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          id={selId}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none',
            width: '100%',
            background: disabled ? 'var(--cream-100)' : 'var(--white)',
            border: `1.5px solid ${focus ? 'var(--sage-500)' : 'var(--cream-200)'}`,
            borderRadius: 'var(--radius-md)',
            padding: '12px 40px 12px 14px',
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
            color: value ? 'var(--cocoa-800)' : 'var(--text-muted)',
            boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            outline: 'none',
            transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
          }}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span style={{
          position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
          pointerEvents: 'none', color: 'var(--camel-600)', fontSize: 12, lineHeight: 1,
        }}>▾</span>
      </div>
    </div>
  );
}
