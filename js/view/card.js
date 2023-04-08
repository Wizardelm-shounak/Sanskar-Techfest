class Card {
    constructor(title, description, query) {
        this.title = title;
        this.description = description;
        this.query = query;
        console.log(query)
    }
    createChild() {
        let child = document.createElement('div')
        child.className = "card"
        child.innerHTML = `<div class="card-inner">
        <div class="card-front">
            <h1 style="font-size: 45px;">${this.title}</h1>
        </div>
        <div class="card-back">
            <h2>${this.title}</h2>
            <p>
              ${this.description}
            </p>
        </div>
    </div>`
    return child
    }
    render() {
        const parent = document.querySelector(this.query)

        let child = this.createChild()
        parent.appendChild(child)
    }
}

export default Card