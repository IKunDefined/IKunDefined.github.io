---
title: 使用Cordova打包移动端项目
date: 2019-12-11 11:22:41
tags:
---

因为公司最近的一个项目需要做成移动端App，开发上是用了Vue-cli构建的，查阅了一些文档，打算使用Cordova来打包移动端应用。

<!-- more -->

---

## 环境配置

### Cordova

  `npm i cordova -g`

  > 通过`cordova -v`查看cordova是否安装成功

### Java SE Development Kit

  [官网下载](https://www.oracle.com/technetwork/java/javase/downloads/index.html)

  `.dmg`文件安装后会自动配置好环境变量

  > 通过`java --version`查看jdk是否安装成功

### Android Studio

  [中文官网下载](http://www.android-studio.org/)

  进入软件，提示下载sdk，自动下载，下载完成后在`.bash_profile`中配置环境变量

  ```bash
  export ANDROID_HOME=./Library/Android/sdk

  PATH=${PATH}:$ANDROID_HOME/platform-tools
  PATH=${PATH}:$ANDROID_HOME/tools
  ```

  > 安装Android Studio是为了安装Android SDK，也可以单独安装Android SDK

  > 通过`adb --version`查看android sdk是否安装成功

## 创建项目

cordova create project-name

cordova platform

cordova platform add android --save

cordova run browser