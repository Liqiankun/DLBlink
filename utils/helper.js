const months = [
  '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
]
export const getYear = () => {
  const date = new Date()
  return date.getFullYear()
}

export const getMonth = () => {
  const date = new Date()
  return date.getMonth()
}

export const getChineseMonth = () => {
  const date = new Date()
  const month = date.getMonth()
  return months[month]
}
