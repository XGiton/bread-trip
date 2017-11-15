<template>
  <div id="header">
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
            <span class="username">{{ user.username }}</span>
            <img class="avatar" :src="user.avatar_url || defaultAvatar"/>
            <Icon type="arrow-down-b"></Icon>
          </a>
        </div>
        <DropdownMenu slot="list">
          <DropdownItem name="profile">账户信息</DropdownItem>
          <DropdownItem name="signOut">退出账户</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script>
import defaultAvatar from './../assets/default-avatar.png'

export default {
  name: 'header',
  props: [
    'user'
  ],
  data: function () {
    return {
      defaultAvatar
    }
  },
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
      }
    }
  }
}
</script>

<style scoped>
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
  width: 35px;
  height: 35px;
  border-radius: 50%;
  vertical-align: middle;
  margin-left: 10px;
}
</style>
