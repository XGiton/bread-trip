
import app from './App'
import utils from './utils'
import co from 'co'

export function* getProfile () {
  let profile = app.data.profile
  if (!utils.isEmptyDict(profile)) {
    console.log('profile is not empty')
    return profile.toJS()
  }

  yield fetch('/api/user', {
    method: 'GET',
    credentials: 'same-origin'
  }).then((res) => {
    res.json().then((json) => {
      if (res.status >= 400) {
        console.log('get profile failed')
      } else {
        console.log('get profile success')
        app.methods.setProfile(json)
        profile = json
        console.log(json)
      }
    })
  })
  return profile
}

export function checkAuth () {
  let result = false
  console.log('0')
  co(getProfile()).then(
    (rsp) => {
      console.log('1')
      if (!utils.isEmptyDict(rsp)) {
        console.log('true')
        result = true
      } else {
        console.log('false')
        console.log(rsp)
        result = false
      }
    }
  )
  return result
}
