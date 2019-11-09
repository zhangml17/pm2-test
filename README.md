## 设置开机自启动
在保持要设置开机自启动，pm2管理的应用程序 处于启动状态的前提下，执行：
```
sudo pm2 startup
sudo pm2 save
```
## 常用的命令
```
pm2 list
pm2 info server-name
pm2 log server-name
pm2 monit server-name
pm2 stop server-name
pm2 delete server-name
```