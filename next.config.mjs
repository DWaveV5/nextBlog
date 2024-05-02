import { rule } from 'postcss';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler:{
    emotion:true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
