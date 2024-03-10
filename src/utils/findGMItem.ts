import { GMItem } from '../items/types'

const findGMItem = (items: GMItem[], path: string[]): GMItem | undefined => {
  if (path.length === 0) {
    return
  }

  for (const item of items) {
    if (item.label === path[0]) {
      if (path.length === 1) {
        return item
      }
      if (item.subItems) {
        return findGMItem(item.subItems, path.slice(1))
      }
    }
  }
}

export default findGMItem
