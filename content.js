(function () {
  "use strict";
  const userRegex = /\@.+\-.{3}/
  const commentRegex =
    /[^a-zA-Z0-9\.\d\n\u0E00-\u0E7F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u3000-\u303F\s\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\,\'\"\!\…]|max33|แตกดี|กำไรเยอะ|สนุกจริง\s?ๆ/i;
  setInterval(() => {
    const comments = document.querySelectorAll("#content-text");
    
    comments.forEach((comment) => {
      const component = comment.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
      const userName =
        comment.parentElement.parentElement.parentElement.querySelector(
          "span"
        ).innerText;
      if (
        userRegex.test(userName)
        // || 
        // commentRegex.test(comment.innerText) 
      ) {
        // Hide the entire comment container
        // component.style.display = "none";
        console.log(
          `User Comment Hidden : ${userName} => ${comment.innerText}`
        );
        component.innerHTML = "<button disabled>User Comment Hidden</button>";
      }
    });
  }, 1000);
})();
