chrome.pageAction.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, {downloadRequest: true}, (response) => {
        chrome.downloads.download({url: response.url, saveAs: true, conflictAction: "prompt"});
    });
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {urlContains: 'https://9gag.com/gag/'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]}
        ]);
    });
});