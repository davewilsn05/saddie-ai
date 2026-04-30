import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.saddie.ai" }],
        destination: "https://saddie.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
