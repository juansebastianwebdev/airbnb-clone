/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        hostname: "azmboyaymbixlhjcawky.supabase.co",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
