# 开发第一周任务
本周仅且仅有一个任务,就是熟悉网站结构:页面视觉结构和代码组织结构.
# 准备步骤
- 安装mongodb
 - `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10`
 - 此为一行代码`echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list`
 - `sudo apt-get update`
 - `sudo apt-get install -y mongodb-org`
- 启动mongodb数据库`sudo service mongod start`
- 克隆项目`git clone git@github.com:CUC-DEV/lab-site.git`
- 获取最新代码库`git fetch`
- 跟踪分支study `git checkout --track origin/study`
- 进入项目根目录输入`npm install`安装nodejs项目依赖
- 本地启动web服务器`node keystone`
- 浏览器验证http://localhost:3000

# 任务(每个人进入jira选取一个,拖拽到In progress栏中)
- 将顶部链接汉化,并修改左边logo,自行设计.(难)
- 修改底部信息栏(链接,介绍等所在的部分)about和最底部版权信息,修改为实验室网站真实信息.(易)
- 修改about页面的信息(除中间的4个成员介绍)(易)
- 修改about页面中4个成员介绍,修改为项目组开发人员真实信息.twitter链接改为微博链接(难)

# 提示
- 先查看项目目录结构,进入views/site看看任务相关的jade模板
- 某些任务的jade模板中引入其他jade,可能要在相应的jade中修改
- 某些页面信息,属于变量,在相应的路由中载入,如果需要修改,请查看相关的路由js文件
- 某些信心是公共的,可能不在页面路由而是在中间层注入