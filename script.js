const coffeContainer = document.querySelector('main')

function setLoading(){
    coffeContainer.innerHTML = ''
    const h2 = document.createElement('h2')
    const loading = document.createTextNode('LOADING...')
    h2.appendChild(loading)
    coffeContainer.appendChild(h2)
}

function displayCoffeeList(coffeeList){
    coffeContainer.innerHTML = ''
    coffeeList.map(coffee => {
    const card = document.createElement('div')
    // const img = document.createElement('img')
    const title  = document.createElement('h3')
    const description = document.createElement('p')
    title.appendChild(document.createTextNode(coffee.title))
    description.appendChild(document.createTextNode(coffee.description))
    // img.appendChild(document.createTextNode(coffee.img))
    card.appendChild(title)
    card.appendChild(description)
    // card.appendChild(img)
    coffeContainer.appendChild(card)
    })
}

function getCoffee(temp){
    setLoading()
    fetch(`https://api.sampleapis.com/coffee/${temp}`)
    .then(response => response.json())
    .then(displayCoffeeList)
    .catch(console.error) //TODO: display error for user
}


getCoffee('hot')