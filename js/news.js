'use strict'

const newsItems = [
    {
        title: 'IDECOOP y Poder Ejecutivo entregan 808 certificados de incorporación a nuevas cooperativas',
        description:
            'La entrega se enmarca en el programa de Impulso a la Economía Social y Solidaria que lleva a cabo el gobierno del Presidente Luis Abinader, a través del Instituto de Desarrollo y Crédito Cooperativo (IDECOOP).',
        image: 'img/Idecoojpeg.jpeg',
        link: '#',
        type: 'Noticia'
    },
    {
        title: 'IDECOOP y contrataciones públicas firman acuerdo para convertir las cooperativas',
        description:
            'El acuerdo impulsa el desarrollo económico para convertir las cooperativas en proveedoras del Estado y fortalecer la economía social y solidaria en todo el país.',
        image: 'img/certificaciones808-Coop.jpg',
        link: '#',
        type: 'Servicio'
    },
    {
        title: 'IDECOOP avanza en los niveles de desempeño de la Gestión Pública Web',
        description:
            'La institución se posiciona entre las entidades del Estado con desempeño satisfactorio en la Administración Pública, gracias a la gestión y el trabajo colaborativo.',
        image: 'img/avanza-idecop.jpeg',
        link: '#',
        type: 'Noticia'
    }
]

const createCard = (item) => {
    const card = document.createElement('div')
    card.className = 'card'

    const figure = document.createElement('figure')
    const image = document.createElement('img')
    image.src = item.image
    image.alt = item.title
    figure.appendChild(image)

    const content = document.createElement('div')
    content.className = 'contenido-card'

    const title = document.createElement('h3')
    title.textContent = item.title

    const description = document.createElement('p')
    description.textContent = item.description

    const meta = document.createElement('span')
    meta.textContent = item.type

    const link = document.createElement('a')
    link.href = item.link
    link.textContent = 'Leer Más'

    content.appendChild(title)
    content.appendChild(description)
    content.appendChild(meta)
    content.appendChild(link)

    card.appendChild(figure)
    card.appendChild(content)

    return card
}

const renderCards = (items) => {
    const container = document.getElementById('news-cards')
    const emptyState = document.getElementById('news-empty')

    if (!container || !emptyState) {
        return
    }

    container.innerHTML = ''
    items.forEach((item) => container.appendChild(createCard(item)))

    const hasItems = items.length > 0
    emptyState.hidden = hasItems
}

const filterItems = (query) => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) {
        return newsItems
    }

    return newsItems.filter((item) => {
        const searchableText = `${item.title} ${item.description} ${item.type}`.toLowerCase()
        return searchableText.includes(normalizedQuery)
    })
}

window.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search')
    renderCards(newsItems)

    if (!searchInput) {
        return
    }

    searchInput.addEventListener('input', (event) => {
        const query = event.target.value
        const filteredItems = filterItems(query)
        renderCards(filteredItems)
    })
})
