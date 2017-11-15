
import utils from './utils'
import store from '@/store'

export async function getProfile () {
  let profile = store.state.profile
  if (!utils.isEmptyDict(profile)) {
    return profile
  }

  const res = await fetch('/api/user', {
    method: 'GET',
    credentials: 'same-origin'
  })
  const data = await res.json()
  if (res.status >= 400) {
  } else {
    store.commit('setProfile', data)
    profile = data
  }
  return profile
}

export async function checkAuth () {
  let result = false
  const profile = await getProfile()
  if (!utils.isEmptyDict(profile)) {
    result = true
  } else {
    result = false
  }
  return result
}
