// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Configuraciones adicionales de Webpack si las necesitas
    return config;
  },
};

export default nextConfig;
