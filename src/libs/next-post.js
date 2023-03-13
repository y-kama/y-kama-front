export function NextPost(allSlugData, currentSlug) {
  let nextPostData
  const index = allSlugData.findIndex(
    ({ slug }) => slug === currentSlug
  )
  const addLink = '次の記事へ'
  const addClass = 'aside_right'

  index === 0 ?
  (
    nextPostData = { id: '', slug: '' },
    nextPostData.addLink = '',
    nextPostData.addClass = ''
  )
  :
  (
    nextPostData = allSlugData[index - 1],
    nextPostData.addLink = addLink,
    nextPostData.addClass = addClass
  )

  return [nextPostData]
}