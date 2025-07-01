/*
 * @Author: gaoyang334 gaoyang334@jd.com
 * @Date: 2025-06-30 15:26:59
 * @LastEditors: gaoyang334 gaoyang334@jd.com
 * @LastEditTime: 2025-07-01 17:53:48
 * @FilePath: /dark/src/app/aria/page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AriaClient from "./client";
export default async function Aria({
  params,
  searchParams,
}: {
  // 定义 params 的类型（路由参数）
  params: {
    id: string; // 动态参数名与路由文件中的 [id] 对应
  };
  // 定义 searchParams 的类型（查询参数）
  searchParams: {
    page?: string; // 可选字符串（问号参数可能不存在）
    sort?: number; // 可选数字（可通过 parse 转换类型）
  };
}) {
  const res = await fetch("http://182.92.182.238:4000/api/users"); // 服务端必须用完整URL
  const x = await res.json();
  return (
    <div>
      <h1>ARIA</h1>
      <p>{JSON.stringify(x)}</p>
      <p>{JSON.stringify(params)}</p>
      <p>{JSON.stringify(searchParams)}</p>
      <br />
      <h1>AriaClient</h1>
      <AriaClient />
    </div>
  );
}
