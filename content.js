(function () {
  "use strict";
  const regex = /M𝐀𝐗/i; // Example regex to match "MAX"

  setInterval(() => {
    const comments = document.querySelectorAll("#content-text");

    comments.forEach((comment) => {
      if (regex.test(comment.innerText)) {
        // Hide the entire comment container
        comment.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display =
          "none";
      }
    });
    console.log(`comments hidden`);
  }, 1000);
  setTimeout(() => {
      console.clear();
      let trackStr = ``;
      let sep = `345345345`;
      trackStr += location.href
      .replace("https://www.youtube.com/watch?v=", "")
      .replace("https://youtu.be/", "");
      trackStr += sep;
      trackStr += document.querySelector(
          `#text-container a.yt-simple-endpoint.style-scope.yt-formatted-string`
        ).innerText;
        trackStr += sep;
        trackStr += document.getElementsByTagName(`h1`)[3].innerText;
        trackStr += sep;
        trackStr += document.querySelector(`span.ytp-time-duration`).innerText;
        console.log(trackStr);
    }, 2000)
})();
