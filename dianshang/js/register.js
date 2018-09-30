var register = (function () {

    return {
        init: function (ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn'];
            this.$usernameInp = this.$ele['username'];
            this.$passwordInp = this.$ele['password'];
            this.$nextpasswordInp = this.$ele['password-second'];
            this.$mimaImg=document.getElementById("mima-img");
            this.$mimacuo=document.getElementById("mima-cuo");
            this.event();
        },
        event: function () {
            var _this = this;
            // 注册按钮
            this.$loginBtn.onclick = function () {
                // 发送ajax，验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function (data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('http://localhost:8080/Tingsir/dianshang/php/register.php', params);
            }
            this.$usernameInp.onchange = function () {
                var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
                var $email = _this.$usernameInp.value;
                var $div = document.getElementById("cuowu-zi");
                if (reg.test($email)) {
                    console.log(1);
                } else {
                    $div.style.display = "block";
                    // _this.$usernameInp.style.bordercolor="#black";
                }
                function fn() {
                    $div.style.display = "none";
                }
                this.addEventListener("focus", fn, false);
                var params = {
                    data: {
                        username: _this.$usernameInp.value
                    },
                    success: function (data) {
                        data = JSON.parse(data);
                        _this.checkName(data);
                    }
                }
                sendAjax('http://localhost:8080/Tingsir/dianshang/php/check_username.php', params);
            }
            this.$passwordInp.onfocus=function(){
                _this.$mimaImg.style.display="block";
                function f1() {
                    _this.$mimaImg.style.display = "none";
                }
                this.addEventListener("blur", f1, false);
            }
            this.$nextpasswordInp.onchange=function(){
                var $mimaOne=_this.$passwordInp.value;
                var $mimaTwo=_this.$nextpasswordInp.value;
                if($mimaOne != $mimaTwo){
                    _this.$mimacuo.style.display = "block";
                }
            }
            

        },
        checkName: function (data) {
            if (data.code == 200) {
                // 用户名称不存在
                // console.log('bucunzai')
            } else {
                // 用户名称存在
                // console.log('cunzai')
            }
        },
        loginSuccess: function (data) {
            if (data.code == 200) {

                location.href = 'index.html';
            } else {
                alert(data.msg);
            }
        }
    }

}())
