import Vue from 'vue'
import Router from 'vue-router'

const chatList = resolve => require(['@/views/chatList/ChatList'], resolve)
const find = resolve => require(['@/views/find/Find'], resolve)
const friendList = resolve => require(['@/views/friendlist/FriendList'], resolve)
const my = resolve => require(['@/views/my/My'], resolve)


Vue.use(Router)

export default new Router({
  base: '/cwx/', 
  routes: [
    {path:'/ChatList',component:chatList},
    {path:'/Find',component:find},
    {path:'/FriendList',component:friendList},
    {path:'/My',component:my}
  ]
})
