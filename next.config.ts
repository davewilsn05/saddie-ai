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
      { source: "/for/beginners", destination: "/for-beginners", permanent: true },
      { source: "/for/busy-people", destination: "/for-busy-professionals", permanent: true },
      { source: "/feature/voice-coaching", destination: "/voice-guided-workout-app", permanent: true },
      { source: "/feature/apple-watch", destination: "/apple-watch-fitness-app", permanent: true },
      { source: "/feature/meal-planning", destination: "/workout-app-with-meal-planning", permanent: true },
      { source: "/feature/adaptive-planning", destination: "/personalized-workout-plan-app", permanent: true },
    ];
  },
};

export default nextConfig;
