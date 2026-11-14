import { useMemo, useState } from "react";

import {ArrowDown, ArrowLeft, ArrowRight, Search, X, FlaskConical, } from "lucide-react";
import { elements, categories } from "./data/elements";

import {cast, periodOf, characterImages, familyTitles,} from "./data/chemistry";

export default function App() {
  const [matrixFont, setMatrixFont] = useState(false);
  const [selected, setSelected] = useState(elements[0]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [periodFilter, setPeriodFilter] = useState(null);

  const period = periodOf(selected);
  const person = cast[period - 1];

  const matched = useMemo(() => {
    const results = elements.filter((element) => {
      const matchesCategory = category === "all" || category === element.category;

      const matchesPeriod = !periodFilter || periodOf(element) === periodFilter;

      const searchText = `${element.name} ${element.symbol} ${element.number}`;

      const matchesQuery = searchText
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesPeriod && matchesQuery;
    });

    return new Set(results.map((element) => element.number));
  }, [query, category, periodFilter]);

  function move(direction) {
    setSelected((current) => {

      const nextIndex = (current.number - 1 + direction + elements.length) % elements.length;
      return elements[nextIndex];
    });
  }

  function resetFilters() {
    setQuery("");
    setCategory("all");
    setPeriodFilter(null);
  }

  function chooseElement(element) {
    setSelected(element);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.getElementById("element-dossier")?.scrollIntoView({
      block: "start",
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  function choosePeriod(nextPeriod) {
    setPeriodFilter(nextPeriod);

    const firstElement = elements.find((element) => periodOf(element) === nextPeriod);

    if (firstElement) {setSelected(firstElement);}
  }

  const description =
    selected.description ||
    (selected.category === "unknown"
      ? `Many properties of ${selected.name} remain uncertain. It is element ${selected.number} in period ${period}.`
      : `${selected.name} (${selected.symbol}) is element ${selected.number} in period ${period}. Its classification is ${categories[selected.category].toLowerCase()}.`);

  return (
    <div className={`app ${matrixFont ? "matrix-font" : ""}`}>
      <div
        key={person.id}
        className="character-wallpaper"
        style={{backgroundImage: `url("${characterImages[person.id]}")`}}
        aria-hidden="true"
      />

      <div className="wallpaper-shade" aria-hidden="true" />
      <button
        type="button"
        className="font-toggle"
        onClick={() => setMatrixFont(!matrixFont)}
        aria-pressed={matrixFont}
        aria-label={
          matrixFont
            ? "Switch to original font"
            : "Switch to Matrix font"
        }
        title={
          matrixFont
            ? "Switch to original font"
            : "Switch to Matrix font"
        }
      >
        <span className="font-preview" aria-hidden="true">
          {matrixFont ? "Aa" : "01"}
        </span>

        <span className="font-toggle-label">
          {matrixFont ? "Default" : "Matrix"}
        </span>
      </button>

      <header className="header">
        <a
          href="#"
          className="brand"
          aria-label="Breaking Bad home"
        >
          <span className="brand-line">
            <span className="brand-tile">
              <small>35</small>
              Br
            </span>

            <span className="brand-word">eaking</span>
          </span>

          <span className="brand-line">
            <span className="brand-tile">
              <small>56</small>
              Ba
            </span>

            <span className="brand-word">d</span>
          </span>
        </a>

        <span className="header-note">
          Chemistry, B****
        </span>
      </header>

      <main>
        <section
          className="hero"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Periodic table new edition
            </div>

            <h1 id="hero-title">
              Be the one
              <br />
              <em>to knock</em>
            </h1>

            <p>
              Learn Elements Breaking Bad Style(don't endup like HIM.)
            </p>

            <a
              href="#periodic-table"
              className="explore-link"
            >
              Find your element
              <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-stamp">
            <FlaskConical size={23} />

            <span>
              HANDLE WITH
              <br />
              <b>CURIOSITY</b>
            </span>

            <small>EST. 2008 / ABQ</small>
          </div>
        </section>

        <section
          id="element-dossier"
          className="lab"
          aria-label="Selected element dossier"
        >
        
          <div className="dossier">

            <div className="specimen">
              <div className="specimen-top">
                <span>
                  NO. {String(selected.number).padStart(3, "0")}
                </span>

                <span>{selected.mass}</span>
              </div>

              <div className="specimen-symbol">
                {selected.symbol}
              </div>

              <div className="specimen-bottom">
                <strong>{selected.name}</strong>

                <span>
                  {categories[selected.category]}
                </span>
              </div>

              <span className="specimen-cross top">
                +
              </span>



              <span className="specimen-cross bottom">
                +
              </span>
            </div>

            <div
              className="element-info"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="eyebrow">
                PERIOD {period} / {person.name.toUpperCase()}
              </div>

              <h2>{familyTitles[selected.category]}</h2>

              <p>{description}</p>

              <dl className="properties">
                <div>
                  <dt>Atomic number</dt>
                  <dd>{selected.number}</dd>
                </div>

                <div>
                  <dt>
                    {selected.mass.startsWith("[")
                      ? "Isotope mass no."
                      : "Atomic weight"}
                  </dt>

                  <dd>{selected.mass}</dd>
                </div>

                <div>
                  <dt>Period / group</dt>

                  <dd>
                    {period} /{" "}
                    {selected.row > 7 ? "f-block" : selected.col}
                  </dd>
                </div>
              </dl>

              {selected.uses && (
                <p className="uses">
                  <span>IN THE REAL WORLD</span>
                  {selected.uses}
                </p>
              )}
            </div>
          </div>

          <div className="lab-bottom">
            <span>
              Cartel style periodic table.
            </span>

            <div>
              <button
                type="button"
                aria-label="Previous element"
                onClick={() => move(-1)}
              >
                <ArrowLeft size={16} />
              </button>

              <span>
                {selected.symbol} / {selected.number} OF{" "}
                {elements.length}
              </span>

              <button
                type="button"
                aria-label="Next element"
                onClick={() => move(1)}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        <section
          className="explorer"
          id="periodic-table"
          aria-labelledby="table-title"
        >
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                THE WHOLE OPERATION
              </div>

              <h2 id="table-title">
                Pick your element<span>.</span>
              </h2>
            </div>

            <label className="search">
              <Search size={17} />

              <input
                type="search"
                placeholder="Name, symbol, atomic number…"
                aria-label="Search elements"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </label>
          </div>

          <div
            className="cast-strip"
            aria-label="Filter by period"
          >
            <button
              type="button"
              className={!periodFilter ? "active" : ""}
              aria-pressed={!periodFilter}
              onClick={() => setPeriodFilter(null)}
            >
              <small>THE CAST</small>
              <b>All periods</b>
            </button>

            {cast.map((character, index) => (
              <button
                type="button"
                key={character.id}
                className={
                  periodFilter === index + 1 ? "active" : ""
                }
                aria-pressed={periodFilter === index + 1}
                onClick={() => choosePeriod(index + 1)}
              >
                <small>
                  0{index + 1} /{" "}
                  {character.alias.replace("The ", "")}
                </small>

                <b>{character.name.split(" ")[0]}</b>
              </button>
            ))}
          </div>

          <div
            className="filters"
            aria-label="Filter by element family"
          >
            <button
              type="button"
              aria-pressed={category === "all"}
              className={category === "all" ? "active" : ""}
              onClick={() => setCategory("all")}
            >
              All families
            </button>

            {Object.entries(categories).map(([key, label]) => (
              <button
                type="button"
                key={key}
                aria-pressed={category === key}
                className={category === key ? "active" : ""}
                onClick={() => setCategory(key)}
              >
                <i className={`swatch ${key}`} />
                {label}
              </button>
            ))}
          </div>

          <div
            className="table-scroll"
            tabIndex={0}
            role="region"
            aria-label="Periodic table. Scroll horizontally on small screens."
          >
            <div className="periodic">
              {Array.from({ length: 18 }, (_, index) => (
                <span
                  key={`group-${index}`}
                  className="group-label"
                  style={{gridColumn: index + 2, gridRow: 1,}}
                >
                  {index + 1}
                </span>
              ))}

              {cast.map((character, index) => (
                <span
                  key={character.id}
                  className="period-label"
                  style={{gridColumn: 1, gridRow: index + 2,}}
                >
                  {index + 1}
                </span>
              ))}

              <div
                className="table-note"
                style={{gridColumn: "4 / 13", gridRow: "2 / 4",}}
              >
                <span>Br / Ba</span>

                <p>
                  Choose an element.
                  <br />

                  <b>
                    Every row has a character. Every family has a
                    signature.
                  </b>
                </p>
              </div>

              {elements.map((element) => (
                <button
                  type="button"
                  key={element.number}
                  
                  disabled={!matched.has(element.number)}
                  style={{gridRow: element.row + 1, gridColumn: element.col + 1,}}
                  
                  className={`element ${element.category} ${
                    selected.number === element.number
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => chooseElement(element)}
                  aria-label={`${element.name}, ${element.symbol}, atomic number ${element.number}, period ${periodOf(element)}`}
                  
                  aria-pressed={selected.number === element.number}
                >
                  <span className="atomic">
                    {element.number}
                  </span>

                  <b>{element.symbol}</b>

                  <span className="element-name">
                    {element.name}
                  </span>
                </button>
              ))}

              <div
                className="series-label"
                
                style={{
                  gridRow: 10,
                  gridColumn: "1 / 5",
                }}
              >
                6 / LANTHANIDES 
              </div>

              <div
                className="series-label"
                
                style={{
                  gridRow: 11,
                  
                  gridColumn: "1 / 5",
                }}
              >
                7 / ACTINIDES
              </div>

              <div
                className="placeholder"
                style={{
                  gridRow: 7,
                  gridColumn: 4,
                }}
              >
                57–71
              </div>

              <div
                className="placeholder"
                style={{
                  gridRow: 8,
                  gridColumn: 4,
                }}
              >
                89–103
              </div>
            </div>
          </div>

          <div className="table-footer">
            <span role="status">
              {matched.size} / {elements.length} ELEMENTS MATCH
              {matched.size === 0 &&
                " — No matches. Try another search."}
            </span>

            <button
              type="button"
              onClick={resetFilters}
            >
              Reset filters
              <X size={12} />
            </button>

            <span className="scroll-hint">
              SCROLL TO EXPLORE 
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}