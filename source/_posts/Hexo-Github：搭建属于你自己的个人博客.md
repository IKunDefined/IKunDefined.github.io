---
title: Hexo+Github：搭建属于你自己的个人博客
date: 2018-08-29 20:21:50
categories: 总结
tags:
- 个人博客
- Hexo
- Github
---

这篇文章其实是我早先就写过的，只不过之前因为笔记文报废掉，但是自己的博客也没有经过备份，所以曾经写过的内容全部丢掉了。而最近想整理一下从前写过的内容，并且周围的小伙伴也有想要制作个人博客的欲望，所以就再次整理一下曾经写过的这篇文章。使用的平台是**Windows**。

<!-- more -->

***

## Hexo简介

> 快速、简洁且高效的博客框架

## 本机站点构建

通过Hexo建立本机的站点文件夹。

### 环境搭建

安装Hexo所依赖的环境以及Hexo本体。

#### [Node.js](http://nodejs.cn/)

进入Node.js官网，下载并安装Node.js。

#### Hexo

**在安装Node.js后**，进入命令行界面，通过命令安装Hexo。

`npm install -g hexo-cli`

在安装完Node.js和Hexo之后，我们可以通过在命令行输入版本检测命令来确认是否完成安装。

#### [Git](https://gitforwindows.org/)

进入Git for Windows官网，下载Git。

#### 安装确认

在完成安装过后，可以通过命令行对安装进行确认。

```bash
node -v
npm -v
hexo -v
git version
```

### 站点搭建

#### 本地站点构建

通过命令搭建本地博客的雏形。

`hexo init [filename]`

#### 运作本地站点

通过命令运行本地站点，并在本地默认的4000端口查看运行中的博客。

`hexo server`

`localhost:4000`

#### 站点文件夹构成

* source

资源文件夹，存储写作文章以及相关资源的位置。

* themems

主题文件夹，存储Hexo主题文件夹的位置。

* _config.yml

配置文件，用于配置个人站点。

#### 站点配置

* site

网站信息的相关配置。

* theme

网站主题的配置。

* deploy

上传站点的配置。

## 上传站点

### Github Pages服务

1. 注册[Github](https://www.github.com/)账号

2. 建立仓库

`yourname.github.io`

### 上传环境搭建

#### 配置git参数

`git config --global user.name "yourname"`

`git config --global user.email "youremail"`

#### 插件安装

安装hexo提供的基于Git的上传插件

`npm install hexo-deployer-git --save`

#### 配置文件设定

* type

* git

* repo

* https://github.com/yourname/yourname.github.io.git

#### 上传目标仓库

通过上传命令，将本地站点上传至Github，Github会自动将开通了Github Pages服务的仓库开放到互联网上，以供他人访问

`hexo d -g`

上传页面，并在上传前生成需要上传的页面

`hexo g -d`

生成上传所需要的页面后上传

`hexo clean`

清空先前生成的页面

## Markdown写作入门

### 新建文章

通过命令，我们可以在Hexo中建立一篇带有一定头部信息的文章。

`hexo new "文章名"`

### 头部信息

* title

* date

* tags

* categories

* updated

### Markdown语法

标题：`# 最大标题`

列表：`* 列表项`

引用：`> 引用内容`

粗体：`**粗体**`

斜体：`*斜体*`

<!-- 代码段：?? 怎么表示代码段？ -->

超链接：`[链接文本](url)`

图片资源：`[图片名称](url)`

***

经过上述的操作，通过Hexo搭建个人站点并且配合Github Pages服务将站点部署在互联网上的流程就已经圆满完成。

之后时不时地写作你的文章并且重复上传的操作就可以完成博客的更新了，是不是有点小激动呢。想当初我非常想要写博客却没有制作网站的功底，通过室友的介绍，用Hexo搭建完成博客并且上传第一篇文章时可是非常的兴奋呢！