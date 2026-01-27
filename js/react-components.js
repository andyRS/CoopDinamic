import React, { Fragment, useMemo, useState } from 'https://esm.sh/react@18.2.0'
import { createRoot } from 'https://esm.sh/react-dom@18.2.0/client'
import {
    Combobox,
    Disclosure,
    Popover,
    Transition
} from 'https://esm.sh/@headlessui/react@1.7.18'
import { Swiper, SwiperSlide } from 'https://esm.sh/swiper@11.1.1/react'
import { Autoplay, Pagination } from 'https://esm.sh/swiper@11.1.1/modules'
import { addMonths, format } from 'https://esm.sh/date-fns@3.6.0'
import { es } from 'https://esm.sh/date-fns@3.6.0/locale'
import htm from 'https://esm.sh/htm@3.1.1'

const html = htm.bind(React.createElement)

const menuLinks = [
    {
        label: 'Para ti',
        items: [
            {
                title: 'Ahorros o inversión',
                links: [
                    'Cuentas de Ahorros',
                    'Ahorros Programados',
                    'Certificados Financieros',
                    'Alquiler Hipotecario'
                ]
            },
            {
                title: 'Créditos',
                links: [
                    'Expresos',
                    'De Consumo',
                    'Hipotecarios',
                    'Adquisión de Vehículos',
                    'Educativos y Escolares',
                    'Vacacionales'
                ]
            },
            {
                title: 'Calculadora de Préstamos',
                href: 'calculadora-prestamos.html'
            }
        ]
    },
    {
        label: 'Para tu negocio',
        items: [
            {
                title: 'Ahorros o inversión',
                links: [
                    'Cuentas de Ahorros',
                    'Ahorros Programados',
                    'Certificados Financieros',
                    'Alquiler Hipotecario'
                ]
            },
            {
                title: 'Créditos',
                links: [
                    'Expresos',
                    'De Consumo',
                    'Hipotecarios',
                    'Adquisión de Vehículos',
                    'Educativos y Escolares',
                    'Vacacionales'
                ]
            }
        ]
    },
    {
        label: 'Dinamízate',
        items: [
            {
                title: 'Blog',
                href: 'blog.html'
            }
        ]
    },
    {
        label: 'Contacto',
        items: [
            {
                title: 'Formulario',
                href: 'formulario.html'
            }
        ]
    }
]

const searchSuggestions = [
    'Préstamos',
    'Certificados Financieros',
    'Preguntas Frecuentes',
    'Ahorros',
    'Finanzas',
    'Artículos',
    'Seguros',
    'Préstamos Hipotecarios',
    'Préstamos Personales',
    'Préstamos Empresariales',
    'Negocios',
    'Juventud',
    'Salud',
    'Salud Bucal',
    'Empresas',
    'Acerca de nosotros'
]

const servicesSlides = [
    {
        title: 'Préstamos',
        subtitle: 'Financieros',
        image: 'img/3.jpg'
    },
    {
        title: 'Ahorros',
        subtitle: 'Personales',
        image: 'img/6.1.jpg'
    },
    {
        title: 'Apertura de',
        subtitle: 'Cuenta',
        image: 'img/apertura.jpg'
    },
    {
        title: 'Certificado',
        subtitle: 'Financieros',
        image: 'img/certificado.jpg'
    },
    {
        title: 'Seguros',
        subtitle: 'de Vida',
        image: 'img/6.jpg'
    }
]

const faqItems = [
    {
        question: '¿Cómo afiliarse?',
        answer:
            'Afiliarse es fácil, solo debes llenar el formulario “solicitud de afiliación”, anexar copia de tu cédula y tramitarla físicamente o por vía WhatsApp a cooperativaladinamica@gmail.com o al 829-959-0549. El pago inicial es de RD$1,300 a nuestras cuentas BPD Ahorros 818479339 y BR cte. 960-288585-6.'
    },
    {
        question: '¿Cuánto pago cada mes luego de afiliarme?',
        answer:
            'Debes mantener un mínimo de aportes y ahorros de RD$700.00, ya sea vía nómina o por depósitos directos.'
    },
    {
        question: '¿Qué es el San Dinámico?',
        answer:
            'Es un sistema de ahorros premiado: se define una meta de ahorro y se paga mensualmente. En la primera cuota la cooperativa completa parte del ahorro como incentivo.'
    },
    {
        question: '¿Si me descuentan por nómina puedo hacer otros ahorros?',
        answer:
            'Sí, puedes hacer depósitos, aportes o abonos en cualquier momento, independientemente de los descuentos por nómina.'
    },
    {
        question: '¿Debo ir a sus oficinas para depositar?',
        answer:
            'No. Todas las transacciones se realizan mediante depósitos o transferencias bancarias.'
    },
    {
        question: '¿En qué tiempo luego de afiliarme puedo tomar prestado?',
        answer:
            'Depende de tus ahorros y garantías. Existen opciones con aportes del 30% o 50% del monto solicitado y con garante para cubrir el excedente.'
    }
]

const formatCurrency = (value) =>
    new Intl.NumberFormat('es-DO', {
        style: 'currency',
        currency: 'DOP'
    }).format(value)

const HeaderNav = () => {
    const [query, setQuery] = useState('')

    const filteredSuggestions = useMemo(() => {
        if (!query) return searchSuggestions
        const normalized = query.toLowerCase()
        return searchSuggestions.filter((item) => item.toLowerCase().includes(normalized))
    }, [query])

    return html`
        <header className="bg-white shadow-sm">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                    <img
                        className="h-12 w-12 rounded-full"
                        src="img/Logo.png"
                        alt="Logo CoopDinámica"
                        width="64"
                        height="64"
                    />
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900">CoopDinámica</h1>
                        <p className="text-sm text-slate-500">Cooperativa de ahorros, crédito y servicios múltiples</p>
                    </div>
                </div>
                <div className="w-full max-w-md">
                    <${Combobox} value=${query} onChange=${setQuery}>
                        <div className="relative">
                            <${Combobox.Input}
                                id="search"
                                className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                                onChange=${(event) => setQuery(event.target.value)}
                                placeholder="Buscar servicios, productos o artículos..."
                            />
                            <${Transition}
                                as=${Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <${Combobox.Options}
                                    className="absolute z-20 mt-2 max-h-56 w-full overflow-auto rounded-xl border border-slate-200 bg-white py-1 text-sm shadow-lg"
                                >
                                    ${filteredSuggestions.length === 0 && query
                                        ? html`<div className="px-4 py-2 text-slate-500">Sin coincidencias.</div>`
                                        : filteredSuggestions.map(
                                              (item) => html`
                                                  <${Combobox.Option}
                                                      key=${item}
                                                      value=${item}
                                                      className="cursor-pointer px-4 py-2 text-slate-700 data-[headlessui-state=active]:bg-emerald-50 data-[headlessui-state=active]:text-emerald-700"
                                                  >
                                                      ${item}
                                                  </${Combobox.Option}>
                                              `
                                          )}
                                </${Combobox.Options}>
                            </${Transition}>
                        </div>
                    </${Combobox}>
                </div>
            </div>
            <nav className="border-t border-slate-100 bg-white">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-4 text-sm font-semibold text-slate-700">
                    <a className="rounded-full px-3 py-2 text-emerald-600 hover:bg-emerald-50" href="index.html">
                        Inicio
                    </a>
                    ${menuLinks.map(
                        (section) => html`
                            <${Popover} key=${section.label} className="relative">
                                <${Popover.Button}
                                    className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-emerald-50 hover:text-emerald-700"
                                >
                                    ${section.label}
                                    <span aria-hidden="true">▾</span>
                                </${Popover.Button}>
                                <${Transition}
                                    as=${Fragment}
                                    enter="transition ease-out duration-150"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <${Popover.Panel}
                                        className="absolute left-0 z-30 mt-3 w-72 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl"
                                    >
                                        <div className="space-y-4">
                                            ${section.items.map((item) =>
                                                item.links
                                                    ? html`
                                                          <div key=${item.title}>
                                                              <p className="text-xs font-semibold uppercase text-slate-400">
                                                                  ${item.title}
                                                              </p>
                                                              <div className="mt-2 space-y-1">
                                                                  ${item.links.map(
                                                                      (link) => html`
                                                                          <a
                                                                              key=${link}
                                                                              className="block rounded-lg px-2 py-1 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                                                                              href="#"
                                                                          >
                                                                              ${link}
                                                                          </a>
                                                                      `
                                                                  )}
                                                              </div>
                                                          </div>
                                                      `
                                                    : html`
                                                          <a
                                                              key=${item.title}
                                                              className="block rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                                                              href=${item.href || '#'}
                                                          >
                                                              ${item.title}
                                                          </a>
                                                      `
                                            )}
                                        </div>
                                    </${Popover.Panel}>
                                </${Transition}>
                            </${Popover}>
                        `
                    )}
                    <a className="rounded-full px-3 py-2 hover:bg-emerald-50" href="#">
                        ¿Por qué asociarse?
                    </a>
                    <a className="rounded-full px-3 py-2 hover:bg-emerald-50" href="#">
                        Prensa
                    </a>
                </div>
            </nav>
        </header>
    `
}

const ServicesCarousel = () =>
    html`
        <section className="mx-auto max-w-6xl px-4 py-12">
            <div className="mb-8 flex items-center justify-between">
                <h4 className="text-2xl font-semibold text-slate-900">Nuestros servicios</h4>
                <p className="text-sm text-slate-500">Explora nuestras soluciones financieras.</p>
            </div>
            <${Swiper}
                modules=${[Autoplay, Pagination]}
                slidesPerView=${1}
                spaceBetween=${24}
                autoplay=${{ delay: 4500 }}
                pagination=${{ clickable: true }}
                breakpoints=${{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                className="rounded-3xl"
            >
                ${servicesSlides.map(
                    (slide) => html`
                        <${SwiperSlide} key=${slide.title}>
                            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
                                <img
                                    src=${slide.image}
                                    alt=${slide.title}
                                    className="h-56 w-full object-cover"
                                    loading="lazy"
                                />
                                <div className="flex flex-1 flex-col gap-2 p-5">
                                    <h5 className="text-lg font-semibold text-slate-900">${slide.title}</h5>
                                    <p className="text-sm text-emerald-600">${slide.subtitle}</p>
                                    <span className="mt-auto text-xs font-semibold text-slate-400">
                                        Conoce más
                                    </span>
                                </div>
                            </article>
                        </${SwiperSlide}>
                    `
                )}
            </${Swiper}>
        </section>
    `

const FaqAccordion = () =>
    html`
        <section className="mx-auto max-w-4xl px-4 py-12">
            <h5 className="text-2xl font-semibold text-slate-900">Preguntas frecuentes</h5>
            <p className="mt-2 text-sm text-slate-500">
                Resolvemos las dudas más comunes de nuestros socios.
            </p>
            <div className="mt-6 space-y-4">
                ${faqItems.map(
                    (item) => html`
                        <${Disclosure} key=${item.question}>
                            {({ open }) => html`
                                <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                                    <${Disclosure.Button}
                                        className="flex w-full items-center justify-between text-left text-base font-semibold text-slate-800"
                                    >
                                        <span>${item.question}</span>
                                        <span className="text-emerald-500">${open ? '−' : '+'}</span>
                                    </${Disclosure.Button}>
                                    <${Disclosure.Panel} className="mt-3 text-sm text-slate-600">
                                        ${item.answer}
                                    </${Disclosure.Panel}>
                                </div>
                            `}
                        </${Disclosure}>
                    `
                )}
            </div>
        </section>
    `

const LoanCalculator = () => {
    const [amount, setAmount] = useState('')
    const [months, setMonths] = useState('')
    const [rate, setRate] = useState('')
    const [schedule, setSchedule] = useState([])

    const handleCalculate = () => {
        const amountValue = Number.parseFloat(amount)
        const monthsValue = Number.parseInt(months, 10)
        const rateValue = Number.parseFloat(rate)

        if (!amountValue || !monthsValue || !rateValue) {
            setSchedule([])
            return
        }

        const monthlyRate = rateValue / 100
        const cuota =
            (amountValue * (Math.pow(1 + monthlyRate, monthsValue) * monthlyRate)) /
            (Math.pow(1 + monthlyRate, monthsValue) - 1)

        let balance = amountValue
        let currentDate = new Date()

        const rows = Array.from({ length: monthsValue }, (_, index) => {
            const interestPayment = balance * monthlyRate
            const capitalPayment = cuota - interestPayment
            balance -= capitalPayment
            currentDate = addMonths(currentDate, 1)

            return {
                id: index,
                date: format(currentDate, 'dd-MM-yyyy', { locale: es }),
                cuota: formatCurrency(cuota),
                capital: formatCurrency(capitalPayment),
                interest: formatCurrency(interestPayment),
                balance: formatCurrency(Math.max(balance, 0))
            }
        })

        setSchedule(rows)
    }

    const handleReset = () => {
        setAmount('')
        setMonths('')
        setRate('')
        setSchedule([])
    }

    return html`
        <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 lg:flex-row">
            <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-semibold text-slate-900">Calculadora de Préstamos</h2>
                <p className="mt-2 text-sm text-slate-500">
                    Calcula tu cuota mensual usando <strong>date-fns</strong> para construir el calendario de pagos.
                </p>
                <div className="mt-6 space-y-4">
                    <label className="block text-sm font-medium text-slate-600">
                        Monto
                        <input
                            type="number"
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                            value=${amount}
                            onInput=${(event) => setAmount(event.target.value)}
                            placeholder="Ingresar monto"
                        />
                    </label>
                    <label className="block text-sm font-medium text-slate-600">
                        Meses
                        <input
                            type="number"
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                            value=${months}
                            onInput=${(event) => setMonths(event.target.value)}
                            placeholder="Ingresar cantidad de meses"
                        />
                    </label>
                    <label className="block text-sm font-medium text-slate-600">
                        Tasa de interés mensual (%)
                        <input
                            type="number"
                            step="0.01"
                            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                            value=${rate}
                            onInput=${(event) => setRate(event.target.value)}
                            placeholder="Ingresar tasa de interés mensual"
                        />
                    </label>
                    <div className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600"
                            onClick=${handleCalculate}
                        >
                            Calcular
                        </button>
                        <button
                            type="button"
                            className="rounded-full border border-amber-400 px-5 py-2 text-sm font-semibold text-amber-600 hover:bg-amber-50"
                            onClick=${handleReset}
                        >
                            Limpiar
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                    <div className="border-b border-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
                        Calendario de amortización
                    </div>
                    <div className="max-h-[420px] overflow-auto">
                        <table className="min-w-full text-left text-xs">
                            <thead className="sticky top-0 bg-slate-50 text-slate-500">
                                <tr>
                                    <th className="px-4 py-2">Fecha</th>
                                    <th className="px-4 py-2">Cuota</th>
                                    <th className="px-4 py-2">Capital</th>
                                    <th className="px-4 py-2">Interés</th>
                                    <th className="px-4 py-2">Saldo</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                ${schedule.length === 0
                                    ? html`
                                          <tr>
                                              <td className="px-4 py-6 text-center text-slate-400" colSpan="5">
                                                  Ingresa los datos para ver el cronograma.
                                              </td>
                                          </tr>
                                      `
                                    : schedule.map(
                                          (row) => html`
                                              <tr key=${row.id}>
                                                  <td className="px-4 py-2">${row.date}</td>
                                                  <td className="px-4 py-2">${row.cuota}</td>
                                                  <td className="px-4 py-2">${row.capital}</td>
                                                  <td className="px-4 py-2">${row.interest}</td>
                                                  <td className="px-4 py-2">${row.balance}</td>
                                              </tr>
                                          `
                                      )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    `
}

const mount = (id, component) => {
    const node = document.getElementById(id)
    if (!node) return
    const root = createRoot(node)
    root.render(component)
}

mount('header-nav-root', html`<${HeaderNav} />`)
mount('services-carousel-root', html`<${ServicesCarousel} />`)
mount('faq-accordion-root', html`<${FaqAccordion} />`)
mount('loan-calculator-root', html`<${LoanCalculator} />`)
