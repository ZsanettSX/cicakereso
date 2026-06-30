import { CSSProperties, ReactNode } from 'react'

type Tone = 'sage' | 'neutral' | 'camel'
type Size = 'sm' | 'md'

interface TagProps {
  children: ReactNode
  tone?: Tone
  size?: Size
}

const tones: Record<Tone, CSSProperties> = {
  sage: { background: 'var(--sage-100)', color: 'var(--forest-700)' },
  neutral: { background: 'var(--cream-100)', color: 'var(--cocoa-700)' },
  camel: { background: 'var(--camel-300)', color: 'var(--cocoa-800)' },
}

export default function Tag({ children, tone = 'sage', size = 'sm' }: TagProps) {
  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    borderRadius: 'var(--radius-pill)',
    padding: size === 'sm' ? '0.2rem 0.6rem' : '0.35rem 0.85rem',
    fontSize: size === 'sm' ? 'var(--text-xs)' : 'var(--text-sm)',
    lineHeight: 1.3,
    ...tones[tone],
  }
  return <span style={style}>{children}</span>
}
