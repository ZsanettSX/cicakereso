'use client'

import { useState, CSSProperties, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
  href?: string
  target?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  title?: string
}

const sizeStyles: Record<Size, CSSProperties> = {
  sm: { padding: '0.375rem 0.875rem', fontSize: 'var(--text-sm)' },
  md: { padding: '0.625rem 1.25rem', fontSize: 'var(--text-base)' },
  lg: { padding: '0.875rem 1.75rem', fontSize: 'var(--text-md)' },
}

function variantStyle(variant: Variant, hover: boolean): CSSProperties {
  switch (variant) {
    case 'primary':
      return {
        background: hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
        color: 'var(--color-primary-text)',
        border: '1.5px solid transparent',
      }
    case 'secondary':
      return {
        background: hover ? 'var(--cream-200)' : 'var(--surface-card)',
        color: 'var(--forest-700)',
        border: '1.5px solid var(--border-sage)',
      }
    case 'accent':
      return {
        background: hover ? 'var(--color-accent-hover)' : 'var(--color-accent)',
        color: 'var(--cocoa-800)',
        border: '1.5px solid transparent',
      }
    case 'ghost':
      return {
        background: hover ? 'var(--cream-100)' : 'transparent',
        color: 'var(--forest-700)',
        border: '1.5px solid transparent',
      }
    case 'danger':
      return {
        background: hover ? '#a3573e' : 'var(--danger)',
        color: 'var(--white)',
        border: '1.5px solid transparent',
      }
  }
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  href,
  target,
  iconLeft,
  iconRight,
  title,
}: ButtonProps) {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)

  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'all var(--dur-base) var(--ease-out)',
    transform: active ? 'scale(0.97)' : 'scale(1)',
    textDecoration: 'none',
    lineHeight: 1.2,
    ...sizeStyles[size],
    ...variantStyle(variant, hover && !disabled),
  }

  const events = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false)
      setActive(false)
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
  }

  const content = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  )

  if (href && !disabled) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} style={style} title={title} {...events}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={style} title={title} {...events}>
      {content}
    </button>
  )
}
