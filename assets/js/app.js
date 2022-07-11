
var JSONPath = '../../data.json'
var request = new XMLHttpRequest()
var data;

request.open('GET', JSONPath)
request.responseType = 'json'
request.send()
request.onload = function() {
    data = request.response
    for(let i = 0; i < data.length; i++) {
        // tests[i].innerHTML = data[i]['amount']
    }
}
