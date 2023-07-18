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
        id: Date.now().toString(),
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
        id: Date.now().toString(),
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

  async timeTravel({
    allActivities,
    destinationActivity
  }: {
    allActivities: Activity[]
    destinationActivity: Activity
  }): Promise<void> {
    // this._posts = destinationActivity.state.map((id) => this._posts.find((post) => post.id === id)!)
    //The above  approach is to show only the destination state

    /*
    The following approach is to show all the states from the beginning to the destination so feels more
    we want 50ms delay between each state. since setTimeout is async we need to use await. otherwise all the states will be shown at once after 50ms
    */
    const destinationIndex = allActivities.findIndex(
      (activity) => activity.id === destinationActivity.id
    )

    for (let i = 0; i <= destinationIndex; i++) {
      const activity = allActivities[i]
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          this._posts = activity.state.map((id) => this._posts.find((post) => post.id === id)!)

          resolve()
        }, 50)
      })
    }
  }

  get posts(): Post[] {
    return this._posts
  }

  get loading(): boolean {
    return this._loading
  }
}
