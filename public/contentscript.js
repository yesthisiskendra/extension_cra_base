/* global chrome */
chrome.runtime.onMessage.addListener((request) => {
  if (request.animal) {
    let images = Array.from(document.querySelectorAll("img"));
    for (const image of images) {
      image.src =
        "http://placekitten.com/g/" + image.width + "/" + image.height;
    }
  }
});
