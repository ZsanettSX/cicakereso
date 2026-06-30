import { CSSProperties } from 'react'
import { STATUS_LABELS } from '@/lib/constants'

interface BadgeProps {
  status: string
}

function styleFor(status: string): CSSProperties {
  switch (status) {
    case 'available':
      return { background: 'var(--success-bg)', color: 'var(--success)' }
    case 'urgent':
      return { background: 'var(--warning-bg)', color: 'var(--warning)' }
    case 'reserved':
      return { background: 'var(--cream-200)', color: 'var(--cocoa-700)' }
    case 'adopted':
      return { background: 'var(--cream-100)', color: 'var(--text-muted)' }
    default:
      return { background: 'var(--cream-100)', color: 'var(--cocoa-700)' }
  }
}

export default function Badge({ status }: BadgeProps) {
  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'var(--text-xs)',
    letterSpacing: '0.02em',
    borderRadius: 'var(--radius-pill)',
    padding: '0.3rem 0.7rem',
    boxShadow: 'var(--shadow-xs)',
    ...styleFor(status),
  }
  return <span style={style}>{STATUS_LABELS[status] ?? status}</span>
}
