import { getAllSlugs } from '@/server/modules/product/actions/productActions.js'
const baseUrl = process.env.BASE_URL

export default async function sitemap() {

  const fixedUrls = getFixedUrls()
  const dynamicUrls = await getDynamicUrls()

  return fixedUrls.concat(dynamicUrls)
}

function getFixedUrls() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ]
}

async function getDynamicUrls() {

  const slugs = await getAllSlugs()

  return slugs.map(slug => ({
    url: `${baseUrl}/productos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

}

