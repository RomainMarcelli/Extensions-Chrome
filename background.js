chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const initialUrl = "https://systelecoms.my.connect.aws/ccp-v2/softphone";
    console.log("Tab updated:", changeInfo.url);  // Message de débogage
    
    if (changeInfo.url && changeInfo.url.startsWith(initialUrl) && changeInfo.url !== initialUrl) {
        console.log("URL changed:", changeInfo.url);  // Message de débogage
        // Mettre la nouvelle page au premier plan
        chrome.windows.update(tab.windowId, { focused: true }, () => {
            chrome.tabs.update(tabId, { active: true });
            console.log("Tab brought to front:", tabId);  // Message de débogage
        });
    }
});
