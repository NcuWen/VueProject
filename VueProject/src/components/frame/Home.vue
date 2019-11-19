<template>
  <div class="layout" id="home">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%',height:'60px'}">
        <Menu mode="horizontal" theme="dark">
          <div class="layout-logo">
            <a>授权管理系统</a>
          </div>
          <div id="menuItem">
            <MenuItem name="authorization" style="font-size:16px;">
              <router-link to="/home/management/authorization" active-class="active">
                <div v-on:click="say('授权管理')">
                  <b>
                    <i class="iconfont icon-shouquanguanli"/>
                  </b> 授权管理
                </div>
              </router-link>
            </MenuItem>
            <MenuItem name="product" style="font-size:16px">
              <router-link to="/home/management/product" active-class="active">
                <div v-on:click="say('产品管理')">
                  <b>
                    <i class="iconfont icon-chanpinguanli"/>
                  </b> 产品管理
                </div>
              </router-link>
            </MenuItem>
            <MenuItem name="user" style="font-size:16px">
              <router-link to="/home/management/user" active-class="active">
                <div v-on:click="say('用户管理')">
                  <b>
                    <i class="iconfont icon-yonghuguanli"/>
                  </b> 用户管理
                </div>
              </router-link>
            </MenuItem>
          </div>
          <div class="layout-nav">
            <MenuItem name="own" style="font-size:16px">
              <router-link to="/home/settings/person" active-class="active">
                <div v-on:click="say('个人信息')">
                  <b>
                    <i class="iconfont icon-gerenxinxi"/>
                  </b> 个人信息
                </div>
              </router-link>
            </MenuItem>
            <MenuItem name="password" style="font-size:16px">
              <router-link to="/home/settings/password" active-class="active">
                <div v-on:click="say('密码重置')">
                  <b>
                    <i class="iconfont icon-xiugaimima"/>
                  </b> 密码重置
                </div>
              </router-link>
            </MenuItem>
            <MenuItem name="logout" style="font-size:16px">
              <b>
                <i class="iconfont icon-dengchu"/>
              </b> 注销登录
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Layout :style="{padding: '0 24px 24px',marginTop:'100px', overflow:'auto'}">
          <Content ref="homePage"
            :style="{padding: '24px', background: '#fff'}">
              <router-view></router-view>
          </Content>
          <Footer class="layout-footer-center">@By ncuwen</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<style scoped>
html,
body {
  overflow: hidden;
}

a {
  color: #c0c0c0;
}

a:hover {
  color: #fff;
}

.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100%;
}

.layout-logo {
  width: 200px;
  height: 30px;
  float: left;
  padding: 0;
  top: 15px;
  left: 0px;
  vertical-align: middle;
  color: #fff;
  font-size: 24px;
}

.layout-logo a {
  color: #fff;
}

.layout-nav {
  float: right;
  width: auto;
  margin: 0 auto;
  margin-right: 20px;
}

.active {
  color: #3480cb;
}

.active:hover {
  color: #5baaf0;
}

.default {
  color: #ffffff;
}
</style>

<script>
export default {
  data() {
    return {
      seen: true,
      bread: '',
      clientHeight: 600
    }
  },
  methods: {
    say: function(message) {
      this.seen = false
      this.bread = message
    },
    changeFixed(clientHeight) {
      // 动态修改样式
      this.$refs.homePage.$el.style.minHeight = clientHeight + 'px'
    },
    initHeight() {
      // 获取浏览器可视区域高度
      this.clientHeight = window.innerHeight - 194
      // console.log($(document).height());//浏览器可视区域对象宽度
      window.onresize = () => {
        // 当窗口或框架发生改变时触发
        this.clientHeight = window.innerHeight - 194
      }
    }
  },
  mounted() {
    this.initHeight()
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function() {
      this.changeFixed(this.clientHeight)
    }
  },
  components: {name: 'Home'}
}
</script>
