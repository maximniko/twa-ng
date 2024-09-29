export interface Category {
  id: number
  alias: string
  title: string
  exploit: string
  description: string
  icon: string
}

export const CATEGORY_MAX_ID = 6

export function categoryGenerator(id: number): Category {
  return {
    id: id,
    alias: `title-${id}`,
    title: `Title ${id}`,
    exploit: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum est inventore natus optio sequi! Atque dolorem eius facilis in ipsam iste molestias nam nisi non, nulla numquam quod vitae. ${id}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum est inventore natus optio sequi! Atque dolorem eius facilis in ipsam iste molestias nam nisi non, nulla numquam quod vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum est inventore natus optio sequi! Atque dolorem eius facilis in ipsam iste molestias nam nisi non, nulla numquam quod vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum est inventore natus optio sequi! Atque dolorem eius facilis in ipsam iste molestias nam nisi non, nulla numquam quod vitae. ${id}`,
    icon: "building",
  }
}
