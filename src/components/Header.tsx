import { useState, useRef } from 'react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [eventosDropdownOpen, setEventosDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const eventosDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const handleEventosDropdownEnter = () => {
    if (eventosDropdownTimeout.current) clearTimeout(eventosDropdownTimeout.current);
    setEventosDropdownOpen(true);
  };

  const handleEventosDropdownLeave = () => {
    eventosDropdownTimeout.current = setTimeout(() => setEventosDropdownOpen(false), 200);
  };

  return (
    <header className="w-full bg-white text-black shadow-md fixed top-0 left-0 z-20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button
            className="font-bold text-xl tracking-wide bg-transparent border-none p-0 m-0 cursor-pointer hover:text-gray-700 transition"
            onClick={() => scrollToSection('top')}
            aria-label="Voltar ao início"
          >
            ETEC DE HORTOLÂNDIA
          </button>
        </div>
        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8 text-lg items-center">
          <li><button className="hover:text-gray-700 transition cursor-pointer" onClick={() => scrollToSection('top')}>Home</button></li>
          <li className="relative" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
            <button className="hover:text-gray-700 transition flex items-center gap-1" onClick={e => {e.preventDefault(); setDropdownOpen(!dropdownOpen);}}>
              Cursos
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded text-black z-30"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {scrollToSection('ds'); setDropdownOpen(false);}}>Desenvolvimento de Sistemas</button></li>
                <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {scrollToSection('adm'); setDropdownOpen(false);}}>Administração</button></li>
                <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {scrollToSection('nutri'); setDropdownOpen(false);}}>Nutrição e Dietética</button></li>
              </ul>
            )}
          </li>
          <li className="relative" onMouseEnter={handleEventosDropdownEnter} onMouseLeave={handleEventosDropdownLeave}>
            <button className="hover:text-gray-700 transition flex items-center gap-1" onClick={e => {e.preventDefault(); setEventosDropdownOpen(!eventosDropdownOpen);}}>
              Eventos
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {eventosDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded text-black z-30"
                onMouseEnter={handleEventosDropdownEnter}
                onMouseLeave={handleEventosDropdownLeave}
              >
                <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {scrollToSection('festival'); setEventosDropdownOpen(false);}}>Festival</button></li>
                <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {scrollToSection('nutritec'); setEventosDropdownOpen(false);}}>Nutritec</button></li>
                <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => {scrollToSection('epa'); setEventosDropdownOpen(false);}}>EPA</button></li>
              </ul>
            )}
          </li>
        </ul>
        {/* Mobile menu icon */}
        <button
          className="md:hidden flex items-center z-30"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Mobile menu overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-30 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button
            className="absolute top-4 right-4"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col gap-6 text-lg mt-20 ml-8">
            <li><button className="hover:text-gray-700 transition text-left cursor-pointer" onClick={() => {scrollToSection('top'); setMenuOpen(false);}}>Início</button></li>
            <li>
              <span className="font-semibold">Cursos</span>
              <ul className="ml-4 mt-2 flex flex-col gap-2">
                <li><button className="hover:text-gray-700 transition text-left" onClick={() => {scrollToSection('ds'); setMenuOpen(false);}}>Desenvolvimento de Sistemas</button></li>
                <li><button className="hover:text-gray-700 transition text-left" onClick={() => {scrollToSection('adm'); setMenuOpen(false);}}>Administração</button></li>
                <li><button className="hover:text-gray-700 transition text-left" onClick={() => {scrollToSection('nutri'); setMenuOpen(false);}}>Nutrição e Dietética</button></li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Eventos</span>
              <ul className="ml-4 mt-2 flex flex-col gap-2">
                <li><button className="hover:text-gray-700 transition text-left" onClick={() => {scrollToSection('festival'); setMenuOpen(false);}}>Festival</button></li>
                <li><button className="hover:text-gray-700 transition text-left" onClick={() => {scrollToSection('nutritec'); setMenuOpen(false);}}>Nutritec</button></li>
                <li><button className="hover:text-gray-700 transition text-left" onClick={() => {scrollToSection('epa'); setMenuOpen(false);}}>EPA</button></li>
              </ul>
            </li>
            <li><button className="hover:text-gray-700 transition text-left cursor-pointer" onClick={() => {scrollToSection('contato'); setMenuOpen(false);}}>Contato</button></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 