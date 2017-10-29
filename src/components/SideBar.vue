<template>
  <div id="side-bar">
    <Row>
      <Col>
        <div class="logo">
        </div>
        <Menu theme="dark">
          <Submenu name="1">
            <template slot="title">
              <Icon type="home"></Icon>
              系统管理
            </template>
            <MenuItem name="1-1">用户管理</MenuItem>
            <MenuItem name="1-2">角色管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="android-bicycle"></Icon>
              Saas2.0
            </template>
            <MenuItem name="2-1">企查查</MenuItem>
            <MenuItem name="2-2">立即更新</MenuItem>
            <MenuItem name="2-3">实时搜索</MenuItem>
          </Submenu>
        </Menu>
      </Col>
    </Row>
    <br>
    <!-- <p>切换主题</p>
    <RadioGroup v-model="theme2">
      <Radio label="light"></Radio>
      <Radio label="dark"></Radio>
    </RadioGroup> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      theme2: 'light'
    }
  }
}
</script>

<style scoped>
</style>
