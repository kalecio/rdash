type GalleryImagePlaceholderProps = {
  description: string;
};

export function GalleryImagePlaceholder({ description }: GalleryImagePlaceholderProps) {
  return (
    <div className={styles.galleryImagePlaceholder} role="img" aria-label={`${description}: foto não encontrada`}>
      <svg viewBox="0 0 96 80" aria-hidden="true">
        <path d="M18 18h60v44H18z" />
        <path d="m24 54 15-15 10 10 9-9 15 15" />
        <circle cx="62" cy="30" r="5" />
        <path d="m13 12 70 56M83 12 13 68" className={styles.placeholderCross} />
      </svg>
      <span>FOTO NÃO ENCONTRADA</span>
      <small>{description}</small>
    </div>
  );
}

const styles = {
  galleryImagePlaceholder: [
    "gallery-image-placeholder",
    "relative flex w-full h-full min-h-[inherit] flex-col items-center justify-center gap-[10px] overflow-hidden p-[18px] text-[#ffe5df] text-center [background:radial-gradient(ellipse_at_50%_43%,_rgba(229,57,53,.36),_transparent_54%),_linear-gradient(145deg,_#5b100d,_#310908)]",
    "[&::before]:absolute [&::before]:inset-0 [&::before]:content-[''] [&::before]:opacity-[.3] [&::before]:[background-image:linear-gradient(0deg,_transparent_0_21px,_rgba(255,255,255,.09)_22px_25px,_transparent_26px_46px),_linear-gradient(90deg,_transparent_0_35px,_rgba(255,255,255,.08)_36px_40px,_transparent_41px_82px)] [&::before]:[background-size:82px_46px]",
    "[&_svg]:relative [&_svg]:z-1 [&_svg]:w-[clamp(42px,_7vw,_78px)] [&_svg]:h-auto [&_svg]:overflow-visible [&_svg]:fill-none [&_svg]:stroke-[#ffaaa1] [&_svg]:stroke-[2.3] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round] [&_svg]:filter-[drop-shadow(0_3px_6px_rgba(0,0,0,.3))]",
    "[&_span]:relative [&_span]:z-1 [&_span]:text-[length:11px] [&_span]:font-extrabold [&_span]:tracking-[.09em]",
    "[&_small]:relative [&_small]:z-1 [&_small]:max-w-full [&_small]:text-[length:10px] [&_small]:leading-[1.35] [&_small]:opacity-[.75]",
    "[.gallery-photo_&]:min-h-0",
    "mobile:[.gallery-album-photo_&]:gap-[6px] mobile:[.gallery-album-photo_&]:p-[8px]",
    "mobile:[&_span]:text-[length:8px]",
    "mobile:[&_small]:text-[length:8px]",
    "mobile:[&_svg]:w-[42px]",
    "mobile:[.gallery-photo_&]:gap-[7px] mobile:[.gallery-photo_&]:p-[8px]",
    "mobile:[.gallery-photo_&_span]:text-[length:7px]",
    "mobile:[.gallery-photo_&_small]:text-[length:7px]",
    "mobile:[.gallery-photo_&_svg]:w-[34px]",
  ].join(" "),
  placeholderCross: "[.gallery-image-placeholder_svg_&]:stroke-[#ff5b54] [.gallery-image-placeholder_svg_&]:stroke-[3]",
};
