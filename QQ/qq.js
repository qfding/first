var swiper = (function () {
    var $Offer = document.getElementsByClassName('btn2');
    var $close = document.getElementsByClassName('btn1')[0];
    var $Text = document.getElementById('Text');
    var $smallbox1 = document.getElementsByClassName('smallbox1')[0];
    var $offer = $Offer[0];
    return {
        //初始化函数
        init: function () {
            this.event();
        },
        //事件处理程序
        event: function () {
            var _this = this;
            $offer.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                //输入文本
                var $Div = document.createElement('div');
                $Div.style.background = 'url(images/11.png) no-repeat right center';
                $Div.style.padding = '0 30px 0 0';
                $Div.style.overflow="hidden";
                var $div = document.createElement('div');
                $div.style.display = 'inline-block';
                $div.style.float="right";
                $div.style.backgroundColor = 'pink';
                $div.style.padding = '10px';
                $div.style.border = '1px solid #ccc';
                $div.style.borderRadius = '4px';
                $div.style.margin = '5px 0 0 0';
                $div.style.whiteSpace='pre-wrap';
                //回答文本
                var $Div2 = document.createElement('div');
                $Div2.style.background = 'url(images/12.png) no-repeat left center';
                $Div2.style.padding = '0 0 0 30px';
                $Div2.style.overflow="hidden";
                var $div2 = document.createElement('div');
                $div2.style.display = 'inline-block';
                $div2.style.float="left";
                $div2.style.backgroundColor = 'skyblue';
                $div2.style.padding = '10px';
                $div2.style.border = '1px solid #ccc';
                $div2.style.borderRadius = '4px';
                $div2.style.margin = '5px 0 0 0';
                $div2.style.whiteSpace='pre-wrap';
                var str=$Text.value;
                //获取人工智能文本
                var params = {
                    'key':'',
                    'info':"",
                    'userid':'12345678',
                    'method': 'post',
                   success: function(data) {
                    
                    $div2.innerHTML=data.text;
                }
                }
                
                sendAjax('http://www.tuling123.com/openapi/api?key=d4081ad86053472d94445e133a9fa070', params)

                //添加人工智能文本
                $div.innerHTML = str;
                // $div2.innerHTML="我也爱你";
                $Div.appendChild($div);
                $Div2.appendChild($div2);
                $smallbox1.appendChild($Div);
                $smallbox1.appendChild($Div2);
                $Text.value = '';
                $smallbox1.scrollTop=$smallbox1.scrollHeight-$smallbox1.clientHeight;


            }
            $Text.addEventListener('keydown', fn, false);
            function fn(ev) {
                var keyCode = ev.keyCode || ev.which;
                if (ev.ctrlKey) {
                    if (keyCode == 13) {
                        $offer.onclick(ev);
                        console.log(1);
                    }
                }
            }

        }

    }
}())
swiper.init()