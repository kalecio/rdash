import type { CSSProperties, ReactNode } from "react";

type PencilBorderProps = {
  borderColor?: string;
  borderWidth?: string | number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
};

export function PencilBorder({
  borderColor = "#881411",
  borderWidth = 10,
  className = "",
  style,
  children,
  top = true,
  right = true,
  bottom = true,
  left = true,
}: PencilBorderProps) {
  const borderStyles = {
    borderTop: top ? `${borderWidth}px solid ${borderColor}` : "none",
    borderRight: right ? `${borderWidth}px solid ${borderColor}` : "none",
    borderBottom: bottom ? `${borderWidth}px solid ${borderColor}` : "none",
    borderLeft: left ? `${borderWidth}px solid ${borderColor}` : "none",
    filter: "url(#pencil-border)",
  } as CSSProperties;

  return (
    <div className={`relative ${className}`} style={style}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={borderStyles}
      />
      {children}
    </div>
  );
}

export function PencilBorderSvg() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <filter id="pencil-border">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves={3}
            seed={2}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={8}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
