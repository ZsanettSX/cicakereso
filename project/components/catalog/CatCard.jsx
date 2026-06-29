import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Tag } from '../core/Tag.jsx';

/**
 * The marquee listing card: one adoptable cat. Photo with availability badge
 * and favourite heart, then name, attributes (age · sex · breed), shelter +
 * location. Lifts on hover. Composes Badge + Tag.
 */
export function CatCard({
  name = 'Cica',
  photo = null,
  photoFilter = 'none',
  age = '',
  sex = '',           // 'nőstény' | 'kandúr'
  breed = '',
  coatColor = 'var(--cat-orange)',
  coatLabel = '',
  shelter = '',
  location = '',
  status = 'available',
  favorite = false,
  onFavorite,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const statusLabel = { available: 'Örökbe fogadható', reserved: 'Foglalt', urgent: 'Sürgős' }[status] || '';

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--cream-200)',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {/* Photo */}
      <div style={{
        position: 'relative', aspectRatio: '4 / 3', background: 'var(--cream-100)',
        overflow: 'hidden',
      }}>
        {photo
          ? <img src={photo} alt={name} style={{
              width: '100%', height: '100%', objectFit: 'cover',
              filter: photoFilter,
              transform: hover ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform var(--dur-slow) var(--ease-out)',
            }} />
          : <div style={{
              width: '100%', height: '100%', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: 'var(--camel-500)', fontSize: 40,
            }}>🐾</div>}

        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          <Badge status={status} size="sm">{statusLabel}</Badge>
        </div>

        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onFavorite && onFavorite(); }}
          aria-label="Kedvenc"
          style={{
            position: 'absolute', top: 10, right: 10,
            width: 36, height: 36, borderRadius: '50%', border: 'none',
            background: 'rgba(250,241,228,0.92)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: 'var(--shadow-sm)',
            transition: 'transform var(--dur-fast) var(--ease-soft)',
          }}
        >
          <svg width="19" height="19" viewBox="0 0 24 24"
            fill={favorite ? 'var(--danger)' : 'none'}
            stroke={favorite ? 'var(--danger)' : 'var(--cocoa-300)'}
            strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: coatColor,
            boxShadow: 'inset 0 0 0 1px rgba(104,66,48,0.15)', flexShrink: 0 }} />
          <h3 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)',
            fontSize: 'var(--text-lg)', color: 'var(--cocoa-800)', lineHeight: 1.1,
          }}>{name}</h3>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {age && <Tag tone="sage" size="sm">{age}</Tag>}
          {sex && <Tag tone="neutral" size="sm">{sex}</Tag>}
          {breed && <Tag tone="neutral" size="sm">{breed}</Tag>}
        </div>

        <div style={{
          marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {location}{shelter ? ` · ${shelter}` : ''}
          </span>
        </div>
      </div>
    </article>
  );
}
