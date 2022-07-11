

const carregarSpend = function() {
    var JSONPath = '../../data.json'

    fetch(JSONPath).then((response) => {
        response.json().then((responseData) => {
            let data = responseData
            const tooltips = document.querySelectorAll('.card-spend-tooltip')
            const graphs = document.querySelectorAll('.card-spend-graph')
            for(let i = 0; i < data.length; i++) {
                tooltips[i].innerHTML = 'R$' + data[i]['amount']
                graphs[i].style.height = `${data[i]['amount']}%`
            }
        })
    })

}

document.querySelector('body').addEventListener('load', carregarSpend())