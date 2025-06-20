# ========== 配置区域 ==========
DEPLOY_DIR="/home/admin/application"  # 部署目录
PORT=8080                            # 服务端口
LOG_FILE="$DEPLOY_DIR/nohup.out"     # 日志文件
# =============================

# 1. 准备部署目录
mkdir -p $DEPLOY_DIR
cd $DEPLOY_DIR

# 2. 解压代码（云效会自动上传压缩包）
tar zxvf /home/admin/app/package.tgz -C $DEPLOY_DIR

# 3. 使用国内镜像加速安装
npm config set registry https://registry.npmmirror.com

# 4. 安装生产依赖（跳过开发依赖）
npm install --production --no-optional

# 5. 启动服务（后台运行 + 日志重定向）
# 1. 停止所有 next-server 旧进程
pkill -f "next-server" || echo "No next-server processes found."

# 使用 nohup 保持进程运行
nohup npm run start > $LOG_FILE 2>&1 &