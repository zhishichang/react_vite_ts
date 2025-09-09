import { createRoot } from "react-dom/client";
import Loading from "./Loading.tsx";
import "./index.css";
let count = 0;
// 展示loading
export const showLoading = () => {
  console.log("showLoading");
  // 当页面中没有loading的时候，创建一个loading
  if (count === 0) {
    // 创建一个div dom节点
    const loading = document.createElement("div");
    // 给这个div节点增加一个id属性 属性值为loading
    loading.setAttribute("id", "loading");
    // 把这个div 放入到body节点中
    document.body.appendChild(loading);
    // 把创建的div节点作为根节点 渲染Loading组件
    createRoot(loading).render(<Loading />);
  }
  // 显示loading
  count++;
};
// 取消loading
export const hideLoading = () => {
  console.log("hideLoading");
  if (count < 0) return;
  count--;
  // 所有请求已经完毕了
  if (count === 0)
    // 移除对应的div节点
    document.body.removeChild(
      document.getElementById("loading") as HTMLDivElement
    );
};
