<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div v-if="isLayoutPath" class="layout">
      <div class="layout-left">
        <SideBar class="sidebar"></SideBar>
      </div>
      <div class="layout-right">
        <HeaderComponents v-bind:user="profile" class="layout-header"></HeaderComponents>
        <div class="layout-content">
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
import { mapGetters, mapActions } from 'vuex'
import store from '@/store'

export default {
  name: 'app',
  data: function () {
    return {
      isLayoutPath: true
    }
  },
  store,
  components: {
    SideBar,
    HeaderComponents
  },

  computed: mapGetters({
    profile: 'profile'
  }),

  storeMethods: mapActions([
    'addToCart'
  ]),

  methods: {
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

.layout-left {
  height: 100%;
  min-width: 210px;
  max-width: 220px;
  overflow: hidden;
}

.sidebar {
}

.layout {
  display: flex;
  min-height: 875px;
}

.layout-right {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.layout-header {
  height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #e2e2e2;
}

.layout-content {
  flex: auto;
  min-height: 810px;
  padding: 20px;
  margin: 15px;
  background-color: #fff;
  overflow: hidden;
  display: block;
}
</style>
