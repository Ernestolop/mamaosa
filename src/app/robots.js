
const baseUrl = process.env.BASE_URL

export default function robots() {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}