/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: "https://timneesarchitect.com/",
  description: `New Work Studio/Tim Nees Architects is an award-winning creative practice based in Aotearoa New Zealand. Tim Nees Architects New Work Studio architecture design residential architecture
    home design house plans custom home design architectural service residential architexts modern home design green architecture
    sustainable architecture sustainable design green design passive solar design passive solar architecture passive solar home design Christchurch Registered Architect
    New Zealand award winning awards houses residential passive off-grid beautiful NZIA Tim Nees Taylor's Mistake timber natural affordable competitive fee`,
  image: {
    url: "/Taylors Mistake House_South elevation_David Straight Photographer_1 copy.jpg",
    alt: "Taylor's Mistake House",
  },
  siteName: "Tim Nees Architects",
  twitter: {
    card: "summary_large_image",
  },
};

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest = {
  name: "Tim Nees Architect",
  short_name: "New Work Studio",
  description:
    "New Work Studio/Tim Nees Architects is an award-winning creative practice based in Aotearoa New Zealand.",
  theme_color: "#00000080",
  background_color: "#00000080",
  display: "minimal-ui",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
