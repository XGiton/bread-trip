<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="layout">
      <div class="sider">
        <SideBar></SideBar>
      </div>
      <div class="header">
        <div class="breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="headerRight">
          <Dropdown class="userInfo" width="200px">
            <div>
              <a href="javascript:void(0)">
                  肖志栋
                  <img class="avatar" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3641042797,3954402334&fm=58&bpow=1000&bpoh=750&u_exp_0=3454063693,3637635201&fm_exp_0=86"/>
                  <Icon type="arrow-down-b"></Icon>
              </a>
            </div>
            <DropdownMenu slot="list">
                <DropdownItem>退出账户</DropdownItem>
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
</template>

<script>
import SideBar from './components/SideBar'

export default {
  name: 'app',
  components: {
    SideBar
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

.header {
  height: 64px;
  line-height: 64px;
  width: 100%;
  /*display: flex;*/
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
}
.userInfo a .avatar {
  width: 50px;
  height: 50px;
  border-radius: 30px;
}
</style>
