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

  const removeActivitiesToIndex = (activity: Activity) => {
    console.log(activities.value)
    const index = activities.value.findIndex((a) => a.id === activity.id)
    activities.value.splice(0, index)
    saveActivities()
  }

  loadActivities()

  return {
    activities,
    loadActivities,
    addActivity,
    removeActivitiesToIndex
  }
}
