/* @ds-bundle: {"format":3,"namespace":"CicaKeresDesignSystem_1a6097","components":[{"name":"CatCard","sourcePath":"components/catalog/CatCard.jsx"},{"name":"ColorSwatch","sourcePath":"components/catalog/ColorSwatch.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FilterChip","sourcePath":"components/forms/FilterChip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/catalog/CatCard.jsx":"51d5cc3f1aa3","components/catalog/ColorSwatch.jsx":"ffbdec1a145a","components/core/Avatar.jsx":"df61679ae5b7","components/core/Badge.jsx":"c0902a34a6c8","components/core/Button.jsx":"ba0020f04dd5","components/core/Tag.jsx":"8b1d63b77e92","components/forms/Checkbox.jsx":"9381b66fd35a","components/forms/FilterChip.jsx":"98d610f81260","components/forms/Input.jsx":"572d31644947","components/forms/Select.jsx":"66e30c90fc53","ui_kits/website/BrowseView.jsx":"00d506317e1a","ui_kits/website/CatProfileView.jsx":"3c8645c37670","ui_kits/website/DonateView.jsx":"533b4b2485c3","ui_kits/website/Footer.jsx":"0eba93875269","ui_kits/website/Header.jsx":"63e5a3f1a1a6","ui_kits/website/HomeView.jsx":"bd947103c271","ui_kits/website/ServicesView.jsx":"9a8c02455e93","ui_kits/website/ShelterView.jsx":"9e4c1d9e8119","ui_kits/website/data.js":"3683fa3331f5","ui_kits/website/icons.jsx":"b6ee0d80dda1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CicaKeresDesignSystem_1a6097 = window.CicaKeresDesignSystem_1a6097 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/catalog/ColorSwatch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Coat-colour swatch used in filters and on cat profiles. A soft rounded
 * square of the coat colour with an optional label below.
 */
function ColorSwatch({
  color = 'var(--cat-orange)',
  label = '',
  size = 'md',
  selected = false,
  onClick,
  style = {},
  ...rest
}) {
  const dim = size === 'sm' ? 28 : size === 'lg' ? 52 : 38;
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    disabled: !clickable,
    title: label,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      background: 'transparent',
      border: 'none',
      padding: 0,
      cursor: clickable ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-md)',
      background: color,
      boxShadow: selected ? '0 0 0 2px var(--cream-50), 0 0 0 4px var(--forest-700)' : 'inset 0 0 0 1px rgba(104,66,48,0.12), var(--shadow-xs)',
      transition: 'box-shadow var(--dur-fast) var(--ease-out)'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xs)',
      color: selected ? 'var(--forest-700)' : 'var(--text-muted)',
      fontWeight: selected ? 'var(--fw-semibold)' : 'var(--fw-regular)'
    }
  }, label));
}
Object.assign(__ds_scope, { ColorSwatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ColorSwatch.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Round avatar for shelters, providers and users. Shows an image, or
 * initials on a warm tinted background as fallback. Optional ring.
 */
function Avatar({
  src = null,
  alt = '',
  name = '',
  size = 48,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = (name || alt || '?').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      minWidth: size,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--camel-300)',
      color: 'var(--cocoa-800)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: size * 0.38,
      boxShadow: ring ? '0 0 0 3px var(--cream-50), 0 0 0 5px var(--camel-500)' : 'var(--shadow-xs)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status / count badge. Use `status` for semantic states (örökbe fogadható,
 * foglalt, sürgős…) or `count` for numeric notification bubbles.
 */
function Badge({
  children,
  status = 'available',
  size = 'md',
  style = {},
  ...rest
}) {
  const map = {
    available: {
      bg: 'var(--success-bg)',
      fg: '#3f5a31',
      label: '●'
    },
    reserved: {
      bg: 'var(--warning-bg)',
      fg: '#8a5a1c',
      label: '●'
    },
    urgent: {
      bg: 'var(--danger-bg)',
      fg: '#8a4030',
      label: '●'
    },
    info: {
      bg: 'var(--info-bg)',
      fg: '#3f5666',
      label: '●'
    },
    neutral: {
      bg: 'var(--cream-100)',
      fg: 'var(--cocoa-700)',
      label: '●'
    }
  };
  const s = map[status] || map.neutral;
  const pad = size === 'sm' ? '2px 9px' : '4px 12px';
  const fs = size === 'sm' ? 'var(--text-2xs)' : 'var(--text-xs)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: s.bg,
      color: s.fg,
      padding: pad,
      fontSize: fs,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.3,
      letterSpacing: '0.01em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.6em',
      lineHeight: 1
    }
  }, s.label), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CicaKereső primary button. Rounded "pill" shape, warm cocoa-tinted shadow,
 * gentle press-shrink. Variants: primary (forest), accent (camel),
 * secondary (sage outline), ghost. Sizes: sm | md | lg.
 */
function Button({
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
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-sm)',
      gap: '6px'
    },
    md: {
      padding: '11px 22px',
      fontSize: 'var(--text-base)',
      gap: '8px'
    },
    lg: {
      padding: '15px 30px',
      fontSize: 'var(--text-md)',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: 'var(--color-primary-text)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    accent: {
      background: hover ? 'var(--color-accent-hover)' : 'var(--color-accent)',
      color: 'var(--color-accent-text)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: hover ? 'var(--sage-100)' : 'var(--surface-card)',
      color: 'var(--forest-700)',
      border: '1.5px solid var(--sage-300)',
      boxShadow: 'none'
    },
    ghost: {
      background: hover ? 'var(--cream-100)' : 'transparent',
      color: 'var(--cocoa-700)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
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
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small rounded label for cat attributes (age, breed, sex…) and metadata.
 * Tones map to the warm palette. Optional leading colour dot or icon.
 */
function Tag({
  children,
  tone = 'neutral',
  size = 'md',
  dot = null,
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--cream-100)',
      fg: 'var(--cocoa-700)',
      bd: 'var(--cream-200)'
    },
    sage: {
      bg: 'var(--sage-200)',
      fg: 'var(--forest-800)',
      bd: 'var(--sage-300)'
    },
    forest: {
      bg: 'var(--forest-700)',
      fg: 'var(--cream-50)',
      bd: 'transparent'
    },
    camel: {
      bg: 'var(--camel-300)',
      fg: 'var(--cocoa-800)',
      bd: 'var(--camel-500)'
    },
    cocoa: {
      bg: 'var(--cocoa-700)',
      fg: 'var(--cream-50)',
      bd: 'transparent'
    }
  };
  const sizes = {
    sm: {
      padding: '2px 8px',
      fontSize: 'var(--text-2xs)'
    },
    md: {
      padding: '4px 11px',
      fontSize: 'var(--text-xs)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      padding: sizes[size].padding,
      fontSize: sizes[size].fontSize,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1.4,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: dot,
      display: 'inline-block',
      boxShadow: 'inset 0 0 0 1px rgba(104,66,48,0.15)'
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/catalog/CatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The marquee listing card: one adoptable cat. Photo with availability badge
 * and favourite heart, then name, attributes (age · sex · breed), shelter +
 * location. Lifts on hover. Composes Badge + Tag.
 */
function CatCard({
  name = 'Cica',
  photo = null,
  photoFilter = 'none',
  age = '',
  sex = '',
  // 'nőstény' | 'kandúr'
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
  const statusLabel = {
    available: 'Örökbe fogadható',
    reserved: 'Foglalt',
    urgent: 'Sürgős'
  }[status] || '';
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--cream-200)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: 'var(--cream-100)',
      overflow: 'hidden'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: photoFilter,
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--camel-500)',
      fontSize: 40
    }
  }, "\uD83D\uDC3E"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    status: status,
    size: "sm"
  }, statusLabel)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onFavorite && onFavorite();
    },
    "aria-label": "Kedvenc",
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: 'none',
      background: 'rgba(250,241,228,0.92)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--dur-fast) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: favorite ? 'var(--danger)' : 'none',
    stroke: favorite ? 'var(--danger)' : 'var(--cocoa-300)',
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: coatColor,
      boxShadow: 'inset 0 0 0 1px rgba(104,66,48,0.15)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--cocoa-800)',
      lineHeight: 1.1
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, age && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "sage",
    size: "sm"
  }, age), sex && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "neutral",
    size: "sm"
  }, sex), breed && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "neutral",
    size: "sm"
  }, breed)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, location, shelter ? ` · ${shelter}` : ''))));
}
Object.assign(__ds_scope, { CatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/CatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Rounded checkbox with warm sage check fill. */
function Checkbox({
  label = '',
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || `ck-cb-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--cocoa-700)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--forest-700)' : 'var(--white)',
      border: `1.5px solid ${checked ? 'var(--forest-700)' : 'var(--sage-300)'}`,
      boxShadow: 'var(--shadow-xs)',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--cream-50)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toggleable filter chip — the selectable pills above the cat grid
 * (e.g. quick filters "Kölyök", "Vörös", "Sürgős"). Selected = sage fill.
 */
function FilterChip({
  children,
  selected = false,
  onClick,
  icon = null,
  count = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": selected,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '8px 15px',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--text-sm)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      background: selected ? 'var(--forest-700)' : hover ? 'var(--sage-100)' : 'var(--white)',
      color: selected ? 'var(--cream-50)' : 'var(--cocoa-700)',
      border: `1.5px solid ${selected ? 'var(--forest-700)' : 'var(--sage-300)'}`,
      boxShadow: selected ? 'var(--shadow-sm)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), icon, children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      background: selected ? 'rgba(250,241,228,0.22)' : 'var(--cream-100)',
      color: selected ? 'var(--cream-50)' : 'var(--text-muted)',
      padding: '1px 7px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, count));
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label, leading icon and helper/error text.
 * Rounded 16px, soft cream border, sage focus ring.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--cocoa-700)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: disabled ? 'var(--cream-100)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      opacity: disabled ? 0.6 : 1
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '12px 0',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--cocoa-800)'
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-body)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Styled native select used across the cat-browse filters
 * (kor, szín, fajta, nem, helyszín). Rounded, cream border, chevron.
 */
function Select({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-sm)',
      color: 'var(--cocoa-700)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      background: disabled ? 'var(--cream-100)' : 'var(--white)',
      border: `1.5px solid ${focus ? 'var(--sage-500)' : 'var(--cream-200)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 40px 12px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: value ? 'var(--cocoa-800)' : 'var(--text-muted)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--camel-600)',
      fontSize: 12,
      lineHeight: 1
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BrowseView.jsx
try { (() => {
// Browse / search view with a sticky filter sidebar. Exposes window.BrowseView.
function BrowseView({
  onOpenCat
}) {
  const {
    CatCard,
    Select,
    Checkbox,
    FilterChip,
    ColorSwatch,
    Button,
    Badge
  } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;
  const [age, setAge] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [city, setCity] = React.useState('');
  const [coat, setCoat] = React.useState(null);
  const [onlyUrgent, setOnlyUrgent] = React.useState(false);
  const [fixed, setFixed] = React.useState(true);
  const [favs, setFavs] = React.useState({
    mazli: true
  });
  const cities = [...new Set(D.cats.map(c => c.city))];
  const results = D.cats.filter(c => (!age || c.ageGroup === age) && (!sex || c.sex === sex.toLowerCase()) && (!city || c.city === city) && (!coat || c.coat.startsWith(coat)) && (!onlyUrgent || c.status === 'urgent'));
  const reset = () => {
    setAge('');
    setSex('');
    setCity('');
    setCoat(null);
    setOnlyUrgent(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ck-eyebrow"
  }, "\xD6r\xF6kbefogadhat\xF3 cic\xE1k"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '6px 0 4px',
      fontSize: 'var(--text-2xl)'
    }
  }, "B\xF6ng\xE9ssz a cic\xE1k k\xF6z\xF6tt"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      marginBottom: 22
    }
  }, "Sz\u0171k\xEDtsd a keres\xE9st, \xE9s tal\xE1ld meg a hozz\xE1d ill\u0151 cic\xE1t."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '264px 1fr',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 88,
      background: 'var(--white)',
      border: '1px solid var(--cream-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '22px',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--cocoa-800)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 18,
    color: "var(--forest-700)"
  }), " Sz\u0171r\u0151k"), /*#__PURE__*/React.createElement("a", {
    onClick: reset,
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      color: 'var(--camel-600)'
    }
  }, "T\xF6rl\xE9s")), /*#__PURE__*/React.createElement(Select, {
    label: "Kor",
    value: age,
    onChange: e => setAge(e.target.value),
    placeholder: "B\xE1rmely",
    options: ['Kölyök', 'Fiatal', 'Felnőtt', 'Idős']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Nem",
    value: sex,
    onChange: e => setSex(e.target.value),
    placeholder: "B\xE1rmely",
    options: ['Nőstény', 'Kandúr']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Helysz\xEDn",
    value: city,
    onChange: e => setCity(e.target.value),
    placeholder: "Eg\xE9sz orsz\xE1g",
    options: cities
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--cocoa-700)',
      display: 'block',
      marginBottom: 10
    }
  }, "Sz\xEDn"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, D.coats.map(([lab, c]) => /*#__PURE__*/React.createElement(ColorSwatch, {
    key: lab,
    color: c,
    label: lab,
    selected: coat === lab,
    onClick: () => setCoat(coat === lab ? null : lab)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--cream-200)',
      paddingTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Csak ivartalan\xEDtott",
    checked: fixed,
    onChange: e => setFixed(e.target.checked)
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Csak s\xFCrg\u0151s esetek",
    checked: onlyUrgent,
    onChange: e => setOnlyUrgent(e.target.checked)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(FilterChip, {
    selected: !age && !onlyUrgent,
    onClick: reset
  }, "\xD6sszes"), /*#__PURE__*/React.createElement(FilterChip, {
    selected: age === 'Kölyök',
    onClick: () => setAge(age === 'Kölyök' ? '' : 'Kölyök')
  }, "K\xF6lyk\xF6k"), /*#__PURE__*/React.createElement(FilterChip, {
    selected: onlyUrgent,
    onClick: () => setOnlyUrgent(!onlyUrgent),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "alarm-clock",
      size: 15
    })
  }, "S\xFCrg\u0151s"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-display)',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--forest-700)'
    }
  }, results.length), " tal\xE1lat")), results.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, results.map(cat => /*#__PURE__*/React.createElement(CatCard, {
    key: cat.id,
    name: cat.name,
    photo: "../../assets/mascot-cat.png",
    photoFilter: cat.filter,
    age: cat.age,
    sex: cat.sex,
    breed: cat.breed,
    coatColor: cat.coatColor,
    location: cat.city,
    shelter: cat.shelter,
    status: cat.status,
    favorite: !!favs[cat.id],
    onFavorite: () => setFavs(f => ({
      ...f,
      [cat.id]: !f[cat.id]
    })),
    onClick: () => onOpenCat(cat.id)
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 20px',
      background: 'var(--surface-cream)',
      borderRadius: 'var(--radius-lg)',
      border: '1px dashed var(--border-sage)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot-cat.png",
    alt: "",
    style: {
      width: 120,
      opacity: 0.85,
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px'
    }
  }, "M\xE9g nincs tal\xE1lat"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      margin: '0 0 16px'
    }
  }, "Pr\xF3b\xE1lj t\xE1g\xEDtani a sz\u0171r\u0151k\xF6n."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: reset
  }, "Sz\u0171r\u0151k t\xF6rl\xE9se")))));
}
Object.assign(window, {
  BrowseView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BrowseView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CatProfileView.jsx
try { (() => {
// Single cat profile. Exposes window.CatProfileView.
function CatProfileView({
  catId,
  onNav,
  onOpenCat,
  onOpenShelter
}) {
  const {
    Tag,
    Badge,
    Button,
    Avatar,
    CatCard
  } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;
  const cat = D.cats.find(c => c.id === catId) || D.cats[0];
  const [fav, setFav] = React.useState(false);
  const similar = D.cats.filter(c => c.id !== cat.id && c.ageGroup === cat.ageGroup).slice(0, 3);
  const statusLabel = {
    available: 'Örökbe fogadható',
    reserved: 'Foglalt',
    urgent: 'Sürgős'
  }[cat.status];
  const health = [['syringe', 'Oltott', true], ['scissors', 'Ivartalanított', true], ['scan-line', 'Chippel ellátott', true], ['heart-pulse', 'Egészséges', true]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '24px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('browse'),
    style: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-display)',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 16
  }), " Vissza a cic\xE1khoz"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 0.9fr',
      gap: 36,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'var(--cream-100)',
      aspectRatio: '4/3',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot-cat.png",
    alt: cat.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: cat.filter
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: cat.status
  }, statusLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginTop: 12
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--cream-100)',
      border: i === 0 ? '2px solid var(--forest-700)' : '1px solid var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot-cat.png",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: cat.filter
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-3xl)'
    }
  }, cat.name), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: cat.coatColor,
      boxShadow: 'inset 0 0 0 1px rgba(104,66,48,0.15)'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      margin: '8px 0 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), " ", cat.city, " \xB7 ", cat.shelter), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "sage"
  }, cat.age), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, cat.sex), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, cat.breed), /*#__PURE__*/React.createElement(Tag, {
    dot: cat.coatColor
  }, cat.coat)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      lineHeight: 1.7,
      marginBottom: 20
    }
  }, cat.name, " egy ", cat.traits.join(', ').toLowerCase(), " cica, aki t\xFCrelmes, szeret\u0151 gazdira v\xE1r. J\xF3l \xE9rzi mag\xE1t t\xE1rsas\xE1gban, \xE9s im\xE1dja a naps\xFCt\xF6tte ablakp\xE1rk\xE1nyt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 22
    }
  }, cat.traits.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--surface-cream)',
      border: '1px solid var(--cream-200)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 12px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      color: 'var(--cocoa-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14,
    color: "var(--camel-600)"
  }), " ", t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 10,
      marginBottom: 24
    }
  }, health.map(([icon, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--success-bg)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--success)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      fontSize: 'var(--text-sm)'
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "paw-print",
      size: 18
    })
  }, "\xD6r\xF6kbe fogadom"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => setFav(!fav),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 18,
      color: fav ? 'var(--danger)' : 'currentColor'
    })
  }, fav ? 'Mentve' : 'Kedvenc')), /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpenShelter(D.shelters.find(s => s.name === cat.shelter)?.id),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: 'var(--white)',
      border: '1px solid var(--cream-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: cat.shelter,
    size: 48,
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--cocoa-800)'
    }
  }, cat.shelter), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, cat.city, " \xB7 Ellen\u0151rz\xF6tt menhely")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    color: "var(--camel-600)"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 20
    }
  }, "Hasonl\xF3 cic\xE1k"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, similar.map(c => /*#__PURE__*/React.createElement(CatCard, {
    key: c.id,
    name: c.name,
    photo: "../../assets/mascot-cat.png",
    photoFilter: c.filter,
    age: c.age,
    sex: c.sex,
    breed: c.breed,
    coatColor: c.coatColor,
    location: c.city,
    shelter: c.shelter,
    status: c.status,
    onClick: () => onOpenCat(c.id)
  })))));
}
Object.assign(window, {
  CatProfileView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CatProfileView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DonateView.jsx
try { (() => {
// Donation flow. Exposes window.DonateView.
function DonateView() {
  const {
    Button,
    Input,
    Tag
  } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;
  const amounts = [2000, 5000, 10000, 20000];
  const [amount, setAmount] = React.useState(5000);
  const [custom, setCustom] = React.useState('');
  const [shelter, setShelter] = React.useState('mancs');
  const [monthly, setMonthly] = React.useState(false);
  const fmt = n => n.toLocaleString('hu-HU') + ' Ft';
  const value = custom ? parseInt(custom.replace(/\D/g, '') || '0', 10) : amount;
  const impact = value >= 20000 ? 'egy hónap eledel egy cicának' : value >= 10000 ? 'egy teljes oltási csomag' : value >= 5000 ? 'két hét meleg étel' : 'egy zacskó minőségi tápot';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '36px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot-cat.png",
    alt: "",
    style: {
      width: 130,
      marginBottom: 6,
      filter: 'drop-shadow(0 12px 22px rgba(104,66,48,0.18))'
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "ck-eyebrow"
  }, "\uD83D\uDC3E T\xE1mogat\xE1s"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '6px 0 8px',
      fontSize: 'var(--text-3xl)'
    }
  }, "Adom\xE1nyozz egy cic\xE1\xE9rt"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      lineHeight: 1.6,
      maxWidth: 480,
      margin: '0 auto'
    }
  }, "Adom\xE1nyod 100%-a a v\xE1lasztott menhelyhez ker\xFCl \u2014 eledel, olt\xE1s \xE9s meleg fekhely a gazdira v\xE1r\xF3 cic\xE1knak.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--cream-200)',
      borderRadius: 'var(--radius-xl)',
      padding: '28px 30px',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--cocoa-700)',
      display: 'block',
      marginBottom: 10
    }
  }, "Melyik menhelyet t\xE1mogatod?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, D.shelters.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => setShelter(s.id),
    style: {
      flex: 1,
      minWidth: 140,
      cursor: 'pointer',
      textAlign: 'left',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      background: shelter === s.id ? 'var(--sage-100)' : 'var(--white)',
      border: `1.5px solid ${shelter === s.id ? 'var(--forest-700)' : 'var(--cream-200)'}`,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      color: 'var(--cocoa-800)'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, s.city)))), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--cocoa-700)',
      display: 'block',
      marginBottom: 10
    }
  }, "\xD6sszeg"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginBottom: 12
    }
  }, amounts.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => {
      setAmount(a);
      setCustom('');
    },
    style: {
      cursor: 'pointer',
      padding: '14px 8px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-md)',
      background: !custom && amount === a ? 'var(--forest-700)' : 'var(--white)',
      color: !custom && amount === a ? 'var(--cream-50)' : 'var(--cocoa-800)',
      border: `1.5px solid ${!custom && amount === a ? 'var(--forest-700)' : 'var(--cream-200)'}`
    }
  }, a.toLocaleString('hu-HU'), " Ft"))), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Egy\xE9ni \xF6sszeg (Ft)",
    value: custom,
    onChange: e => setCustom(e.target.value),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "wallet",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface-cream)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      margin: '18px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--camel-300)',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "gift",
    size: 20,
    color: "var(--cocoa-800)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)'
    }
  }, fmt(value)), " = ", impact, ".")), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setMonthly(!monthly),
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: monthly ? 'var(--forest-700)' : 'var(--cream-200)',
      position: 'relative',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: monthly ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-soft)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)'
    }
  }, "Havi rendszeres t\xE1mogat\xE1s")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "paw-print",
      size: 18
    })
  }, fmt(value), " adom\xE1nyoz\xE1sa", monthly ? ' havonta' : ''), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      margin: '14px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 12
  }), " Biztons\xE1gos fizet\xE9s \xB7 Az adom\xE1ny 100%-a a menhely\xE9")));
}
Object.assign(window, {
  DonateView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DonateView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Forest-green footer band. Exposes window.Footer.
function Footer({
  onNav
}) {
  const cols = [['Örökbefogadás', ['Cicák böngészése', 'Hogyan működik?', 'Gyakori kérdések', 'Sikertörténetek']], ['Menhelyeknek', ['Menhely regisztráció', 'Cica feltöltése', 'Partnerprogram']], ['CicaKereső', ['Rólunk', 'Kapcsolat', 'Adatvédelem', 'ÁSZF']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--forest-700)',
      color: 'var(--cream-50)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 28px 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WordMark, {
    height: 44,
    light: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      marginTop: 16,
      maxWidth: 280,
      color: 'rgba(250,241,228,0.78)',
      lineHeight: 1.6
    }
  }, "Tal\xE1ld meg \xE1lmaid cic\xE1j\xE1t Magyarorsz\xE1g menhelyeinek \xF6r\xF6kbe fogadhat\xF3 lak\xF3i k\xF6z\xF6tt.")), cols.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-md)',
      color: 'var(--cream-50)',
      margin: '0 0 14px'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      color: 'rgba(250,241,228,0.72)',
      textDecoration: 'none',
      fontSize: 'var(--text-sm)'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(250,241,228,0.16)',
      padding: '18px 28px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xs)',
      color: 'rgba(250,241,228,0.6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 CicaKeres\u0151 \xB7 cicakereso.hu"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, "K\xE9sz\xFClt \uD83D\uDC3E-tal Magyarorsz\xE1gon")));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Site header / nav. Exposes window.Header.
function Header({
  view,
  onNav
}) {
  const {
    Button
  } = window.CicaKeresDesignSystem_1a6097;
  const links = [['browse', 'Cicák'], ['shelters', 'Menhelyek'], ['services', 'Szolgáltatók'], ['donate', 'Támogatás']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(250,241,228,0.86)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '12px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(WordMark, {
    height: 42
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 12
    }
  }, links.map(([id, label]) => {
    const active = view === id;
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      onClick: () => onNav(id),
      style: {
        cursor: 'pointer',
        padding: '8px 14px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-display)',
        fontWeight: active ? 700 : 500,
        fontSize: 'var(--text-base)',
        color: active ? 'var(--forest-700)' : 'var(--cocoa-700)',
        background: active ? 'var(--sage-100)' : 'transparent',
        textDecoration: 'none'
      }
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('browse'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      color: 'var(--cocoa-700)'
    },
    title: "Keres\xE9s"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 22
  })), /*#__PURE__*/React.createElement("a", {
    style: {
      cursor: 'pointer',
      display: 'flex',
      color: 'var(--cocoa-700)'
    },
    title: "Kedvencek"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 22
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "paw-print",
      size: 16
    }),
    onClick: () => onNav('donate')
  }, "T\xE1mogatom"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeView.jsx
try { (() => {
// Home / landing view. Exposes window.HomeView.
function HomeView({
  onNav,
  onOpenCat
}) {
  const {
    Button,
    CatCard,
    Tag
  } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;
  const featured = D.cats.slice(0, 4);
  const steps = [['search', 'Böngéssz', 'Szűrj kor, szín, fajta, nem és helyszín szerint az ország cicái között.'], ['heart', 'Találj rá', 'Mentsd el a kedvenceidet és ismerd meg a történetüket, egészségi adataikat.'], ['paw-print', 'Fogadd örökbe', 'Vedd fel a kapcsolatot a menhellyel, és vidd haza új családtagod.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--cream-50)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 28px 40px',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "ck-eyebrow",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "paw-print",
    size: 15,
    color: "var(--camel-600)"
  }), " Cica-\xF6r\xF6kbefogad\xE1s Magyarorsz\xE1gon"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      margin: '14px 0 18px',
      lineHeight: 1.04
    }
  }, "Tal\xE1ld meg \xE1lmaid cic\xE1j\xE1t \u2014 n\xE9h\xE1ny kattint\xE1ssal."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      lineHeight: 1.6,
      maxWidth: 460,
      marginBottom: 26
    }
  }, "Egy helyen az orsz\xE1g menhelyeinek \xF6r\xF6kbe fogadhat\xF3 cic\xE1i. Minden lak\xF3 oltott, ivartalan\xEDtott \xE9s eg\xE9szs\xE9g\xFCgyileg ellen\u0151rz\xF6tt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    }),
    onClick: () => onNav('browse')
  }, "Cic\xE1k b\xF6ng\xE9sz\xE9se"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('shelters')
  }, "Menhelyek")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      marginTop: 30
    }
  }, [['1 240+', 'cica gazdira vár'], ['86', 'partner menhely'], ['9 300+', 'sikeres örökbefogadás']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--forest-700)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 380,
      height: 380,
      borderRadius: '50%',
      background: 'var(--sage-200)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 380,
      height: 380,
      borderRadius: '50%',
      border: '2px dashed var(--camel-300)',
      top: '50%',
      left: '50%',
      transform: 'translate(-46%,-54%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot-cat.png",
    alt: "CicaKeres\u0151 mascot",
    style: {
      position: 'relative',
      width: 360,
      filter: 'drop-shadow(0 18px 30px rgba(104,66,48,0.18))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 18,
      left: 8,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--success-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 20,
    color: "var(--success)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)'
    }
  }, "Ellen\u0151rz\xF6tt"), /*#__PURE__*/React.createElement("br", null), "menhelyek"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-cream)',
      borderTop: '1px solid var(--cream-200)',
      borderBottom: '1px solid var(--cream-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--cocoa-700)'
    }
  }, "Gyors keres\xE9s sz\xEDn szerint:"), D.coats.map(([lab, c]) => /*#__PURE__*/React.createElement("button", {
    key: lab,
    onClick: () => onNav('browse'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--white)',
      border: '1.5px solid var(--sage-300)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px 6px 8px',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-sm)',
      color: 'var(--cocoa-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: c,
      boxShadow: 'inset 0 0 0 1px rgba(104,66,48,0.15)'
    }
  }), lab)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "ck-eyebrow"
  }, "\uD83D\uDC3E \xDAj lak\xF3k a h\xE9ten"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '6px 0 0'
    }
  }, "Cic\xE1k, akik gazdira v\xE1rnak")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav('browse')
  }, "\xD6sszes cica")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, featured.map(cat => /*#__PURE__*/React.createElement(CatCard, {
    key: cat.id,
    name: cat.name,
    photo: "../../assets/mascot-cat.png",
    photoFilter: cat.filter,
    age: cat.age,
    sex: cat.sex,
    breed: cat.breed,
    coatColor: cat.coatColor,
    location: cat.city,
    shelter: cat.shelter,
    status: cat.status,
    onClick: () => onOpenCat(cat.id)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: 'center',
      marginBottom: 8
    }
  }, "H\xE1rom l\xE9p\xE9s az \xFAj csal\xE1dtagig"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      marginBottom: 36
    }
  }, "Az \xF6r\xF6kbefogad\xE1s egyszer\u0171, \xE1tl\xE1that\xF3 \xE9s biztons\xE1gos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, steps.map(([icon, title, body], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--cream-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 24px',
      boxShadow: 'var(--shadow-sm)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 18,
      right: 20,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 38,
      color: 'var(--sage-200)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 'var(--radius-md)',
      background: 'var(--sage-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26,
    color: "var(--forest-700)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontSize: 'var(--text-lg)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      margin: 0,
      lineHeight: 1.6
    }
  }, body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "ck-eyebrow"
  }, "Cic\xE1s szolg\xE1ltat\xF3k"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '6px 0 0'
    }
  }, "Minden, amire a cic\xE1dnak sz\xFCks\xE9ge van"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, D.services.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => onNav('services'),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      background: 'var(--surface-cream)',
      border: '1px solid var(--cream-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--camel-300)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24,
    color: "var(--cocoa-800)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      color: 'var(--cocoa-800)'
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, s.count, " szolg\xE1ltat\xF3"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '64px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--forest-700)',
      borderRadius: 'var(--radius-xl)',
      padding: '44px 48px',
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      color: 'var(--cream-50)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot-cat.png",
    alt: "",
    style: {
      width: 150,
      flexShrink: 0,
      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--cream-50)',
      margin: '0 0 8px'
    }
  }, "T\xE1mogass egy menhelyet"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'rgba(250,241,228,0.82)',
      margin: 0,
      maxWidth: 520,
      lineHeight: 1.6
    }
  }, "Adom\xE1nyoddal eledelt, olt\xE1st \xE9s meleg fekhelyet biztos\xEDtasz a gazdira v\xE1r\xF3 cic\xE1knak.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "paw-print",
      size: 18
    }),
    onClick: () => onNav('donate')
  }, "Adom\xE1nyozok")))));
}
Object.assign(window, {
  HomeView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesView.jsx
try { (() => {
// Cat-service providers directory. Exposes window.ServicesView.
function ServicesView() {
  const {
    Button,
    Tag,
    Avatar,
    Badge
  } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;
  const [cat, setCat] = React.useState('all');
  const providers = [{
    name: 'Bajusz Cicakozmetika',
    type: 'kozmetika',
    icon: 'scissors',
    city: 'Budapest',
    rating: 4.9,
    tag: 'Kozmetika'
  }, {
    name: 'Dorombo Panzió',
    type: 'panzio',
    icon: 'house',
    city: 'Szeged',
    rating: 4.8,
    tag: 'Panzió'
  }, {
    name: 'Vörös Tappancs Tenyészet',
    type: 'tenyeszto',
    icon: 'award',
    city: 'Győr',
    rating: 5.0,
    tag: 'Tenyésztő'
  }, {
    name: 'Dr. Kandúr Állatorvos',
    type: 'orvos',
    icon: 'stethoscope',
    city: 'Debrecen',
    rating: 4.9,
    tag: 'Állatorvos'
  }, {
    name: 'Cirmos Szépségszalon',
    type: 'kozmetika',
    icon: 'scissors',
    city: 'Pécs',
    rating: 4.7,
    tag: 'Kozmetika'
  }, {
    name: 'Maine Coon Otthon',
    type: 'tenyeszto',
    icon: 'award',
    city: 'Budapest',
    rating: 4.9,
    tag: 'Tenyésztő'
  }];
  const shown = providers.filter(p => cat === 'all' || p.type === cat);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "ck-eyebrow"
  }, "Cic\xE1s szolg\xE1ltat\xF3k"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '6px 0 4px',
      fontSize: 'var(--text-2xl)'
    }
  }, "Megb\xEDzhat\xF3 szolg\xE1ltat\xF3k a cic\xE1dnak"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      marginBottom: 24
    }
  }, "Kozmetika, panzi\xF3, teny\xE9szt\u0151k \xE9s \xE1llatorvosok egy helyen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 26,
      flexWrap: 'wrap'
    }
  }, [['all', 'Összes', 'layout-grid'], ...D.services.map(s => [s.id, s.label, s.icon])].map(([id, lab, icon]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setCat(id),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '8px 15px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-sm)',
      background: cat === id ? 'var(--forest-700)' : 'var(--white)',
      color: cat === id ? 'var(--cream-50)' : 'var(--cocoa-700)',
      border: `1.5px solid ${cat === id ? 'var(--forest-700)' : 'var(--sage-300)'}`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15
  }), " ", lab))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      paddingBottom: 8
    }
  }, shown.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      background: 'var(--white)',
      border: '1px solid var(--cream-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--camel-300)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 24,
    color: "var(--cocoa-800)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--camel-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 15,
    color: "var(--camel-500)"
  }), " ", p.rating)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      fontSize: 'var(--text-lg)'
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), " ", p.city)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "sage"
  }, p.tag), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Profil"))))));
}
Object.assign(window, {
  ServicesView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ShelterView.jsx
try { (() => {
// Shelters: list + single shelter detail. Exposes window.ShelterView.
function ShelterView({
  shelterId,
  onOpenShelter,
  onOpenCat,
  onNav
}) {
  const {
    Avatar,
    Button,
    CatCard,
    Tag,
    Badge
  } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;

  // LIST
  if (!shelterId) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '32px 28px 0'
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "ck-eyebrow"
    }, "Partner menhelyek"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: '6px 0 4px',
        fontSize: 'var(--text-2xl)'
      }
    }, "Menhelyek Magyarorsz\xE1gon"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        color: 'var(--text-muted)',
        marginBottom: 26
      }
    }, "Ellen\u0151rz\xF6tt menhelyek \xE9s alap\xEDtv\xE1nyok, akik a cic\xE1k j\xF3l\xE9t\xE9\xE9rt dolgoznak."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 20
      }
    }, D.shelters.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: () => onOpenShelter(s.id),
      style: {
        cursor: 'pointer',
        background: 'var(--white)',
        border: '1px solid var(--cream-200)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 88,
        background: 'var(--sage-200)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 20,
        bottom: -24
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: s.name,
      size: 56,
      ring: true
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '34px 20px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 'var(--text-lg)'
      }
    }, s.name), /*#__PURE__*/React.createElement(Icon, {
      name: "badge-check",
      size: 18,
      color: "var(--forest-700)"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-body)',
        color: 'var(--text-muted)',
        fontSize: 'var(--text-sm)',
        margin: '6px 0 12px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 14
    }), " ", s.city, " \xB7 ", s.since, " \xF3ta"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        color: 'var(--text-body)',
        fontSize: 'var(--text-sm)',
        lineHeight: 1.6,
        margin: '0 0 14px'
      }
    }, s.blurb), /*#__PURE__*/React.createElement(Tag, {
      tone: "sage"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cat",
      size: 13
    }), " ", s.cats, " cica gazdira v\xE1r"))))));
  }

  // DETAIL
  const s = D.shelters.find(x => x.id === shelterId) || D.shelters[0];
  const cats = D.cats.filter(c => c.shelter === s.name);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: 'linear-gradient(var(--sage-300), var(--sage-200))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 20,
      marginTop: -48,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: s.name,
    size: 104,
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--text-2xl)'
    }
  }, s.name), /*#__PURE__*/React.createElement(Badge, {
    status: "info"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 14
  }), " Ellen\u0151rz\xF6tt")), /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-muted)',
      margin: '8px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), " ", s.city, " \xB7 Alap\xEDtva ", s.since, " \xB7 ", s.cats, " cica")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 16
    })
  }, "Kapcsolat"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "paw-print",
      size: 16
    }),
    onClick: () => onNav('donate')
  }, "T\xE1mogatom"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-cream)',
      border: '1px solid var(--cream-200)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      lineHeight: 1.7,
      margin: 0
    }
  }, s.blurb)), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 18
    }
  }, s.name, " cic\xE1i"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      paddingBottom: 8
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(CatCard, {
    key: c.id,
    name: c.name,
    photo: "../../assets/mascot-cat.png",
    photoFilter: c.filter,
    age: c.age,
    sex: c.sex,
    breed: c.breed,
    coatColor: c.coatColor,
    location: c.city,
    shelter: c.shelter,
    status: c.status,
    onClick: () => onOpenCat(c.id)
  })))));
}
Object.assign(window, {
  ShelterView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ShelterView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// CicaKereső UI-kit demo data. Sets window.CK_DATA.
// Cat photos reuse the brand mascot with subtle CSS filters to suggest variety
// (the kit has no real photography yet — swap in real photos when available).
window.CK_DATA = {
  cats: [{
    id: 'mazli',
    name: 'Mázli',
    age: '2 éves',
    ageGroup: 'Felnőtt',
    sex: 'kandúr',
    breed: 'Európai rövidszőrű',
    coat: 'Vörös cirmos',
    coatColor: 'var(--cat-orange)',
    city: 'Budapest',
    shelter: 'Mancs Menhely',
    status: 'available',
    filter: 'none',
    traits: ['Játékos', 'Emberbarát', 'Oltott']
  }, {
    id: 'cirmi',
    name: 'Cirmi',
    age: '6 hónapos',
    ageGroup: 'Kölyök',
    sex: 'nőstény',
    breed: 'Cirmos',
    coat: 'Vörös',
    coatColor: 'var(--cat-orange)',
    city: 'Szeged',
    shelter: 'Talpacska Alapítvány',
    status: 'urgent',
    filter: 'brightness(1.08) saturate(1.1)',
    traits: ['Bátor', 'Kíváncsi']
  }, {
    id: 'morzsi',
    name: 'Morzsi',
    age: '4 éves',
    ageGroup: 'Felnőtt',
    sex: 'kandúr',
    breed: 'Házi macska',
    coat: 'Krém',
    coatColor: 'var(--cat-cream)',
    city: 'Debrecen',
    shelter: 'Cicaház Egyesület',
    status: 'available',
    filter: 'saturate(0.6) brightness(1.12)',
    traits: ['Nyugodt', 'Ölbe bújós']
  }, {
    id: 'panna',
    name: 'Panna',
    age: '1 éves',
    ageGroup: 'Fiatal',
    sex: 'nőstény',
    breed: 'Európai rövidszőrű',
    coat: 'Szürke',
    coatColor: 'var(--cat-grey)',
    city: 'Győr',
    shelter: 'Mancs Menhely',
    status: 'available',
    filter: 'grayscale(0.55) brightness(1.02)',
    traits: ['Független', 'Okos']
  }, {
    id: 'bogyo',
    name: 'Bogyó',
    age: '8 éves',
    ageGroup: 'Idős',
    sex: 'kandúr',
    breed: 'Házi macska',
    coat: 'Fekete',
    coatColor: 'var(--cat-black)',
    city: 'Pécs',
    shelter: 'Talpacska Alapítvány',
    status: 'reserved',
    filter: 'grayscale(0.85) brightness(0.7)',
    traits: ['Higgadt', 'Türelmes']
  }, {
    id: 'luna',
    name: 'Luna',
    age: '3 éves',
    ageGroup: 'Felnőtt',
    sex: 'nőstény',
    breed: 'Teknőcfoltos',
    coat: 'Teknős',
    coatColor: 'var(--cat-tortie)',
    city: 'Budapest',
    shelter: 'Cicaház Egyesület',
    status: 'available',
    filter: 'sepia(0.3) saturate(1.2)',
    traits: ['Szeretetteljes', 'Beszédes']
  }, {
    id: 'tappancs',
    name: 'Tappancs',
    age: '5 hónapos',
    ageGroup: 'Kölyök',
    sex: 'kandúr',
    breed: 'Cirmos',
    coat: 'Vörös',
    coatColor: 'var(--cat-orange)',
    city: 'Miskolc',
    shelter: 'Mancs Menhely',
    status: 'available',
    filter: 'brightness(1.05) hue-rotate(-6deg)',
    traits: ['Pajkos', 'Energikus']
  }, {
    id: 'szotyi',
    name: 'Szotyi',
    age: '2 éves',
    ageGroup: 'Felnőtt',
    sex: 'nőstény',
    breed: 'Házi macska',
    coat: 'Krém',
    coatColor: 'var(--cat-cream)',
    city: 'Szeged',
    shelter: 'Talpacska Alapítvány',
    status: 'available',
    filter: 'saturate(0.7) brightness(1.15)',
    traits: ['Csendes', 'Óvatos']
  }],
  shelters: [{
    id: 'mancs',
    name: 'Mancs Menhely',
    city: 'Budapest',
    cats: 34,
    since: 2009,
    blurb: 'Belvárosi cicamenhely, ahol minden lakó orvosi ellenőrzésen esik át és ideiglenes befogadóknál nevelkedik.'
  }, {
    id: 'talpacska',
    name: 'Talpacska Alapítvány',
    city: 'Szeged',
    cats: 21,
    since: 2014,
    blurb: 'Önkéntes alapú alapítvány, amely a Dél-Alföld elhagyott cicáit menti és gondozza.'
  }, {
    id: 'cicahaz',
    name: 'Cicaház Egyesület',
    city: 'Debrecen',
    cats: 18,
    since: 2011,
    blurb: 'Idős és speciális igényű cicák szakszerű ellátására specializálódott egyesület.'
  }],
  services: [{
    id: 'kozmetika',
    label: 'Kozmetika',
    icon: 'scissors',
    count: 48
  }, {
    id: 'panzio',
    label: 'Panzió',
    icon: 'house',
    count: 26
  }, {
    id: 'tenyeszto',
    label: 'Tenyésztők',
    icon: 'award',
    count: 31
  }, {
    id: 'orvos',
    label: 'Állatorvos',
    icon: 'stethoscope',
    count: 64
  }],
  coats: [['Vörös', 'var(--cat-orange)'], ['Krém', 'var(--cat-cream)'], ['Szürke', 'var(--cat-grey)'], ['Fekete', 'var(--cat-black)'], ['Fehér', 'var(--cat-white)'], ['Teknős', 'var(--cat-tortie)']]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
// Shared Lucide icon helper for the CicaKereső website kit.
// Loads via window.lucide (UMD). Exposes window.Icon and window.WordMark.
function Icon({
  name,
  size = 20,
  stroke = 2,
  color = 'currentColor',
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node || !window.lucide) return;
    const L = window.lucide;
    const data = L && (L.icons && (L.icons[toPascal(name)] || L.icons[name]) || L[toPascal(name)]);
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
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}
function toPascal(s) {
  return s.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('');
}

// Brand wordmark lockup using the circular logo asset.
function WordMark({
  height = 40,
  light = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-circle.png",
    alt: "CicaKeres\u0151",
    style: {
      height,
      width: height,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: height * 0.5,
      color: light ? 'var(--cream-50)' : 'var(--cocoa-700)',
      letterSpacing: '-0.01em'
    }
  }, "CicaKeres\u0151"));
}
Object.assign(window, {
  Icon,
  WordMark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CatCard = __ds_scope.CatCard;

__ds_ns.ColorSwatch = __ds_scope.ColorSwatch;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
