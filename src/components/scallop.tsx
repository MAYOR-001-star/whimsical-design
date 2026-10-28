export function ScallopTop({ color = "#FDC827" }: { color?: string }) {
  return (
    <div className="w-full overflow-hidden leading-none h-3 select-none pointer-events-none">
      <svg className="w-full h-3" preserveAspectRatio="repeat" fill={color}>
        <defs>
          <pattern id="scallop-top-pattern" x="0" y="0" width="20" height="12" patternUnits="userSpaceOnUse">
            <path d="M 0,12 C 4,12 6,0 10,0 C 14,0 16,12 20,12 Z" fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height="12" fill="url(#scallop-top-pattern)" />
      </svg>
    </div>
  );
}

export function ScallopBottom({ color = "#FDC827" }: { color?: string }) {
  return (
    <div className="w-full overflow-hidden leading-none h-3 select-none pointer-events-none">
      <svg className="w-full h-3" preserveAspectRatio="repeat" fill={color}>
        <defs>
          <pattern id="scallop-bottom-pattern" x="0" y="0" width="20" height="12" patternUnits="userSpaceOnUse">
            <path d="M 0,0 C 4,0 6,12 10,12 C 14,12 16,0 20,0 Z" fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height="12" fill="url(#scallop-bottom-pattern)" />
      </svg>
    </div>
  );
}

