import type { Post } from '../types/post.interface'
import axios from 'axios'

export default class PostService {
  private _posts: Post[] = []
  private _loading = false
  constructor() {}
  async getAllPosts(): Promise<void> {
    this._loading = true
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this._posts = response.data
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        this._loading = false
      })
  }

  get posts(): Post[] {
    return this._posts
  }
}
