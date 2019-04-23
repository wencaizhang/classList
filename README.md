# 实现一个 classList


原生DOM API classList 提供了很方便的操作元素类名的方法（add, remove, toggle 等），但美中不足的是，仅支持 IE10 以上。

因此这里封装一个兼容良好的 zClassList API，与原生 API 保持相同的调用方式（包括函数名，参数和返回值，统统一致）。


使用方法：直接引入 classList.js 即可。