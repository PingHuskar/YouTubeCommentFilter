(function () {
  "use strict";
  const regex =
    /[^a-zA-Z0-9\.\d\n\u0E00-\u0E7F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u3000-\u303F\s\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~\,\'\"\!\…]|max33|แตกดี|กำไรเยอะ|สนุกจริง\s?ๆ/i;
  setInterval(() => {
    const comments = document.querySelectorAll("#content-text");

    comments.forEach((comment) => {
      if (regex.test(comment.innerText)) {
        // Hide the entire comment container
        const component = comment.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
        // component.style.display = "none";
        component.innerHTML = "<button disabled>Comment Hidden</button>";
        console.log(`comments hidden`);
      }
    });
  }, 1000);
})();
