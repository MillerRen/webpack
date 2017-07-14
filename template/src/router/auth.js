// 让auth下的模块打包到一个chunk
const Auth = r => require.ensure([], () => r(require('@/views/Auth')), 'group-auth')
const Login = r => require.ensure([], () => r(require('@/views/Auth/Login')), 'group-auth')

const auth = {
  path: '/auth',
  name: 'auth',
  component: Auth,
  children: [{
    path: 'login',
    name: 'login',
    component: Login
  }]
}

export default auth
