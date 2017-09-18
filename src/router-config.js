/**
 * Created by Administrator on 2017/9/12.
 */
import Login from './components/login.vue'
import Home from './components/home.vue'
import Table from './components/table.vue'
export default {
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            name:'菜单1',
            path:'/',
            component:Home,
            iconCls: 'el-icon-message',
            flag:true,
            children:[
                {
                    path:'/table',component:Table,name:'表单1'
                }
            ]
        },
        {
            name:'列表1',
            path:'/table',
            component:Table
        },
        {
            path:'*',
            redirect:'/login'
        },

    ]
}