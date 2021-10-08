<template>
  <div class="login">
    <div class="login_box">
      <h2>欢迎使用lx-standard-vue</h2>

      <ul>
        <li>
          <label for="username">用户名</label>
          <input id="username" v-model="formData.username" placeholder="请输入用户名">
        </li>
        <li>
          <label for="password">密码</label>
          <input id="password" v-model="formData.password" placeholder="请输入密码">
        </li>
        <li>
          <button @click="doLogin">
            登录
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
<%_ if (options.authenMode !== 'no') { _%>
import {sessions} from '@/utils/lx.utils.storage'
const authenField = process.env.VUE_AXIOS_AUTHEN
<%_ } _%>
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  <%_ if (options.authenMode !== 'no') { _%>
  beforeRouteEnter (to, from, next) {
    const authenToken = sessions.get(authenField)
    if (authenToken) sessions.remove(authenField)
    next()
  },
  <%_ } _%>
  methods: {
    doLogin () {
      if (!this.formData.username) return window.alert('用户名不能为空！')
      if (!this.formData.password) return window.alert('密码不能为空！')
      this.$api.user.login(this.formData)
        .then(({status, msg, data}) => {
          if (!status && msg) window.alert(msg)
          if (!data) return
          <%_ if (options.authenMode !== 'no') { _%>
          sessions.set(authenField, data.token)
          <%_ } _%>
          this.$router.push('/')
          setTimeout(() => window.alert('登录成功！'), 500)
        })
    }
  }
}
</script>

<style scoped>
.login { display: flex; justify-content: center; align-items: center; }
.login_box { margin-top: 80px; display: inline-block; text-align: center; border-radius: 10px; box-shadow: 0 1px 8px 1px rgba(0,0,0,0.15); }
.login ul, .login li { padding: 0; list-style: none; }
.login li { display: inline-flex; justify-content: center; align-items: center; width: 60%; height: 60px; }
.login li label { display: inline-block; width: 60px; color: #666; }
.login li input { flex: 1; padding: 0 6px; height: 36px; line-height: 36px; border-radius: 6px; border:  1px solid #cacaca; }
.login li button { width: 80%; height: 40px; border-radius: 6px; border: none; background-color: #41b883; color: #fff; font-size: 16px; }
.login li button:active { transform: translate(1px,2px); }
</style>
