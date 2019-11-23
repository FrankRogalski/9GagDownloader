let website = {};
(function() {
    let pic = document.getElementsByClassName("image-post")[0];
    let src = "";
    if (pic) {
        src = pic.getElementsByTagName("img")[0].src;
    } else {
        let list = document.getElementsByClassName("video-post")[0].getElementsByTagName("source");
        for (const item of list) {
            if (item.src.includes(".mp4") && !item.type.includes("codecs")) {
                src = item.src;
                break;
            }
        }
    }
    website.url = src;
})();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.downloadRequest) {
        sendResponse(website);
    }
});