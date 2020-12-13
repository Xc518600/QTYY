描述
一个使用 Python 语言写的薅羊毛脚本仓库，支持 github action 和 linux/windows virtual private server

部署方式
注意：所有脚本任务都是未启用并且默认不发消息推送，请自行根据自身需求设置，配置文件采用 yaml 语法编写（注意空格），建议使用文本编辑器填写配置，以防格式错误！ 最好写完配置文件后在在线检验yaml语法检验一下 yaml 语法是否规范，当然你可以百度 Google 其他的在线检验网站。

linux/windows virtual private server
如果你没有安装 git ，那么运行 apt-get install git -y(Ubuntu/Debian) 或者 yum install git -y(Centos) 根据你的系统选择对应的命令
git clone https://github.com/TNanko/Scripts.git
确保你的 vps 里面安装 python3.6 及其以上版本，没有安装则运行 apt-get install python3 -y(Ubuntu/Debian) 或者 yum install python3 -y(Centos) 命令来安装 python3
安装脚本所需要的包 pip3 install -r requirements.txt
进入到 config 文件夹下（cd config） ，复制文件夹 config 下的 config.yml.example 文件并将文件命名为 config.yml （cp config.yml.example config.yml）。使用 vi 或者文本编辑器编辑文件 config.yml 填写配置
在配置文件中填写对应的推送方式的 key 或者 code
找到想要运行的脚本，设置对应的配置信息
返回到 Scripts 目录下，运行脚本 python3 ./scripts/xxx.py
最后就是自己添加定时任务，不会的百度 Google
github action
添加一个 secrets - CONFIG ， Value 内容请复制目录下 ./config/config.yml.example 所有内容
填写对应的推送方式的 key 或者 code
找到想要运行的脚本，设置对应的配置信息
手动 star 一下仓库，看下 Action 是否正常运行
定时同步仓库
添加一个 secrets - PAT ，教程
消息推送
目前支持 ios bark app ， telegarm bot ， dingding bot ， serverJ 四种方式推送消息。
打开推送方式：将 config.yml 里面 notify 选项中，参数 enable 设置为 true

支持的脚本任务
企鹅读书
使用脚本前务必看一遍教程，脚本地址，使用教程
此脚本使用 Python 语言根据原js脚本重写，并在原有的基础上扩展了一些功能
bilibili 签到
脚本地址：https://raw.githubusercontent.com/TNanko/Scripts/master/scripts/bilibili.py
