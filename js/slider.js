addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    const imagenes = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg',
                       'img/5.jpg','img/6.jpg', 'img/7.jpg']


    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const progressBar = document.querySelector('#progress-bar')
    const divIndicadores = document.querySelector('#indicadores')
    const toggleButton = document.querySelector('#slider-toggle')
    let porcentaje_base = 100/imagenes.length
    let porcentaje_actual = porcentaje_base
    let currentIndex = 0
    let intervalo = null
    let isPaused = false
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches


    for (let index = 0; index < imagenes.length; index++) {
        const button = document.createElement('button')
        button.type = 'button'
        button.classList.add('circles')
        button.dataset.index = index
        button.setAttribute('aria-label', `Ir a la diapositiva ${index + 1}`)
        divIndicadores.appendChild(button)
    }
    

    progressBar.style.width = `${porcentaje_base}%`
    img1.src = imagenes[0]
    const circulos = document.querySelectorAll('.circles')
    circulos[0].classList.add('resaltado')

    const actualizarIndicadores = (index) => {
        const circulo_actual = Array.from(circulos).find(el => Number(el.dataset.index) === index)
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
        circulo_actual.classList.add('resaltado')
    }

    const actualizarBarra = (index) => {
        porcentaje_actual = porcentaje_base * (index + 1)
        progressBar.style.width = `${porcentaje_actual}%`
    }

    const mostrarSlide = (index) => {
        img2.src = imagenes[index]
        actualizarIndicadores(index)

        img2.classList.add('active')
        actualizarBarra(index)
        currentIndex = index

        setTimeout(() => {
            img1.src = img2.src
            img2.classList.remove('active')
        }, 1000)
    }

    const slideshow = () => {
        const nextIndex = (currentIndex + 1) % imagenes.length
        mostrarSlide(nextIndex)
    }

    const detenerAutoplay = () => {
        if (intervalo) {
            clearInterval(intervalo)
            intervalo = null
        }
    }

    const iniciarAutoplay = (force = false) => {
        if (intervalo || (!force && prefersReducedMotion)) {
            return
        }

        intervalo = setInterval(slideshow, 5000)
    }

    const actualizarBotonToggle = () => {
        if (!toggleButton) {
            return
        }

        toggleButton.textContent = isPaused ? 'Reproducir' : 'Pausar'
        toggleButton.setAttribute('aria-pressed', String(isPaused))
    }

    circulos.forEach(circulo => {
        circulo.addEventListener('click', (event) => {
            const target = event.currentTarget
            const index = Number(target.dataset.index)
            isPaused = true
            detenerAutoplay()
            actualizarBotonToggle()
            mostrarSlide(index)
        })
    })

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (isPaused) {
                isPaused = false
                iniciarAutoplay(true)
            } else {
                isPaused = true
                detenerAutoplay()
            }
            actualizarBotonToggle()
        })
    }

    if (prefersReducedMotion) {
        isPaused = true
        detenerAutoplay()
    } else {
        iniciarAutoplay()
    }

    actualizarBotonToggle()
    
})
