function readHTML (url, div) {
    fetch(url)
        .then(response => response.text())
        .then(text => div.innerHTML = text)
}