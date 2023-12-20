// loadBootstrap.js

// 創建一個 script 元素
var bootstrapScript = document.createElement('script');

// 設置 script 的 src 屬性為 Bootstrap 的 CDN 連結
bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';

// 設置 script 的 integrity 屬性（可選，提供額外的安全性）
bootstrapScript.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';

// 設置 script 的 crossorigin 屬性
bootstrapScript.crossOrigin = 'anonymous';

// 將 script 元素附加到 HTML 的 head 元素中
document.head.appendChild(bootstrapScript);