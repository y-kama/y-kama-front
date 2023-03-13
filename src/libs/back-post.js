export function BackPost(allSlugData, currentSlug) {
  let backPostData
  const index = allSlugData.findIndex(
    ({ slug }) => slug === currentSlug
  )
  const postNum = allSlugData.length
  const addLink = '前の記事へ'
  const addClass = 'aside_left'

  index + 1 === postNum ?
  (
    backPostData = { id: '', slug: '' },
    backPostData.addLink = '',
    backPostData.addClass = ''
  )
  :
  (
    backPostData = allSlugData[index + 1],
    backPostData.addLink = addLink,
    backPostData.addClass = addClass
  )

  return [backPostData]
}