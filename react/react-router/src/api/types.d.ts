export interface Post {
  id: number,
  title: string,
  metadescription: string,
  body: string,
  category: string,
  subcategory: string
}

export interface Category {
  id: string,
  name: string,
  subcategories: Array<string>
}