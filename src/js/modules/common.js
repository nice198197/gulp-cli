/*
 * @Author: xiongjian 
 * @Date: 2018-01-17 16:29:45 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-01-17 16:36:31
 */
layui.define(['jquery'], function(exports) { 
    'use strict';
    var $ = layui.jquery;
    // 定义模块
    var common = {
        // 网络请求
        request : function(param) {
            var _this = this;
            $.ajax({
                type        : param.method  || 'get',
                url         : param.url     || '',
                async       : param.isasync || false ,
                dataType    : param.type    || 'json',           
                data        : param.data    || '',
                success     : function(res) {
                    // 请求成功，显示数据和正确信息
                    if ("1" === res.status) {
                        typeof param.success === 'function' && param.success(res);                    
                    }
                    // 失败
                    else if ("0" === res.status) {
                        typeof param.error === 'function' && param.error(res);
                    }
                    // 异常
                    else if ("-1" === res.status) {
                        typeof param.error === 'function' && param.error(res);
                    }
                    // 没有登录状态，强制登录
                    else if ("10" === res.status) {
                        _this.doLogin();
                    }
                },
                //请求失败，显示404
                error : function(res) {
                    typeof param.error === 'function' && param.error(res);
                }
            });
        },
        // 获取url参数
        getUrlParam : function(name) {
            var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
            var result  = window.location.search.substr(1).match(reg);
            return result ? decodeURIComponent(result[2]) : null;
        }, 
        // 将秒转化为日期格式
        formatDuring : function(mss) {
            var days = parseInt(mss / (60 * 60 * 24));
            var hours = parseInt((mss % (60 * 60 * 24)) / (60 * 60));
            var minutes = parseInt((mss % (60 * 60)) / (60));
            var seconds = (mss % 60);
            return days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
        },
        // 统一登陆处理
        doLogin : function() {
            window.location.href = './user-login.html?redirect=' + encodeURIComponent(window.location.href);
        },
    };
    //输出接口
    exports('common', common);
}); 