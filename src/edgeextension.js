var blocklist = [];

var xhr = new XMLHttpRequest();
xhr.open('GET', browser.extension.getURL('thirdparty/easylist_general_block.txt'), true);
xhr.onreadystatechange = function()
{
    if(xhr.readyState == XMLHttpRequest.DONE)
    {
        blocklist = xhr.responseText.split("\n");
    }
};
xhr.send();

browser.webRequest.onBeforeRequest.addListener(
    function(requestDetails) {
        //var start = new Date().getTime();
        
        var block = false;
        for(i = 0; i < blocklist.length; i++) {
            if(blocklist[i].length == 0) continue;
            if(requestDetails.url.indexOf(blocklist[i]) != -1) {
                console.log("Blocking " + requestDetails.url + " due to rule " + blocklist[i] + " [L" + i + "]");
                block = true;
                break;
            }
        }
        
        //var end = new Date().getTime();
        //console.log("Time = " + (end - start));
        
        return {cancel: block};
    },
    {
        urls: ["<all_urls>"]
    },
    ["blocking"]
);