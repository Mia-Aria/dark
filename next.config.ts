/*
 * @Author: gaoyang334 gaoyang334@jd.com
 * @Date: 2025-06-18 10:44:39
 * @LastEditors: gaoyang334 gaoyang334@jd.com
 * @LastEditTime: 2025-07-01 16:57:40
 * @FilePath: /dark/next.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*", // 匹配所有以/api开头的请求
        destination: `${process.env.API_BASE_URL || "http://localhost:4000"}/api/:path*`, // 动态目标地址
      },
    ];
  },
};

export default nextConfig;
