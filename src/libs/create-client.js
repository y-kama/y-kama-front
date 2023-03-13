import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})

export async function getAllPostData(limit = 100) {
  try {
    const allPost = await client.get({
      endpoint: 'blog',
      queries: {
        fields: 'id,publishedAt,slug,title,category.name,content',
        orders: '-publishedAt',
        limit: limit,
      }
    })

    return allPost.contents
  } catch(err) {
    console.log('-- getAllPostData --')
    console.log(err)
  }
}

export async function getAllSlugData(limit = 100) {
  try {
    const allSlug = await client.get({
      endpoint: 'blog',
      queries: {
        fields: 'id,slug',
        orders: '-createdAt',
        limit: limit,
      }
    })

    return allSlug.contents
  } catch(err) {
    console.log('-- getAllSlugData --')
    console.log(err)
  }
}

export async function getPostData(slug) {
  try {
    const post = await client.get({
      endpoint: 'blog',
      queries: {
        filters: `slug[equals]${slug}`,
      }
    })

    return post.contents[0]
  } catch(err) {
    console.log('-- getPostData --')
    console.log(err)
  }
}