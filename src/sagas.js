
import app from './App'
import utils from './utils'

export function* getProfile () {
  let profile = app.data.profile
  if (!utils.isEmptyDict(profile)) {
    console.log('profile is not empty')
    return profile.toJS()
  }
  fetch('/api/user', {
    method: 'GET'
  }).then((res) => {
    res.json().then((json) => {
      if (res.status >= 400) {
        console.log('get profile failed')
      } else {
        app.methods.setProfile(json)
      }
    })
  })
  profile = app.data.profile
  return profile.toJS()
}

export function* checkAuth () {
  console.log('check...')
  const profile = yield * getProfile()
  console.log('profile:')
  console.log(profile)
  if (profile) {
    return true
  } else {
    return false
  }
}
