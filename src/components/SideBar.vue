<template>
  <div id="side-bar">
    <div class="logContainer">
      <div class="logo">
        <a href="#">工具箱</a>
      </div>
    </div>
    <div class="sideBarContainer">
      <Row>
        <Col>
          <Menu theme="dark" width="100%" class="sidebarText" @on-select="onSelect">
            <Submenu name="1">
              <template slot="title">
                <Icon type="home"></Icon>
                系统管理
              </template>
              <MenuItem name="userManage" class="sidebarText">用户管理</MenuItem>
              <MenuItem name="roleManage" class="sidebarText">角色管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="android-bicycle"></Icon>
                Saas2.0
              </template>
              <MenuItem name="2-1" class="sidebarText">企查查</MenuItem>
              <MenuItem name="2-2" class="sidebarText">立即更新</MenuItem>
              <MenuItem name="2-3" class="sidebarText">实时搜索</MenuItem>
            </Submenu>
          </Menu>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      theme2: 'light'
    }
  },
  methods: {
    onSelect: function (name) {
      if (name === 'userManage') {
        console.log('redirect to user manage page')
      } else if (name === 'roleManage') {
        this.$router.push('/roles')
      }
    }
  }
}
</script>

<style scoped>
.logContainer {
  background: #1f4064;
  padding: 16px;
}

.logo {
  height: 32px;
  background: #333;
  border-radius: 6px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
}

.logo a {
  line-height: 32px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
}

.sideBarContainer {
  /*padding-bottom: calc(100% - 64px);*/
}

.sidebarText {
  font-size: 13px;
}
</style>
