import Image from "next/image";

export default function PlayStoreBadge() {
  const url = process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim();

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-90"
      >
        <Image
          src="/badges/google-play-badge.png"
          alt="Get it on Google Play"
          width={160}
          height={48}
        />
      </a>
    );
  }

  return (
    <div
      className="flex flex-col items-center gap-1 opacity-40 cursor-not-allowed"
      aria-disabled="true"
      role="presentation"
    >
      <Image
        src="/badges/google-play-badge.png"
        alt="Get it on Google Play"
        width={160}
        height={48}
      />
      <span className="text-sm text-muted">Coming soon to Google Play</span>
    </div>
  );
}
