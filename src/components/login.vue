<template>
    <div id="Login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm login-container" :label-position="labelPosition">
            <h3 class="title">系统登录</h3>
            <el-form-item label="用户名" prop="username">
                <el-input  v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
            <el-form-item style="width:100%;">
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                labelPosition:'left',
                ruleForm: {
                    username:'',
                    password:'',
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.ruleForm.username==='1'&&this.ruleForm.password==='1'){
                            alert('登陆成功')
                        }
                        else{
                            this.erroropen();
                        }
//                        this.$http.get('src/assets/data.json').then(function (res){
//                            console.log(res.data.user);
////                            this.$router.push({path:'/'})
//                        },function () {
//                            console.log('获取数据失败')
//                        });

                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            erroropen() {
                this.$message({
                    showClose: true,
                    message: '用户名或密码错误',
                    type: 'error'
                });
            }
        }
    }
</script>

<style>
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .title {
        margin: 0 auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .remember {
        margin: 0 0 35px 0;
    }

</style>