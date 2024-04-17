var posts=["2023/07/03/hello-world/","2024/04/17/butterfly魔改/","2024/04/03/为zhenxun-bot增加chatgpt功能/","2023/07/03/测试/","2023/07/30/月夜/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };