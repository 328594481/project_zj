<template>
    <div id="home">
        <div class="header">
            <div class="header_logo">经侦平台</div>
            <div class="header_bar"></div>
            <div class="header_user">王某某</div>
        </div>
        <el-row class="container">
            <el-col :span="4" class="menu">
                <el-menu default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened router>
                    <div v-for="(item,index) in $router.options.routes" v-if="item.flag==true">
                        <el-submenu :index="index+''">
                            <template slot="title" ><i :class="item.iconCls"></i>{{item.name}}</template>
                            <el-menu-item-group>
                                <el-menu-item v-for="child in item.children" :index="child.path">{{child.name}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </div>
                    <el-menu-item index="1"><i class="el-icon-menu"></i>导航二</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="20">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created(){
//            console.log(this.$router.options.routes);
        }
    }
</script>

<style>
    .menu{
        flex: 0 0 230px;
        width: 230px;
    }
    .container{
        display: flex;
    }
    /*<!--顶部条-->*/
.header{
    display: flex;
    background: #0175cf;
}
.header .header_logo{
    /*background: url("../assets/logo.png") no-repeat;*/
    flex:0 0 0 230px;
    width: 230px;
    height: 60px;
    background-size: contain;
    line-height: 60px;
    font-size: 30px;
    color:#fff;
}
.header .header_bar{
    flex: 1;
}
.header .header_user{
    flex:0 0 100px;
    font-size: 24px;
    color:#fff;
    line-height: 60px;
}

</style>