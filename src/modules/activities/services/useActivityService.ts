import { ref } from 'vue'
import type { Activity } from '../types/activity.interface'

export default function useActivityService() {
  const activities = ref<Activity[]>([])

  const loadActivities = () => {
    const data = localStorage.getItem('activities')
    activities.value = data ? JSON.parse(data) : []
  }

  const saveActivities = () => {
    localStorage.setItem('activities', JSON.stringify(activities.value))
  }

  const addActivity = (activity: Activity) => {
    activities.value.unshift(activity)
    saveActivities()
  }

  loadActivities()

  return {
    activities,
    loadActivities,
    addActivity
  }
}
