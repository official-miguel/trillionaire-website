import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses for better performance
  compress: true,

  // Ensure trailing slash consistency
  trailingSlash: false,

  // Security and performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME type sniffing
          { key: "X-Content-Type-Options",  value: "nosniff"                                    },
          // Clickjacking protection
          { key: "X-Frame-Options",         value: "SAMEORIGIN"                                 },
          // Referrer policy
          { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin"            },
          // XSS protection header
          { key: "X-XSS-Protection",        value: "1; mode=block"                              },
          // Permissions policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/brand/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/services/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Redirects for SEO — handle common URL variants
  async redirects() {
    return [
      // Redirect /services (no such route) to homepage
      { source: "/services", destination: "/", permanent: false },
    ];
  },

  images: {
    // Serve modern image formats
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
