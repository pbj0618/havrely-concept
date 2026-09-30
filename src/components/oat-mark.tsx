/**
 * The oat stem from the carton, redrawn as a single-weight line so it can
 * sit at any size: as a divider, an icon, or the mark beside the wordmark.
 * Spikelets hang from the stem the way they do on the pack.
 */
const SPIKELETS: [number, number, number][] = [
  // [x, y, direction] along the stem; direction -1 hangs left, 1 right
  [24, 18, 1],
  [25, 30, -1],
  [27, 42, 1],
  [28, 54, -1],
  [29, 66, 1],
  [30, 78, -1],
];

export function OatMark({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 60 124"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <path d="M31 122 C 31 92, 30 58, 22 8" />
      <path d="M31 104 C 24 98, 17 99, 12 104" />
      {SPIKELETS.map(([x, y, d]) => {
        const tipX = x + d * 14;
        const tipY = y + 12;
        return (
          <g key={y}>
            <path d={`M${x} ${y} Q ${x + d * 8} ${y - 2}, ${tipX} ${tipY - 4}`} />
            <ellipse
              cx={tipX}
              cy={tipY}
              rx={2.6}
              ry={5}
              transform={`rotate(${d * -18} ${tipX} ${tipY})`}
            />
          </g>
        );
      })}
    </svg>
  );
}
