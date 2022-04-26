/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['links.papareact.com']
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiZ2FycmV0dGpwcmluY2UiLCJhIjoiY2wyZjdoa3Q3MDd0NDNjcDZqNHhqZ2s4NyJ9.qfj80F4_LxEo4rm7uoE1uQ'
  }
}
