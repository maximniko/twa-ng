export interface Category {
  id?: number
  label: string
  title: string
  color: string //hex
  description: string
  icon: string
}

export const CATEGORY_MAX_ID = 6

export function categoryGenerator(id: number): Category {
  return {
    id: id,
    label: `T`,
    title: `Title ${id}`,
    color: colors[id % colors.length],
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum est inventore natus optio sequi! Atque dolorem eius facilis in ipsam iste molestias nam nisi non, nulla numquam quod vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum est inventore natus optio sequi! Atque dolorem eius facilis in ipsam iste molestias nam nisi non, nulla numquam quod vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum est inventore natus optio sequi! Atque dolorem eius facilis in ipsam iste molestias nam nisi non, nulla numquam quod vitae. ${id}`,
    icon: "building",
  }
}

const colors = [
  '#c05826',
  '#f3492b',
  '#3a635d',
  '#b5a41b',
  '#ecdb7b',
  '#d30c6c',
  '#b4ac7f',
  '#7147dc',
  '#c91c11',
]
