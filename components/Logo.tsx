export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="دانورا" role="img">
      <defs>
        <linearGradient id="dnr" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#4338CA" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#dnr)" />
      <path d="M20 44V20h9c7.7 0 12.5 4.6 12.5 12S36.7 44 29 44h-9Zm7.5-6H29c3.9 0 6.2-2.3 6.2-6s-2.3-6-6.2-6h-1.5v12Z" fill="white" />
      <circle cx="46" cy="21" r="4" fill="#A5B4FC" />
    </svg>
  );
}