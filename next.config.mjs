/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' because Next-Auth and MongoDB API routes require a Node.js backend.
  // The Android app will act as a WebView client to the hosted/local Next.js server.
};

export default nextConfig;
