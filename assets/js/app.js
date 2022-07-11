let data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

  const tooltips = document.querySelectorAll('.card-spend-tooltip')
  const graphs = document.querySelectorAll('.card-spend-graph')
  let amounts = data.map((e) => e.amount)
  for(let i = 0; i < data.length; i++) {
        tooltips[i].innerHTML = `R$${data[i]['amount']}`.replace('.', ',')
        graphs[i].style.height = `${data[i]['amount']}%`
        let valorToolTip = tooltips[i].innerHTML.replace(',', '.').replace('R$', '')
        if(valorToolTip == Math.max(...amounts)) graphs[i].classList.add('active')
  
    }

  