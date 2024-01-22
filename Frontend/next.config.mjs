// next.config.mjs

import path from 'path';

const nextConfig = {
  webpack(config) {
    config.resolve.modules.push(path.resolve('./app'));
    return config;
  },
};

export default nextConfig;




/*

/** @type {import('next').NextConfig} **/
/*const nextConfig = {};

export default nextConfig;
*/