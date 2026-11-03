import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          borderRadius: '36px',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 22 L14 32 L22 42"
            stroke="#32cd32"
            strokeWidth="4.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 22 L50 32 L42 42"
            stroke="#32cd32"
            strokeWidth="4.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="36"
            y1="18"
            x2="28"
            y2="46"
            stroke="#32cd32"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
