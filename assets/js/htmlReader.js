function readHTML (url, div) {
    fetch(url)
        .then(response => { return response.text() })
        .then(text => { document.getElementById(div).innerHTML = text })
}