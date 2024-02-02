/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.supabase.co',
                port: '',
            }
        ],
        formats: ['image/avif', 'image/webp']
    }
}

module.exports = nextConfig
