$(initialGuidRequest());
$(selectAndCopyGuidToClipboard());

$(window).click(function () {
    console.log('clicked2');

    selectAndCopyGuidToClipboard();
    requestAndSetNewGuid(); 
});

function initialGuidRequest() {
    sendRequestForNewGuid(function (obj) {
        setGuidText(obj);
        selectItemById(getGuidItem());
    });
}

function requestAndSetNewGuid() {
    sendRequestForNewGuid(setGuidText);
}

function sendRequestForNewGuid(callback) {
    let guidGeneratorUrl = "/api/GenerateGuid";

    $.ajax({
        url: guidGeneratorUrl,
        type: "GET",
        crossDomain: true,
        dataType: "text",
        success: function (response) {
            callback(response);
        },
        error: function (xhr, status) {
            console.log("error");
        }
    });
}

function selectAndCopyGuidToClipboard() {
    selectItemById(getGuidItem());

    copySelectedToClipboard();

    setLastCopiedAt(new Date().toLocaleString());
}
function selectItemById(item) {
    let range = document.createRange();
    let selection = window.getSelection();

    range.selectNodeContents(item);

    selection.removeAllRanges();
    selection.addRange(range);
}
function copySelectedToClipboard() {
    document.execCommand("Copy");
}
function setLastCopiedAt(time) {
    $("#lastCopiedAtItem").text(time);
}
function setGuidText(value) {
    $("#guidText").text(value);
}
function getGuidItem() {
    return document.getElementById("guidText");
}