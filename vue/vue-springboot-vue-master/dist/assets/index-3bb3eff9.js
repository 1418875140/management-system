import{aH as t}from"./index-6e278e4c.js";function i(e){const a=new FormData;return a.append("file",e),t({url:"/api/v1/files",method:"post",data:a,headers:{"Content-Type":"multipart/form-data"}})}function o(e){return t({url:"/api/v1/files",method:"delete",params:{filePath:e}})}export{o as d,i as u};
