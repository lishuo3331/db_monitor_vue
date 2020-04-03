
## 运行环境
> iview-admin 2.5.0

> pycharm 2019.3.3

> vue.js 2.9
## 运行

```bush
1. 下载项目源码
git clone https://github.com/gumengkai/db_monitor_vue

2. 修改后端API连接地址
src/config/index.js
baseUrl:
    dev: 测试
    pro: 线上

3. 安装依赖包
yarn install

4. 开发环境运行
yarn run dev
```

## 编译

> dist

```bush
yarn build
```

将dist文件夹部署到nginx即可

原始链接：https://github.com/gumengkai/db_monitor_vue
