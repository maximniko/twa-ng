export interface Category {
  id?: number
  label: string
  title: string
  description: string
}

export const CATEGORY_MAX_ID = 6

export function categoryGenerator(id: number): Category {
  return {
    id: id,
    label: `T`,
    title: `Title ${id}`,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum est inventore natus optio sequi! Atque dolorem eius facilis in ipsam iste molestias nam nisi non, nulla numquam quod vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum est inventore natus optio sequi! Atque dolorem eius facilis in ipsam iste molestias nam nisi non, nulla numquam quod vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum est inventore natus optio sequi! Atque dolorem eius facilis in ipsam iste molestias nam nisi non, nulla numquam quod vitae. ${id}`,
  }
}
