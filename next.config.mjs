// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // Active le répertoire `app` expérimental si vous l'utilisez
    },
    swcMinify: true, // Active la minification avec SWC
  };
  
  export default nextConfig;