#项目初始化步骤

1、安装nodejs环境,推荐使用v4.0以上版本
    下载地址 : https://nodejs.org/download/release/

2、全局安装gulp 
    命令: (sudo) npm install -g gulp

3、在项目根目录执行npm初始化
    命令: npm install (--registry=https://registry.npm.taobao.org)

4.启动项目
    开发模式: npm run dev
    生产模式: npm run build

#项目目录结构说明
1、build为gulp在开发环境和生成环境的详细配置文件夹

2、dist为项目打包文件夹

3、src为项目源码文件夹
    3.1、assets为第三方资源文件夹（此项目主要使用layui,并且使用它的模块化方案，具体参照http://www.layui.com/）
    3.2、css为stylus编译后的文件夹
    3.3、html为页面文件夹
    3.4、images为图片资源文件夹
    3.5、js为js文件夹
        3.5.1、modulesConfig.js为项目模块配置文件
        3.5.2、modules为项目模块的封装文件夹
        3.5.3、其他js为相应页面的js文件
    3.6、stylus为stylus放置的文件夹
4、node_modules为放置依赖的文件夹（npm install生成，按照package.json的配置生成依赖）

5、.gitignore（名字不可更改）配置不提交到github的文件

6、gulpfile.js为gulp主文件（名字不可更改）

7、package.json为管理本地npn包的文件（npm init生成）