/*
 * @Author: xiongjian 
 * @Date: 2018-01-17 16:25:25 
 * @Last Modified by: xiongjian
 * @Last Modified time: 2018-01-17 16:32:17
 */
// 配置layui加载组件目录模块
// base参数表示我们项目模块的保存目录
// extend里面就来定义我们封装的模块名
layui.config({
    base: '/js/modules/'  
}).extend({ 
    common: 'common',
});