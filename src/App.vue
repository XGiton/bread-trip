<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div v-if="isLayoutPath" class="layout">
      <div class="sider">
        <SideBar></SideBar>
      </div>
      <div class="rLayout">
        <div class="header">
          <div class="breadcrumb">
            <Breadcrumb>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem href="/">Components</BreadcrumbItem>
              <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div class="headerRight">
            <Dropdown class="userInfo" width="200px" @on-click="dropDownSelected">
              <div>
                <a href="javascript:void(0)">
                  <span class="username">肖志栋</span>
                  <img class="avatar" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3641042797,3954402334&fm=58&bpow=1000&bpoh=750&u_exp_0=3454063693,3637635201&fm_exp_0=86"/>
                  <Icon type="arrow-down-b"></Icon>
                </a>
              </div>
              <DropdownMenu slot="list">
                <DropdownItem name="profile">账户信息</DropdownItem>
                <DropdownItem name="signOut">退出账户</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            </Menu>
          </div>
        </div>
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

export default {
  name: 'app',
  data: function () {
    return {
      isLayoutPath: true,
      profile: {}
    }
  },
  components: {
    SideBar
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

.breadcrumb {
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  margin-left: 20px;
  float: left;
}

.headerRight {
  margin-right: 50px;
  font-size: 12px;
  float: right;
  white-space: nowrap;
  padding-left: 0px;
  justify-content: flex-end;
}

.userInfo {
}

.userInfo a {
  color: inherit;
  font-size: 13px;
}
.userInfo a .avatar {
  width: 40px;
  height: 40px;
  border-radius: 30px;
  vertical-align: middle;
  margin-left: 5px;
}
</style>
