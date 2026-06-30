'use client'

import { useId } from 'react'

interface CheckboxProps {
  label: string
  name?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  value?: string
}

export default function Checkbox({
  label,
  name,
  checked,
  defaultChecked,
  onChange,
  value,
}: CheckboxProps) {
  const id = useId()
  return (
    <label
      htmlFor={id}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-body)',
        userSelect: 'none',
      }}
    >
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          width: 18,
          height: 18,
          accentColor: 'var(--forest-700)',
          cursor: 'pointer',
        }}
      />
      {label}
    </label>
  )
}
