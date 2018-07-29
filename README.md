# cordova-shell
使用cordova做一个壳,打包web项目
## 环境要求
* 安装JDK
~~~
官网：http://www.Oracle.com/technetwork/Java/javase/downloads/index.html
新建一个系统环境变量,变量名为：JAVA_HOME，变量值为JDK的安装路径
Path环境变量，在原始内容基础上加入%JAVA_HOME%\bin; %JAVA_HOME%\jre\bin
~~~
* 安装AndroidSDK
~~~
官网（可翻墙选择）：http://developer.android.com/sdk/index.html
不可翻墙选择：http://www.androiddevtools.cn/

下载Android SDK Tools
先找到SDK Tools,下载最新的版本即可。选择zip的，解压缩至目标路径位置即可
新建一个系统环境变量，变量名为：ANDROID_HOME，变量值为你的SDK安装路径
Path环境变量，在原始内容基础上加入%ANDROID_SDK_HOME%\platform-tools;%ANDROID_SDK_HOME%\tools

双击“SDK Manager”，启动SDK Manager
现在合适版本的Android-API 
~~~
* 安装Gradle
~~~
下载最新的Gradle压缩包
Gradle官网:https://gradle.org/
当前最新版本下载地址:https://gradle.org/releases/,下载binary-only即可
新建一个系统环境变量,变量名为：GRADLE_HOME，变量值为压缩包的解压位置
Path环境变量，在原始内容基础上加入%GRADLE_HOME%\bin
~~~
* 安装node.js
~~~
下载安装node.js,https://nodejs.org/en/
~~~