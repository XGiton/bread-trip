<template>
  <div id="login">
    <div class="loginContainer">
      <h2>账号登录</h2>
      <Form class="form" :model="loginForm">
        <FormItem
          prop="account" class="formItem" :error="loginRule.accountError"
          :show-message="loginRule.accountShowMsg">
          <Input v-model="loginForm.account" size="large" @on-focus="accountOnFocus" placeholder="请输入账号"></Input>
        </FormItem>
        <FormItem
          prop="password" class="formItem" :error="loginRule.passwordError"
          :show-message="loginRule.passwordShowMsg">
          <Input v-model="loginForm.password" size="large" @on-focus="passwordOnFocus" type="password" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem class="formItem">
          <Checkbox class="rememberCheckbox" v-model="loginForm.remember">下次自动登录</Checkbox>
          <a href="/" class="forgetPwd">忘记密码?</a>
          <Button type="primary" @click="login" long>登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'

export default {
  data () {
    return {
      loginForm: {
        account: '',
        password: '',
        remember: false

      },
      loginRule: {
        accountError: '',
        passwordError: '',
        accountShowMsg: false,
        passwordShowMsg: false
      }
    }
  },

  methods: {
    // 只能输入数字
    checkAccount: function () {
      this.loginForm.account = this.loginForm.account.replace(/[^0-9-]+/, '')
    },

    accountOnFocus: function () {
      this.loginRule.accountError = ''
      this.loginRule.accountShowMsg = false
    },

    passwordOnFocus: function () {
      this.loginRule.passwordError = ''
      this.loginRule.passwordShowMsg = false
    },

    login: function () {
      const account = this.loginForm.account.trim()
      const password = this.loginForm.password.trim()
      const remember = this.loginForm.remember

      if (!account) {
        this.loginRule.accountShowMsg = true
        this.loginRule.accountError = '请输入账号'
        return
      }
      if (!password) {
        this.loginRule.passwordShowMsg = true
        this.loginRule.passwordError = '请输入密码'
        return
      }

      const formData = new FormData()
      formData.append('email', account)
      formData.append('password', md5(password))
      formData.append('remember', remember ? 1 : 0)
      fetch('/api/user/login', {
        method: 'POST',
        body: formData
      }).then((res) => {
        res.json().then((json) => {
          if (res.status >= 400) {
            if (json.err === 1001) {
              this.loginRule.accountShowMsg = true
              this.loginRule.accountError = '账号不存在'
            } else if (json.err === 1002) {
              this.loginRule.passwordShowMsg = true
              this.loginRule.passwordError = '密码错误'
            }
          } else {
            this.$router.push('/')
          }
        })
      })
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
  max-width: 300px;
  padding-top: 10%;
  margin: auto;
  margin-bottom: 10%;
}

.form {
  margin-top: 40px;
}

.formItem {
  margin-top: 20px;
}

.rememberCheckbox {
  float: left;
}

.forgetPwd {
  float: right;
}
</style>
