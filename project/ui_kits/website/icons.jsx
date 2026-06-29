// Shared Lucide icon helper for the CicaKereső website kit.
// Loads via window.lucide (UMD). Exposes window.Icon and window.WordMark.
function Icon({ name, size = 20, stroke = 2, color = 'currentColor', style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node || !window.lucide) return;
    const L = window.lucide;
    const data = L && (
      (L.icons && (L.icons[toPascal(name)] || L.icons[name])) ||
      L[toPascal(name)]
    );
    node.innerHTML = '';
    if (data && window.lucide.createElement) {
      const svg = window.lucide.createElement(data);
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke', color);
      svg.setAttribute('stroke-width', stroke);
      node.appendChild(svg);
    } else {
      // fallback: data-lucide replacement
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      node.appendChild(i);
      window.lucide.createIcons && window.lucide.createIcons();
    }
  });
  return <span ref={ref} style={{ display: 'inline-flex', width: size, height: size, ...style }} />;
}
function toPascal(s) { return s.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(''); }

// Brand wordmark lockup using the circular logo asset.
function WordMark({ height = 40, light = false }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <img src="../../assets/logo-circle.png" alt="CicaKereső" style={{ height, width: height, borderRadius: '50%' }} />
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: height * 0.5,
        color: light ? 'var(--cream-50)' : 'var(--cocoa-700)', letterSpacing: '-0.01em',
      }}>CicaKereső</span>
    </span>
  );
}

Object.assign(window, { Icon, WordMark });
