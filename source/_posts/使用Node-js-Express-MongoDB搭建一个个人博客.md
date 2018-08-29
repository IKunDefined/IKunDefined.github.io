---
title: 使用Node.js+Express+MongoDB搭建一个个人博客【更新中】
date: 2018-08-21 14:54:29
categories: 总结
tags:
- Node.js
- Express
- MongoDB
---

最近开始正式着手使用Node.js+Express+MongoDB开始搭建自己的个人博客了，主要参考的教程是腾讯课堂中的某公开课。

在经历了一些Node.js和Express概念上的理解和学习之后，总算是有点儿入了门的感觉，虽说还不是很清楚具体应该怎么做，不过大致的流程在心里已经有了底。接下来就跟着这个视频教程好好的过一遍。

<!-- more -->

***

[参考教程](https://ke.qq.com/course/185893)

[github](https://github.com/IKunDefined/Blog-of-IKunDefined)

***

## 环境搭建

### 基础环境构建

* [Node.js](http://nodejs.cn/download/)

* [MongoDB](https://www.mongodb.com/download-center#community)

* 确认环境是否安装完成

    ```bash
    node -v
    mongod -v
    ```

### 生产环境构建

1. 初始化node仓库

    ```bash
    npm init blogname
    cd blogname
    ```

2. 安装相关工具包

        express      web框架
        swig         模板引擎
        body-parser  解析post请求数据
        cookies      读写cookie
        markdown     解析markdwon语法
        mongoose     操作mongodb数据

    ```bash
    npm install --save express swig body-parser cookies markdown mongoose
    ```

3. 确认项目架构

        - db                   数据库
        - modules              模型模块
        - node_modules         Node工具模块
        - public               静态资源
        - routers              路由模块
        - views                视图模块
        - schemas              数据模块
        - app.js               入口文件
        - package.json         npm仓库配置
        - package-lock.json    新版本npm仓库配置

***

## 架构分析

### 模块分离

* 前端模块

    - main.js

            /     首页
            /view 内容页

    - api.js

            /register     用户注册
            /login        用户登录
            /comment      评论获取
            /comment/post 评论提交

* 后端模块

    - admin.js

        - 用户管理

                /category        分类列表
                /category/add    分类添加
                /category/edit   分类修改
                /category/delete 分类删除

        - 文章内容管理

                /article        文章列表
                /article/add    文章添加
                /article/edit   文章修改
                /article/delete 文章删除

        - 评论内容管理

                /comment        评论列表
                /comment/delete 评论删除

### 开发顺序

* 功能模块

    1. 用户
    2. 栏目
    3. 内容
    4. 评论

* 编码顺序

    1. 数据存储
    2. 功能逻辑
    3. 页面展示

***

## 基本内容开发

### app.js

```js
// 引入模块
var express = require("express");
var swig = require("swig");

// 创建express应用
var app = express();

// 配置模板
app.engine("html", swig.renderFile);
app.set("views", "./views");
app.set("view engine", "html");
swig.setDefaults({cache: false});

// 静态路由配置
app.use("/public", express.static(__dirname + "/public"));

// 动态路由配置
app.use("/", require("./routers/main"));

// 监听端口
app.listen(3000);
```

### main.js

```js
var express = require("express");
var router = express.Router();

router.use("/", function(req, res, next){
    res.render("index");
});
```

### index.html
因为之前我就有制作过个人主页，所以有事先准备好的页面使用，就直接把这页面搬到`views`文件中就可以了。
同时也要在静态资源的css文件夹中增加样式，还有首页用到的相关图片。即在`public`文件夹下增加`css`文件夹和`images`文件夹，并且增加相关文件。因此在`index.html`中还需要修改静态资源的路径。

### 数据库

* 建立与开启

    ```bash
    mongod --dbpath="数据库文件夹地址"
    ```

* 连接数据库

    在app.js中添加以下代码

    ```js
    var mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost:27017/blogfilename", {useNewUrlParser: true}, function(err){
        if(err){
            console.log("数据库连接失败！");
        }else{
            console.log("数据库连接成功！");
            app.listen(3000);
            console.log("服务器开始运行！");
        }
    });
    ```

文件夹内容分变动

        |- db      数据库
        |   |- dbfile
        |- public  静态路由
        |   |- css
        |   |- images
        |- routers 动态路由
        |   |- main.js
        |- views   模板
        |   |- index.html
        |- app.js  入口

***

## 注册登录模块开发

### app.js

```js
var bodyParser = require("body-parser");
```

### index.html

因为在之前的页面制作中，我没有为自己的页面制作用户的注册、登录和欢迎模块，所以这一次要在首页中增加相关的模块，并且在静态文件中添加相关的css样式。

```html
<!-- 注册模块 -->
<div class="signup-box">
    <!--
    用户名：
    密码：
    确认密码：
    注册
    -->
</div>

<!-- 登录模块 -->
<div class="login-box">
    <!--
    用户名：
    密码：
    登录
    -->
</div>

<!-- 欢迎模块 -->
<div class="welcome-box">
    <!--
    欢迎信息
    注销
    -->
</div>
```

***

081822更新

