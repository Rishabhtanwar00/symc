import { useId } from "react";

// ─── Theme Icons ──────────────────────────────────────────────────────────────
export const SunIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
  </svg>
);

export const MoonIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// ─── Social Icons ─────────────────────────────────────────────────────────────
export const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

export const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="6" width="20" height="12" rx="3" ry="3" />
    <polygon points="10 9 15 12 10 15 10 9" fill="currentColor" stroke="none" />
  </svg>
);

export const PhoneIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.57 2 2 0 0 1 3.58 2.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.01-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MailIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const ChevronUpIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export const ChevronDownIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const ChevronLeftIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ChevronRightIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const SendIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

type IconProps = {
  size?: number;
};

export const StarIcon = ({ size = 24 }: IconProps) => {
  const id = useId();

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <radialGradient id={id}>
          <stop offset="0%" stopColor="#f0d080" />
          <stop offset="100%" stopColor="#c9a84c" />
        </radialGradient>
      </defs>

      <path
        d="M12 2l2.8 6.6L22 10l-5 4.6L18.6 22 12 18.8 5.4 22 7 14.6 2 10l7.2-1.4L12 2z"
        fill={`url(#${id})`}
      />

      <circle cx="12" cy="12" r="2" fill="#fff" opacity="0.35" />
    </svg>
  );
};

export const HeartIcon = ({ size = 24 }: IconProps) => {
  const id = useId();

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <radialGradient id={id}>
          <stop offset="0%" stopColor="#f0d080" />
          <stop offset="100%" stopColor="#c9a84c" />
        </radialGradient>
      </defs>

      {/* main heart */}
      <path
        d="M12 21s-7-5-9-10c-1.5-4 1-7 4-7 2 0 3.5 1.5 5 3 1.5-1.5 3-3 5-3 3 0 5.5 3 4 7-2 5-9 10-9 10z"
        fill={`url(#${id})`}
      />

      {/* inner highlight */}
      <circle cx="12" cy="11" r="2.2" fill="#fff" opacity="0.3" />
    </svg>
  );
};

export const SparkIcon = ({ size = 24 }: IconProps) => {
  const id = useId();

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <radialGradient id={id}>
          <stop offset="0%" stopColor="#f0d080" />
          <stop offset="100%" stopColor="#c9a84c" />
        </radialGradient>
      </defs>

      <path
        d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z"
        fill={`url(#${id})`}
      />

      <circle cx="12" cy="12" r="2" fill="#fff" opacity="0.4" />
    </svg>
  );
};

export const CircleFlowIcon = ({ size = 24 }: IconProps) => {
  const id = useId();

  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <radialGradient id={id}>
          <stop offset="0%" stopColor="#f0d080" />
          <stop offset="100%" stopColor="#c9a84c" />
        </radialGradient>
      </defs>

      {/* outer ring (unchanged shape) */}
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={`url(#${id})`}
        strokeWidth="1.5"
        fill="none"
      />

      {/* inner core (unchanged) */}
      <circle cx="12" cy="12" r="3" fill={`url(#${id})`} />

      {/* arc (unchanged) */}
      <path
        d="M18 12a6 6 0 0 1-6 6"
        stroke={`url(#${id})`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* small highlight like StarIcon */}
      {/* <circle cx="12" cy="12" r="1.8" fill="#fff" opacity="0.35" /> */}
    </svg>
  );
};

export const CloseIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
