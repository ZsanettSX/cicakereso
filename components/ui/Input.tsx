'use client'

import { CSSProperties, InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, style, id, ...rest },
  ref
) {
  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '0.625rem 0.875rem',
    borderRadius: 'var(--radius-md)',
    border: `1.5px solid ${error ? 'var(--danger)' : 'var(--cream-200)'}`,
    background: 'var(--white)',
    color: 'var(--text-body)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    ...style,
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'var(--text-sm)',
            color: 'var(--text-strong)',
          }}
        >
          {label}
        </label>
      )}
      <input id={id} ref={ref} style={inputStyle} {...rest} />
      {error && (
        <span style={{ color: 'var(--danger)', fontSize: 'var(--text-sm)' }}>{error}</span>
      )}
    </div>
  )
})

export default Input
