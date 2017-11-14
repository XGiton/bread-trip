
import app from './App'
import utils from './utils'

export async function getProfile () {
  let profile = app.data.profile
  if (!utils.isEmptyDict(profile)) {
    return profile.toJS()
  }

  const res = await fetch('/api/user', {
    method: 'GET',
    credentials: 'same-origin'
  })
  const data = await res.json()
  if (res.status >= 400) {
  } else {
    app.methods.setProfile(data)
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
