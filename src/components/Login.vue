<template>
  <div id="login">
    <div class="loginContainer">
      <h2>账号登录</h2>
      <Form class="form" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input v-model="formInline.account" size="large" maxlength=11 placeholder="请输入账号"></Input>
        </FormItem>
        <FormItem prop="password">
          <Input v-model="formInline.password" size="large" type="password" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('login')" long>登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        account: '',
        password: ''
      },
      ruleInline: {
        account: [
          { required: true, message: '请填写账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped>

h2 {
  margin-top: 30px;
  margin-bottom: 12px;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
}

.loginContainer {
  max-width: 360px;
  padding-top: 10%;
  margin: auto;
  margin-bottom: 10%;
}

.form {
  margin-top: 40px;
}
</style>
