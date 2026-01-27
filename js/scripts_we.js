import { useMemo, useState } from 'react';

const DEFAULT_SUGGESTIONS = [
  'Prestamos',
  'Certificados Financieros',
  'Preguntas Frecuentes',
  'Ahorros',
  'Finanzas',
  'Articulos',
  'Seguros',
  'Prestamos Hipotecarios',
  'Prestamos personales',
  'Prestamos Empresariales',
  'Negocios',
  'Juventud',
  'Salud',
  'Salud Bucal',
  'Empresas',
  'Acerca de nosotros',
];

const WeInteractions = ({
  accordionItems = [],
  selectableItems = [],
  suggestions = DEFAULT_SUGGESTIONS,
}) => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredSuggestions = useMemo(() => {
    if (!searchTerm) {
      return [];
    }

    const normalized = searchTerm.toLowerCase();
    return suggestions.filter((item) => item.toLowerCase().includes(normalized));
  }, [searchTerm, suggestions]);

  const toggleSelectable = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((selected) => selected !== item)
        : [...prevSelected, item]
    );
  };

  return (
    <section>
      <div id="acordeon" className="accordion">
        {accordionItems.map(({ title, content }, index) => (
          <div key={`accordion-${index}`} className="accordion__item">
            <button
              type="button"
              className="accordion__header"
              aria-expanded={activeAccordion === index}
              onClick={() =>
                setActiveAccordion((prev) => (prev === index ? -1 : index))
              }
            >
              {title}
            </button>
            {activeAccordion === index && (
              <div className="accordion__panel">{content}</div>
            )}
          </div>
        ))}
      </div>

      <div className="autocomplete">
        <label htmlFor="search">Buscar</label>
        <input
          id="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          autoComplete="off"
        />
        {filteredSuggestions.length > 0 && (
          <ul className="autocomplete__list">
            {filteredSuggestions.map((item) => (
              <li key={item} className="autocomplete__item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul className="selectable">
        {selectableItems.map((item) => (
          <li
            key={item}
            className={`selectable__item ${
              selectedItems.includes(item) ? 'is-selected' : ''
            }`}
          >
            <button type="button" onClick={() => toggleSelectable(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WeInteractions;
