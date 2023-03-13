import { SectionInterface } from 'interfaces/index/section-interface'

export const sectionData: SectionInterface[] = [
  {
    id: '1',
    level: 3,
    title: 'about',
    content: '1988年生まれ。HAL東京卒業後、専門学校東京テクニカルカレッジ・Webクリエータ実践科修了。',
    slug: '/about',
    link: 'aboutへ'
  },
  {
    id: '2',
    level: 3,
    title: 'skill',
    content: '言語は、PHP、C#、VB等での実務経験あり。\n当サイトは、Next.jsで開発している。',
    slug: '/skill',
    link: 'skillへ'
  },
  {
    id: '3',
    level: 3,
    title: 'blog',
    content: '学習した内容を整理し、備忘録として投稿。\n更新頻度については、kamaのみぞ知る。',
    slug: '/blog',
    link: 'blogへ'
  }
]