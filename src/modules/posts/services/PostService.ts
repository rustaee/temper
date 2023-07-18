import type { Post } from '../types/post.interface'
import axios from 'axios'
import type { Activity } from '@/modules/activities/types/activity.interface'

export default class PostService {
  private _posts: Post[] = []
  private _loading = false

  private _addActivity: (activity: Activity) => void
  constructor(addActivity: (activity: Activity) => void) {
    this._addActivity = addActivity
  }

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
    //If it's not the last one
    if (index < this._posts.length - 1) {
      const post = this._posts[index]
      this._swapPosts(index, index + 1)
      this._addActivity({
        postId: post.id,
        from: index,
        to: index + 1,
        action: 'down',
        state: this._posts.map((post) => post.id)
      })
    }
  }

  moveUp(index: number): void {
    //If it's not the first one
    if (index > 0) {
      const post = this._posts[index]
      this._swapPosts(index, index - 1)
      this._addActivity({
        postId: post.id,
        from: index,
        to: index - 1,
        action: 'up',
        state: this._posts.map((post) => post.id)
      })
    }
  }

  private _swapPosts(index1: number, index2: number): void {
    const post = this._posts[index1]
    this._posts[index1] = this._posts[index2]
    this._posts[index2] = post
  }

  get posts(): Post[] {
    return this._posts
  }

  get loading(): boolean {
    return this._loading
  }
}
