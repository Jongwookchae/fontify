/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Uncomment below if using Farcaster Hosted Manifests
  // Replace YOUR_HOSTED_MANIFEST_ID with your actual ID from:
  // https://farcaster.xyz/~/developers/mini-apps/manifest
  
  // async redirects() {
  //   return [
  //     {
  //       source: '/.well-known/farcaster.json',
  //       destination: 'https://api.farcaster.xyz/miniapps/hosted-manifest/YOUR_HOSTED_MANIFEST_ID',
  //       permanent: false,
  //     },
  //   ]
  // },
}

module.exports = nextConfig


