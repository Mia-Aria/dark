/*
 * @Author: gaoyang334 gaoyang334@jd.com
 * @Date: 2025-07-01 17:04:43
 * @LastEditors: gaoyang334 gaoyang334@jd.com
 * @LastEditTime: 2025-07-01 17:51:49
 * @FilePath: /dark/src/app/aria/client.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import React, { useEffect, useState } from "react";

export default function AriaClient() {
  const [data, setData] = useState<any>();
  const fetchData = async () => {
    try {
      // 直接写相对路径（自动被rewrites重定向）
      const res = await fetch("/api/users", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.error("API请求失败", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>{data?.status || "-"}</h1>
      <h1>{JSON.stringify(data?.data)}</h1>
    </div>
  );
}
