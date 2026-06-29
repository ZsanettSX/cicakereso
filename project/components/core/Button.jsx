import React from 'react';

/**
 * CicaKereső primary button. Rounded "pill" shape, warm cocoa-tinted shadow,
 * gentle press-shrink. Variants: primary (forest), accent (camel),
 * secondary (sage outline), ghost. Sizes: sm | md | lg.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [active, setActive] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const sizes = {
    sm: { padding: '8px 16px', fontSize: 'var(--text-sm)', gap: '6px' },
    md: { padding: '11px 22px', fontSize: 'var(--text-base)', gap: '8px' },
    lg: { padding: '15px 30px', fontSize: 'var(--text-md)', gap: '10px' },
  };

  const variants = {
    primary: {
      background: hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: 'var(--color-primary-text)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    accent: {
      background: hover ? 'var(--color-accent-hover)' : 'var(--color-accent)',
      color: 'var(--color-accent-text)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      background: hover ? 'var(--sage-100)' : 'var(--surface-card)',
      color: 'var(--forest-700)',
      border: '1.5px solid var(--sage-300)',
      boxShadow: 'none',
    },
    ghost: {
      background: hover ? 'var(--cream-100)' : 'transparent',
      color: 'var(--cocoa-700)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizes[size].gap,
        width: fullWidth ? '100%' : 'auto',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--fw-semibold)',
        fontSize: sizes[size].fontSize,
        lineHeight: 1,
        letterSpacing: '0.01em',
        padding: sizes[size].padding,
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transform: active && !disabled ? 'scale(0.97)' : 'scale(1)',
        transition: 'transform var(--dur-fast) var(--ease-soft), background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
