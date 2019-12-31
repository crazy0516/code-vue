+ vue 入门学习教程

+ git 常见命令
    + git clone [url]
    + git add .
    + git commit -m "名称"
    + git push

+ 在使用github上传代码到远程仓库时，执行以下命令之后：
    + git add .    //把所有文件添加到暂存区
    + git commit -m ""  //将文件提交到暂存区里面的master分支
    + git remote add origin git@github.com:2233616114/learn.git  //与远程仓库建立连接
    + git push -u origin master  //提交到远程仓库

+ 出现了这个问题：
    + ! [rejected]        master -> master (fetch first)
    + error: failed to push some refs to 'https://github.com/crazy0516/crazy0516.github.io.git'
    + hint: Updates were rejected because the remote contains work that you do
    + hint: not have locally. This is usually caused by another repository pushing
    + hint: to the same ref. You may want to first integrate the remote changes
    + hint: (e.g., 'git pull ...') before pushing again.
    + hint: See the 'Note about fast-forwards' in 'git push --help' for details.

+ 经过探索发现好像是本地目录和远程目录不一致，github中的README.md文件不在本地代码目录中，可以通过如下命令进行代码合并：
    + git pull --rebase origin master

+ 再次提交
    + git push -u origin master

+ git 常用命令
    + git init //初始化
    + git status //查看状态
    + git checkout/switch '分支名' //切换分支
    + git branch '分支名' //创建分支
    + git brach //查看分支
    + git merge '分支名' //合并到当前分支
    + git checkout -b '分支名' //创建并切换分支
    + git switch -c '分支名' //创建并切换分支
    + git branch -d '分支名' //删除分支
    + git branch -f '分支名' //到指定分支
    + git config --global credential.helper store //记住用户名密码

+ npm install 本身就有一个别名 npm i
    + npm i module_name -S    即    npm install module_name --save     写入dependencies，发布到生产环境
    + npm i module_name -D    即    npm install module_name --save-dev  写入devDependencies，发布到开发环境
    + npm i module_name -g    即    global全局安装(命令行使用)
    + npm i module_name       即    本地安装(将安装包放在 ./node_modules 下)

+ 在《Javascript权威指南》中这样定义：
    + 参数有形参（parameter）和实参（argument）的区别，形参相当于函数中定义的变量，实参是在运行时的函数调用时传入的参数。
    + 说明白就是，形参就是函数声明时的变量，实参是我们调用该函数时传入的具体参数。
