/** @type {import('next').NextConfig} */

const NODE_ENV = process.env.NODE_ENV;

const isProduction = NODE_ENV === "production";

const commonCspDirectives = [
  "default-src 'self'",
  "upgrade-insecure-requests",
  "frame-ancestors 'self'",
  "block-all-mixed-content",
  "object-src 'none'",
  "child-src www.googletagmanager.com *.facebook.com connect.facebook.net blob:",
  "manifest-src 'self'",
  `font-src 'self' fonts.gstatic.com fonts.googleapis.com data:`,
  "base-uri 'none'",
  `form-action *.facebook.com connect.facebook.net *.snapchat.com ${process.env.NEXT_PUBLIC_HOST}`,
  "media-src 'self'",
  "prefetch-src 'self' https://www.google.com https://www.gstatic.com",
  "worker-src blob:",
  "style-src 'self' www.googletagmanager.com tagmanager.google.com checkout.stripe.com fonts.googleapis.com tagmanager.google.com https://optimize.google.com 'unsafe-inline'",
  `frame-src 'self' https://www.google.com https://www.youtube.com vars.hotjar.com www.googletagmanager.com https://optimize.google.com *.stripe.com *.stripe.network maps.google.com maps.googleapis.com maps.google.com *.facebook.com connect.facebook.net *.snapchat.com challenges.cloudflare.com`,
  `connect-src 'self' *.hotjar.com wss://*.hotjar.com *.hotjar.io www.googletagmanager.com *.googleapis.com *.stripe.com maps.googleapis.com maps.google.com fonts.googleapis.com fonts.gstatic.com https://google-analytics.com https://ssl.google-analytics.com https://www.google-analytics.com stats.g.doubleclick.net ampcid.google.com analytics.google.com *.facebook.com connect.facebook.net https://tr.snapchat.com challenges.cloudflare.com cloudflareinsights.com ${
    !isProduction ? "localhost:* ws://localhost:*" : ""
  } vitals.vercel-insights.com about: data:`,
  `script-src 'self' 'unsafe-inline' ajax.cloudflare.com static.cloudflareinsights.com https://www.google.com https://www.gstatic.com https://static.hotjar.com https://script.hotjar.com https://www.googletagmanager.com https://googletagmanager.com https://tagmanager.google.com https://js.stripe.com https://checkout.stripe.com https://cdn.firebase.com https://*.firebaseio.com https://*.firebaseio.com https://maps.googleapis.com https://maps.google.com https://apis.google.com https://www.googleanalytics.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.googleoptimize.com https://optimize.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://connect.facebook.net https://graph.facebook.com https://js.facebook.com https://sc-static.net https://tr.snapchat.com cdn.vercel-insights.com challenges.cloudflare.com ${
    !isProduction ? "'unsafe-eval' localhost:*" : ""
  }`,
  `img-src 'self' *.hotjar.com www.googletagmanager.com *.stripe.com *.googleapis.com analytics.google.com maps.google.com maps.gstatic.com www.gstatic.com *.ggpht.com fonts.gstatic.com https://ssl.gstatic.com www.google-analytics.com ssl.google-analytics.com https://optimize.google.com https://googleads.g.doubleclick.net www.google.com www.google.co.in *.facebook.com *.facebook.net *.fbcdn.net *.snapchat.com data:`,
];

const directives = [...commonCspDirectives];

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "no-referrer",
  },
  {
    key: "Content-Security-Policy",
    value: directives.join("; "),
  },
];

if (isProduction) {
  securityHeaders.push({
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  });
}

const nextConfig = {
  swcMinify: true,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
