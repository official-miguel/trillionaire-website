import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
        }}
      >
        {/* Laptop with code brackets */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <svg
            width="280"
            height="200"
            viewBox="0 0 280 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Laptop screen */}
            <rect
              x="0"
              y="0"
              width="280"
              height="180"
              rx="12"
              fill="none"
              stroke="#32cd32"
              strokeWidth="6"
            />
            
            {/* Code brackets */}
            <g transform="translate(140, 90)">
              <path
                d="M -70 -30 L -95 -5 L -70 20"
                stroke="#32cd32"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 70 -30 L 95 -5 L 70 20"
                stroke="#32cd32"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="30"
                y1="-25"
                x2="-30"
                y2="15"
                stroke="#32cd32"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </g>
            
            {/* Laptop base */}
            <path
              d="M 0 180 L 20 180 L 20 173 L 260 173 L 260 180 L 280 180 L 268 200 L 12 200 Z"
              fill="#32cd32"
            />
          </svg>
        </div>
        
        {/* Company name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#ffffff',
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}
        >
          <div>Trillionaire</div>
          <div>Designs</div>
        </div>
        
        {/* Tagline */}
        <div
          style={{
            marginTop: '20px',
            color: '#32cd32',
            fontSize: '20px',
            fontWeight: 300,
          }}
        >
          SOFTWARE · SYSTEMS · AI
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
