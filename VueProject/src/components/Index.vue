<template>
    <div>
      <Row type="flex" align="middle" justify="end">
        <Col style="top:60px;" span="13"><h1>一个导航栏路由Demo</h1></Col>
      </Row>
      <Row type="flex" align="middle" justify="end">
        <Col span="12">
          <Model></Model>
        </Col>
        <Col span="12">
          <Card class="card_style">
              <p slot="title">登录</p>
              <div style="text-align:center">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="user">
                      <Input type="text" placeholder="Username" v-model="formInline.user"
                          clearable style="width: 200px">
                          <Icon type="ios-contact" slot="prefix" />
                      </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" clearable v-model="formInline.password" placeholder="Password" style="width:200px">
                            <Icon type="ios-lock" slot="prefix" />
                        </Input>
                    </FormItem>
                    <Radio v-model="single" style="width:200px;text-align:left;margin-bottom:10px">记住我</Radio>
                    <FormItem>
                        <Button type="primary" style="width:200px" @click="handleSubmit('formInline')">登录</Button>
                        <p style="width:200px;text-align:right;"><a>忘记密码</a></p>
                    </FormItem>
                </Form>
              </div>
          </Card>
        </Col>
      </Row>
    </div>
</template>
<style>
    p{
      padding: 0;
      margin: 0;
      color:#3399ff;
    }
    h1{
      font-size: 48px;
      color: #FFF;
    }
    body{
      background: url('../assets/imgs/background.png');
      background-position: center center;
      background-attachment: fixed;
      background-size: cover;
    }
    .card_style{
      width: 320px;
      top: 100px;
    }
</style>

<script>
import qs from 'qs'
import Model from './frame/models/Model'
export default {
  name: 'Index',
    components: {Model},
    data () {
    return {
      single: false,
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      var that = this
      let postData = qs.stringify({
        username: this.formInline.user,
        password: this.formInline.password
      })
      this.$axios.post('/auth/login.do', postData)
        .then(function (response) {
          if (response.data.status === 'true') {
            that.$Message.success(response.data.message)
            window.location.href = '/home'
          } else {
            that.$Message.warning(response.data.message)
          }
        })
        .catch(function () {
          that.$Message.error('登录失败')
        })
    }
  }
}
</script>
