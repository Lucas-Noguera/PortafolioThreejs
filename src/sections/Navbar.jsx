import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const NavItems = () => {
  const { t } = useTranslation()
  const links = t('navLinks', { returnObjects: true })

  return (
    <ul className='nav-ul'>
      {links.map((item) => (
        <li key={item.id} className='nav-li'>
          <a href={item.href} className='nav-li_a' onClick={() => {}}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto c-space">
        <div className="flex justify-between items-center py-5">
          {/* Brand with highlight effect */}
          <a href="/" className="flex items-center space-x-1 hover:opacity-90 transition-opacity">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-indigo-500 transform -skew-x-12 rounded-md"></span>
              <span className="relative text-white font-bold text-xl px-2">Lucas</span>
            </span>
            <span className="text-white font-bold text-xl">Noguera</span>
          </a>

          <button
            onClick={toggleMenu}
            className='text-neutral-400 hover:text-white focus:outline-none sm:hidden'
            aria-label='Toggle menu'
          >
            <img
              src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
              alt="menu"
              className="w-6 h-6"
            />
          </button>

          <nav className='hidden sm:flex'>
            <NavItems />
          </nav>
        </div>

        <nav className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className='p-5'>
            <NavItems />
          </div>
        </nav>
      </div>
    </header>
  )
}
