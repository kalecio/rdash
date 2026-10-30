export type PageBackgroundProps = { image: string; opacity?: number }

/** Figma uses a centered image fill over the page color, with 34% opacity. */
export function PageBackground({ image, opacity = 0.34 }: PageBackgroundProps) {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: `url(${JSON.stringify(image)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity }} />
}
