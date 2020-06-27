/* global chrome */
chrome.runtime.onMessage.addListener((request) => {
  if (request.subject) {
    let images = Array.from(document.querySelectorAll("img"));
    for (const image of images) {
      if (request.subject === "Bill Murray") {
        image.src =
          "http://www.fillmurray.com/" + image.width + "/" + image.height;
      } else {
        image.src =
          "http://placekitten.com/" + image.width + "/" + image.height;
      }
    }
  }
});
