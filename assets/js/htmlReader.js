function readHTML (url, div) {
    fetch(url)
        .then(response => console.log(response))
        .then(response => response.text())
        .then(text => div.innerHTML = text)
}