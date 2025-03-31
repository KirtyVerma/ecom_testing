/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
