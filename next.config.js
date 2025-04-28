/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,      // pilnowanie błędów
    experimental: {
      serverActions: true       // WŁĄCZ koniecznie Server Actions jeśli używasz Next 14!
    },
    images: {
      domains: ['your-supabase-domain.supabase.co'] // jeśli chcesz ładować avatary itp.
    }
  }
  
module.exports = nextConfig;
  