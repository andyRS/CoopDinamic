(() => {
    const loader = () => `
        <div class="contenedor_loader">
            <div class="loader"></div>
        </div>
    `;

    const header = (dataset) => {
        const headerClass = dataset.headerClass ? ` class="${dataset.headerClass}"` : "";
        const logoText = dataset.logoText || "CoopDinámica";
        const logoTitle = dataset.logoTitle || "Cooperativa Dinamica";
        const logoWidth = dataset.logoWidth ? ` width="${dataset.logoWidth}"` : "";
        const logoHeight = dataset.logoHeight ? ` height="${dataset.logoHeight}"` : "";
        const searchVariant = dataset.searchVariant || "inline";
        const searchMarkup =
            searchVariant === "span"
                ? `
                    <span class="icon"><i class="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Buscar..." />
                `
                : `
                    <input type="search" id="search" placeholder="Buscar..." />
                    <i class="fa fa-search"></i>
                `;

        return `
            <header id="header"${headerClass}>
                <div class="logo">
                    <h1>${logoText}</h1>
                    <img class="img-logo" src="img/Logo.png" alt="Logo" title="${logoTitle}"${logoWidth}${logoHeight}>
                </div>
                <div class="box">
                    <div class="buscar-box">
                        ${searchMarkup}
                    </div>
                </div>
            </header>
        `;
    };

    const navTemplates = {
        default: `
            <nav id="menu" class="menu-area">
                <div class="container-fluid">
                    <ul class="row">
                        <li><a href="index.html"><i class="fa fa-home icons-menu"></i>INICIO</a></li>
                        <li><a href="#"><i class="fa fa-user icons-menu"></i>PARA TI</a>
                            <ul class="dropdowm-1 row">
                                <li><a href="#"><i class="fas fa-coins icons-menu"></i>Ahorros o inversión</a>
                                    <ul class="dropdowm-2 row">
                                        <li><a href="#">Cuentas de Ahorros</a></li>
                                        <li><a href="#">Ahorros Programados</a></li>
                                        <li><a href="#">Certificados Financieros</a></li>
                                        <li><a href="#">Alquiler Hipotecario</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i class="fa fa-credit-card icons-menu"></i>Créditos</a>
                                    <ul class="dropdowm-2">
                                        <li><a href="#">Expresos</a></li>
                                        <li><a href="#">De Consumo</a></li>
                                        <li><a href="#">Hipotecarios</a></li>
                                        <li><a href="#">Adquision de Vehiculos</a></li>
                                        <li><a href="#">Educativos y Escolares</a></li>
                                        <li><a href="#">Vacacionales</a></li>
                                    </ul>
                                </li>
                                <li><a href="calculadora-prestamos.html"><i class="fa fa-calculator icons-menu"></i>Calculadora de Préstamos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-briefcase icons-menu"></i>PARA TU NEGOCIO</a>
                            <ul class="dropdowm-1">
                                <li><a href="#"><i class="fa fa-coins icons-menu"></i>Ahorros o inversión</a>
                                    <ul class="dropdowm-2">
                                        <li><a href="#">Cuentas de Ahorros</a></li>
                                        <li><a href="#">Ahorros Programados</a></li>
                                        <li><a href="#">Certificados Financieros</a></li>
                                        <li><a href="#">Alquiler Hipotecario</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i class="far fa-credit-card icons-menu"></i>Créditos</a>
                                    <ul class="dropdowm-2">
                                        <li><a href="#">Expresos</a></li>
                                        <li><a href="#">De Consumo</a></li>
                                        <li><a href="#">Hipotecarios</a></li>
                                        <li><a href="#">Adquision de Vehiculos</a></li>
                                        <li><a href="#">Educativos y Escolares</a></li>
                                        <li><a href="#">Vacacionales</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"> <i class="fa fa-blog icons-menu"></i>DINAMIZATE</a>
                            <ul class="dropdowm-1">
                                <li><a href="blog.html"><i class="fab fa-blogger icons-menu"></i>BLOG</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-handshake"></i>¿POR QUÉ ASOCIARSE?</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-newspaper icons-menu"></i>PRENSA</a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-address-card icons-menu"></i>CONTACTO</a>
                            <ul class="dropdowm-1">
                                <li>
                                    <a href="formulario.html"><i class="fa fa-wpforms icons-menu"></i>Formulario</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        `,
        blog: `
            <nav id="menu" class="menu-area container-fluid navbar navbar-expand-lg">
                <div class="container-fluid">
                    <ul class="navbar-nav container-fluid">
                        <li><a class="nav-link" href="index.html"><i class="fa fa-home icons-menu"></i>INICIO</a></li>
                        <li><a href="#"><i class="fa fa-user icons-menu"></i>PARA TI</a>
                            <ul class="dropdowm-1 container-fluid">
                                <li><a href="#"><i class="fas fa-coins icons-menu"></i>Ahorros o inversión</a>
                                    <ul class="dropdowm-2 navbar-nav container-fluid">
                                        <li class="nav-item"><a class="nav-link" href="#">Cuentas de Ahorros</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Ahorros Programados</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Certificados Financieros</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Alquiler Hipotecario</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i class="fa fa-credit-card icons-menu container-fluid"></i>Créditos</a>
                                    <ul class="dropdowm-2 navbar-nav container-fluid">
                                        <li class="nav-item"><a class="nav-link" href="#">Expresos</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">De Consumo</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Hipotecarios</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Adquision de Vehiculos</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Educativos y Escolares</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Vacacionales</a></li>
                                    </ul>
                                </li>
                                <li><a href="calculadora-prestamos.html"><i class="fa fa-calculator icons-menu"></i>Calculadora de Préstamos</a></li>
                            </ul>
                        </li>
                        <li class="container-fluid">
                            <a href="#"><i class="fa fa-briefcase icons-menu"></i>PARA TU NEGOCIO</a>
                            <ul class="dropdowm-1 container-fluid">
                                <li><a href="#"><i class="fa  fa-coins icons-menu container-fluid"></i>Ahorros o inversión</a>
                                    <ul class="dropdowm-2">
                                        <li><a href="#">Cuentas de Ahorros</a></li>
                                        <li><a href="#">Ahorros Programados</a></li>
                                        <li><a href="#">Certificados Financieros</a></li>
                                        <li><a href="#">Alquiler Hipotecario</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i class="far fa-credit-card icons-menu"></i>Créditos</a>
                                    <ul class="dropdowm-2">
                                        <li><a href="#">Expresos</a></li>
                                        <li><a href="#">De Consumo</a></li>
                                        <li><a href="#">Hipotecarios</a></li>
                                        <li><a href="#">Adquision de Vehiculos</a></li>
                                        <li><a href="#">Educativos y Escolares</a></li>
                                        <li><a href="#">Vacacionales</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="container-fluid">
                            <a href="#"> <i class="fa fa-blog icons-menu"></i>DINAMIZATE</a>
                            <ul class="dropdowm-1">
                                <li><a href="#"><i class="fab fa-blogger icons-menu"></i>BLOG</a></li>
                            </ul>
                        </li>
                        <li class="container-fluid">
                            <a href="#"><i class="fas fa-handshake"></i>¿POR QUÉ ASOCIARSE?</a>
                        </li>
                        <li class="container-fluid">
                            <a href="#"><i class="fa fa-newspaper icons-menu container-fluid"></i>PRENSA</a>
                        </li>
                        <li container-fluid>
                            <a href="#"><i class="fa fa-address-card icons-menu"></i>CONTACTO</a>
                            <ul class="dropdowm-1">
                                <li>
                                    <a href="formulario.html"><i class="fa fa-wpforms icons-menu"></i>Formulario</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        `,
        calculadora: `
            <nav id="menu" class="menu-area navbar navbar-expand-lg">
                <div class="container-fluid">
                    <ul class="navbar-nav row">
                        <li class="nav-item"><a class="nav-link col-xs-12 col-sm-12 col-md-4 col-lg-4" href="index.html"><i class="fa fa-home icons-menu"></i>INICIO</a></li>
                        <li class="nav-item"><a class="nav-link col-xs col-sm col-md-4 col-lg-4" href="#"><i class="fa fa-user icons-menu"></i>PARA TI</a>
                            <ul class="dropdowm-1 navbar-nav row">
                                <li class="nav-item col-xs col-sm col-md col-lg-4"><a href="#"><i class="fas fa-coins icons-menu col-xs col-sm col-md-4 col-lg-4"></i>Ahorros o inversión</a>
                                    <ul class="dropdowm-2 navbar-nav row">
                                        <li class="nav-item col-xs-12 col-sm-12 col-md-4 col-lg-4"><a class="nav-link" href="#">Cuentas de Ahorros</a></li>
                                        <li class="nav-item col-xs-12 col-sm-12 col-md-4 col-lg-4"><a class="nav-link" href="#">Ahorros Programados</a></li>
                                        <li class="nav-item col-xs-12 col-sm-12 col-md-4 col-lg-4"><a class="nav-link" href="#">Certificados Financieros</a></li>
                                        <li class="nav-item col-xs-12 col-sm-12 col-md-4 col-lg-4"><a class="nav-link" href="#">Alquiler Hipotecario</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i class="fa fa-credit-card icons-menu"></i>Créditos</a>
                                    <ul class="dropdowm-2 navbar-nav">
                                        <li class="nav-item"><a class="nav-link" href="#">Expresos</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">De Consumo</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Hipotecarios</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Adquision de Vehiculos</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Educativos y Escolares</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Vacacionales</a></li>
                                    </ul>
                                </li>
                                <li><a href="calculadora-prestamos.html"><i class="fa fa-calculator icons-menu"></i>Calculadora de Préstamos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-briefcase icons-menu"></i>PARA TU NEGOCIO</a>
                            <ul class="dropdowm-1">
                                <li class="nav-item"><a class="nav-link" href="#"><i class="fa  fa-coins icons-menu "></i>Ahorros o inversión</a>
                                    <ul class="dropdowm-2 navbar-nav">
                                        <li class="nav-item"><a class="nav-link" href="#">Cuentas de Ahorros</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Ahorros Programados</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Certificados Financieros</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Alquiler Hipotecario</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="#"><i class="far fa-credit-card icons-menu"></i>Créditos</a>
                                    <ul class="dropdowm-2 navbar-nav">
                                        <li class="nav-item"><a class="nav-link" href="#">Expresos</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">De Consumo</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Hipotecarios</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Adquision de Vehiculos</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Educativos y Escolares</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Vacacionales</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"> <i class="fa fa-blog icons-menu"></i>DINAMIZATE</a>
                            <ul class="dropdowm-1 navbar-nav">
                                <li><a class="nav-link" href="blog.html"><i class="fab fa-blogger icons-menu"></i>BLOG</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fas fa-handshake"></i>¿POR QUÉ ASOCIARSE?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa fa-newspaper icons-menu"></i>PRENSA</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa fa-address-card icons-menu"></i>CONTACTO</a>
                            <ul class="dropdowm-1 navbar-nav">
                                <li>
                                    <a class="nav-link" href="formulario.html"><i class="fa fa-wpforms icons-menu"></i>Formulario</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        `,
        prestamos: `
            <nav id="menu" class="menu-area">
                <ul>
                    <li><a href="index.html"><i class="fa fa-home icons-menu"></i>INICIO</a></li>
                    <li><a href="#"><i class="fa fa-user icons-menu"></i>PARA TI</a>
                        <ul class="dropdowm-1">
                            <li><a href="#"><i class="fas fa-coins icons-menu"></i>Ahorros o inversión</a>
                                <ul class="dropdowm-2">
                                    <li><a href="#">Cuentas de Ahorros</a></li>
                                    <li><a href="#">Ahorros Programados</a></li>
                                    <li><a href="#">Certificados Financieros</a></li>
                                    <li><a href="#">Alquiler Hipotecario</a></li>
                                </ul>
                            </li>
                            <li><a href="#"><i class="fa fa-credit-card icons-menu"></i>Créditos</a>
                                <ul class="dropdowm-2">
                                    <li><a href="#">Expresos</a></li>
                                    <li><a href="#">De Consumo</a></li>
                                    <li><a href="#">Hipotecarios</a></li>
                                    <li><a href="#">Adquision de Vehiculos</a></li>
                                    <li><a href="#">Educativos y Escolares</a></li>
                                    <li><a href="#">Vacacionales</a></li>
                                </ul>
                            </li>
                            <li><a href="#"><i class="fa fa-calculator icons-menu"></i>Calculadora de Préstamos</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-briefcase icons-menu"></i>PARA TU NEGOCIO</a>
                        <ul class="dropdowm-1">
                            <li><a href="#"><i class="fa  fa-coins icons-menu"></i>Ahorros o inversión</a>
                                <ul class="dropdowm-2">
                                    <li><a href="#">Cuentas de Ahorros</a></li>
                                    <li><a href="#">Ahorros Programados</a></li>
                                    <li><a href="#">Certificados Financieros</a></li>
                                    <li><a href="#">Alquiler Hipotecario</a></li>
                                </ul>
                            </li>
                            <li><a href="#"><i class="far fa-credit-card icons-menu"></i>Créditos</a>
                                <ul class="dropdowm-2">
                                    <li><a href="#">Expresos</a></li>
                                    <li><a href="#">De Consumo</a></li>
                                    <li><a href="#">Hipotecarios</a></li>
                                    <li><a href="#">Adquision de Vehiculos</a></li>
                                    <li><a href="#">Educativos y Escolares</a></li>
                                    <li><a href="#">Vacacionales</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"> <i class="fa fa-blog icons-menu"></i>DINAMIZATE</a>
                        <ul class="dropdowm-1">
                            <li><a href="#"><i class="fab fa-blogger icons-menu"></i>BLOG</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-handshake"></i>¿POR QUÉ ASOCIARSE?</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-newspaper icons-menu"></i>PRENSA</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-address-card icons-menu"></i>CONTACTO</a>
                        <ul class="dropdowm-1">
                            <li>
                                <a href="formulario.html"><i class="fa fa-wpforms icons-menu"></i>Formulario</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        `,
    };

    const navMenu = (dataset) => {
        const variant = dataset.navVariant || "default";
        return navTemplates[variant] || navTemplates.default;
    };

    const footer = (dataset) => {
        const footerVariant = dataset.footerVariant || "default";
        const containerClass =
            footerVariant === "simple" ? "container__footer" : "container__footer container-fluid";
        const logoMarkup =
            footerVariant === "simple"
                ? `<div class="logo"></div>`
                : `<div class="logo"><h5>CoopDinámica</h5></div>`;

        return `
        <footer>
            <div class="${containerClass}">
                <div class="box__footer">
                    ${logoMarkup}
                    <div class="terms">
                        <p>Somos la Cooperativa de Ahorros, Credito y servicios multiples la dinamica. Tenemos mas de 10
                            años siendo elegibles para todos, siendo
                            una de las cooperativas mas confiables, seguras y donde valoramos tu dinero.
                        </p>
                    </div>
                </div>
                <div class="box__footer">
                    <h5>Menu</h5>
                    <hr class="linea-divisora-footer menu-linea">
                    <a href="#inicio">Inicio</a>
                    <a href="#">Para ti</a>
                    <a href="#">Para tu negocio</a>
                    <a href="#">Blog</a>
                    <a href="#">Por que asociarse?</a>
                    <a href="#">prensa</a>
                    <a href="#">Contacto</a>
                </div>
                <div class="box__footer">
                    <h5>Redes Sociales</h5>
                    <hr class="linea-divisora-footer linea-redes">
                    <a href="#"> <i class="fab fa-facebook-square"></i> Facebook</a>
                    <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
                    <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a>
                    <a href="#"><i class="fab fa-instagram-square"></i> Instagram</a>
                </div>
            </div>
            <div class="box__copyright">
                <hr>
                <p>Todos los derechos reservados © 2022 <b>Andy Rosado Desing Web | Cooperativa Dinamica 2022 ©</b></p>
            </div>
        </footer>
    `;
    };

    const components = {
        loader,
        header,
        "nav-menu": navMenu,
        footer,
    };

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("[data-component]").forEach((component) => {
            const name = component.dataset.component;
            const render = components[name];
            if (!render) {
                return;
            }
            const markup = render(component.dataset);
            component.outerHTML = markup;
        });
    });
})();
