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
      // One canonical host: send the vercel.app duplicate to the main domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "trillionaire-website-one.vercel.app" }],
        destination: "https://www.trillionairedesigns.co.ke/:path*",
        permanent: true,
      },
      { source: "/blog/how-to-choose-website-development-company-kenya", destination: "/blog/how-to-choose-website-development-company", permanent: true },
      { source: "/blog/ai-automation-small-businesses-kenya", destination: "/blog/ai-automation-small-businesses", permanent: true },
      { source: "/blog/custom-software-vs-off-the-shelf-kenya", destination: "/blog/custom-software-vs-off-the-shelf", permanent: true },
    ];
  },

  images: {
    // Serve modern image formats
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
