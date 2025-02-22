var posts=["2024/09/21/hello-world/","2024/09/21/md文件是什么/","2025/01/26/Easy-to-use VPS service/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };