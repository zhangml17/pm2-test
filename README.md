## 运行
```
npm run prod
```
## 设置开机自启动
在保持要设置开机自启动，pm2管理的应用程序 处于启动状态的前提下，执行：
```
sudo pm2 startup
sudo pm2 save
```
## 常用的命令
```
pm2 list: 查看服务列表
pm2 info server-name： 查看指定服务的信息
pm2 log server-name：查看指定服务的输出日志
pm2 monit server-name：监控指定服务进程的cpu等信息
pm2 stop server-name：停止指定服务
pm2 restart server-name: 重启指定服务
pm2 delete server-name：删除指定服务
```
## pm2.conf.json配置文件中常用字段
```
name：进程或服务的名称
script：执行的脚本
watch：监听文件变化，自动重启
ignore_watch：文件变化自动重启时，不需要监听的选项
instances：设置多进程
error_file：错误日志的输出目录
out_file：console.log的打印输出目录
log_date_format：日志输出的标志时间
exec_mode：服务模式为非集群模式(fork模式)
```