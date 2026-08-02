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
      { source: "/", destination: "https://www.trlactive.com/", permanent: true },
      { source: "/compare/fitbod-alternative", destination: "https://www.trlactive.com/compare/trlactive-vs-fitbod", permanent: true },
      { source: "/compare/:path*", destination: "https://www.trlactive.com/compare", permanent: true },
      { source: "/vs/fitbod", destination: "https://www.trlactive.com/compare/trlactive-vs-fitbod", permanent: true },
      { source: "/vs/:path*", destination: "https://www.trlactive.com/compare", permanent: true },
      { source: "/blog/fitbod-vs-trlactive-detailed", destination: "https://www.trlactive.com/compare/trlactive-vs-fitbod", permanent: true },
      { source: "/blog/is-fitbod-worth-it", destination: "https://www.trlactive.com/compare/trlactive-vs-fitbod", permanent: true },
      { source: "/blog/how-ai-adapts-when-you-miss-workouts", destination: "https://www.trlactive.com/blog/fitness-app-that-adjusts-automatically", permanent: true },
      { source: "/blog/fitness-app-for-inconsistent-schedules", destination: "https://www.trlactive.com/blog/fitness-app-that-adjusts-automatically", permanent: true },
      { source: "/workout-app-with-meal-planning", destination: "https://www.trlactive.com/blog/workout-app-with-meal-planning", permanent: true },
      { source: "/personalized-workout-plan-app", destination: "https://www.trlactive.com/blog/personalized-workout-plan-app", permanent: true },
      { source: "/voice-guided-workout-app", destination: "https://www.trlactive.com/blog/voice-coaching-explained", permanent: true },
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
