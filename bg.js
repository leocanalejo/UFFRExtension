
/* background script:
   - updates badge count
   - starts the viewer tab
*/

chrome.browserAction.onClicked.addListener(function(tab) {
    // start viewer tab
    var url = chrome.extension.getURL('maintab.html#'+tab.id);
    chrome.tabs.create({url:url});
});

function tab_updated(tab) {
    console.log('active tab: '+tab.id);

    if (!get_config("tooltip"))
        return;

    // ask counts from content script
    chrome.tabs.sendMessage(tab.id, {"badge":1}, function(reply){
        update_badge(reply);
    });
}

// tab activity - update badge
chrome.tabs.onActivated.addListener(function(info){
    chrome.tabs.get(info.tabId, function(tab) {
        tab_updated(tab);
    });
});
chrome.tabs.onUpdated.addListener(function(tabid, info, tab){
    if (info.status == "complete")
        tab_updated(tab);
});

console.log('bg loaded');

/*var onMessageListener = function(message, sender, sendResponse) {
    switch(message.type) {
        case "bglog":
            console.log(message.obj);
            break;
    }
    return true;
}
chrome.runtime.onMessage.addListener(onMessageListener);*/

/*
var msg = window.addEventListener("message", function(event) {
    // We only accept messages from ourselves
    if (event.source != window)
        return;

    if (event.data.type && (event.data.type == "FROM_PAGE")) {
        console.log("Content script received message: " + event.data.text);
    }
});

tabid = parseInt(location.hash.slice(1));

chrome.tabs.executeScript(tabid, {code:msg});*/
