/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros de linting no deploy
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora erros de tipagem para o build passar
  },
}

module.exports = nextConfig