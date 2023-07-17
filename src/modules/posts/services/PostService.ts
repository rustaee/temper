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

  moveDown(index: number): void {
    if (index < this._posts.length - 1) {
      const post = this._posts[index]
      this._posts[index] = this._posts[index + 1]
      this._posts[index + 1] = post
    }
  }

  moveUp(index: number): void {
    if (index > 0) {
      const post = this._posts[index]
      this._posts[index] = this._posts[index - 1]
      this._posts[index - 1] = post
    }
  }

  get posts(): Post[] {
    return this._posts
  }

  get loading(): boolean {
    return this._loading
  }
}
