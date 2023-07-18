export interface Activity {
  id: string
  postId: number
  from: number
  to: number
  action: string
  state: number[] // Array of post ids
}
