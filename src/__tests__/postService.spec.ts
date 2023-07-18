import PostService from '@/modules/posts/services/PostService'
import axios from 'axios'
import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('postService', () => {
  let postService: PostService
  vi.mock('axios', async () => {
    const actual = await vi.importActual('axios')
    return {
      ...actual,
      get: vi.fn()
    }
  })
  beforeEach(() => {
    vi.clearAllMocks()
    postService = new PostService(() => {})
  })
  describe('getAllPost', () => {
    it('should fetch posts and update the _posts array', async () => {
      const axiosSpy = vi.spyOn(axios, 'get')

      await postService.getAllPosts()

      expect(axiosSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts')
    })

    it('should handle API error', async () => {
      vi.spyOn(axios, 'get').mockRejectedValueOnce(new Error('API Error'))

      await postService.getAllPosts()

      expect(postService.posts).toEqual([])
    })
  })
  describe('moveDown', () => {
    const mockAddActivity = vi.fn()
    const postService = new PostService(mockAddActivity)

    it('should move a post down', () => {
      //arrange
      const mockedPosts = [
        { id: 1, userId: 2, title: 'Post 1', body: 'Body 1' },
        { id: 2, userId: 2, title: 'Post 2', body: 'Body 2' },
        { id: 3, userId: 2, title: 'Post 3', body: 'Body 3' }
      ]
      postService['_posts'] = mockedPosts

      //act
      postService.moveDown(0)

      //assert
      expect(postService['_posts'][0]).toEqual({
        id: 2,
        userId: 2,
        title: 'Post 2',
        body: 'Body 2'
      })

      expect(mockAddActivity).toHaveBeenCalled()
    })
  })

  describe('swapPosts', () => {
    it('should swap two posts in the _posts array', () => {
      //arrange
      const mockedPosts = [
        { id: 1, title: 'Post 1', userId: 1, body: 'Body 1' },
        { id: 2, title: 'Post 2', userId: 1, body: 'Body 2' },
        { id: 3, title: 'Post 3', userId: 1, body: 'Body 3' }
      ]
      postService['_posts'] = mockedPosts

      //act
      postService['_swapPosts'](0, 2)

      // assert
      expect(postService.posts).toEqual([
        { id: 3, title: 'Post 3', userId: 1, body: 'Body 3' },
        { id: 2, title: 'Post 2', userId: 1, body: 'Body 2' },
        { id: 1, title: 'Post 1', userId: 1, body: 'Body 1' }
      ])
    })
  })
})
