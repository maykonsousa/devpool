/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com', 
      'images.pexels.com',
      'firebasestorage.googleapis.com',
      'media.licdn.com',
    ],
  },
}

module.exports = nextConfig
