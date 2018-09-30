var login = (function(){

    return {
        init: function(ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            this.$tishi=document.querySelector(".denglu-tishi");
            this.$img=document.getElementById("img-tishi");
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn'];
            this.$usernameInp =   this.$ele['username'];
            this.$passwordInp =   this.$ele['password'];
            this.event();
        },
        event: function() {
            var _this = this;
            // 提交按钮
            this.$loginBtn.onclick = function() {
                // 发送ajax，验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('http://localhost:8080/Tingsir/dianshang/php/login.php', params);
            }

            _this.$usernameInp.onchange= function(){
  
                if(this.value==""){
                    _this.$usernameInp.onfocus=function(){
                        _this.$img.style.display="block";
                        document.body.onclick=function(e){
                            e=e||window.event;
                            var target=e.target||e.srcElement;
                            if(target.nodeName != "INPUT"){
                                _this.$img.style.display="none";
                            }
                        }
                    }
                    _this.$usernameInp.style.background="#ffffc5";
                    console.log(1);
                }
            }
        },
        loginSuccess: function(data) {
            if(data.code == 200) {
                document.cookie = "user-id=" + data.data.id;
                document.cookie = "token=" + data.data.token;
                localStorage.userImg = data.data.ataver;
                // location.href = 'manager.html';
                alert("登陆成功");
            } else {
                this.$tishi.style.display="block";
                // alert(data.msg);
            }
        }
    }

}())
