export interface IPost {
  userId: number
  id: number
  title: string
  body: string
  author?: string
}

export interface IAuthor {
  id: number
  name: string
}
