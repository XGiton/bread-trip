<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div v-if="isLayoutPath" class="layout">
      <div class="sider">
        <SideBar></SideBar>
      </div>
      <div class="rLayout">
        <HeaderComponents v-bind:user="profile" class="header"></HeaderComponents>
        <div class="content">
          <router-view/>
        </div>
      </div>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import HeaderComponents from './components/Header'

export default {
  name: 'app',
  data: function () {
    return {
      isLayoutPath: true,
      profile: {}
    }
  },
  components: {
    SideBar,
    HeaderComponents
  },

  methods: {
    setProfile: function (profile) {
      this.profile = profile
    },

    getProfile: function (profile) {
      return this.profile
    },

    loggedIn: function () {
      if (this.profile) {
        return true
      }
      return false
    },

    dropDownSelected: async function (name) {
      if (name === 'signOut') {
        const res = await fetch('/api/user/logout', {
          method: 'POST',
          credentials: 'same-origin'
        })
        await res.json()
        if (res.status >= 400) {
        } else {
          this.$router.push('/sign-in')
        }
      } else if (name === 'profile') {
        console.log('redirect to profile page')
      }
    },

    checkLayoutPath: function (path) {
      const noLayoutPaths = [
        '/sign-in'
      ]
      if (RegExp(noLayoutPaths.join('|')).test(path)) {
        this.isLayoutPath = false
      } else {
        this.isLayoutPath = true
      }
    }
  },

  created: function () {
    const curPath = this.$route.path
    this.checkLayoutPath(curPath)
  },

  watch: {
    $route: function () {
      const curPath = this.$route.path
      this.checkLayoutPath(curPath)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sider {
  height: 100%;
  width: 200px;
  overflow: hidden;
}

.layout {
  display: flex;
}

.rLayout {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.header {
  height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #e2e2e2;
}
</style>
