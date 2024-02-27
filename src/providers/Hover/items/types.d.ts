interface HoverItem {
  word: string
  contents: ContentsItem[]
}

interface ContentsItem {
  add: 'markdown' | 'code' | 'text'
  value: string
}

export { HoverItem }
